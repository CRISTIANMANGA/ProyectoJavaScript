

const API_URL_ROCKETS="https://api.spacexdata.com/v4/rockets";




export const getAllRocketNames = async () => {// El mago de datos 'getAllRocketNames' lanza un hechizo asincrónico para obtener todos los nombres de los cohetes
    try {
        let response = await fetch(API_URL_ROCKETS);// El mago lanza un encantamiento de búsqueda al portal API_URL_ROCKETS y espera la respuesta
        let data = await response.json(); // El mago convierte la respuesta del portal en un pergamino mágico (JSON) que contiene los datos
        
        let rocketNames = data.map(rocket => rocket.name);// El mago extrae los nombres de los cohetes del pergamino mágico, creando una lista de nombres
        
        return rocketNames;// El mago devuelve la lista de nombres de cohetes para que otros la usen
    } catch (error) {
        console.error("Error al obtener los nombres de los cohetes:", error);  // Si ocurre un error, el mago escribe una runa de error en la consola mágica
        throw error;// El mago lanza el error para que otros hechiceros puedan manejarlo
    }
};
console.log(await getAllRocketNames());// El mago invoca su hechizo 'getAllRocketNames' y muestra los resultados en la consola mágica





const getAllDetailDataRockets = async (rocketId) => {
    try {
        const response = await fetch(API_URL_ROCKETS);// Lanza el hechizo para invocar los datos de los cohetes desde el portal mágico (API)
        const data = await response.json(); // Desencanta los datos en formato JSON y guarda el pergamino


        const rocket = data.find(rocket => rocket.id === rocketId);// Busca el cohete deseado en el pergamino
        if (rocket) {
            const {
                height: {
                    meters: meters_height,
                    feet: feet_height
                },
                diameter: {
                    meters: meters_diameter,
                    feet: feet_diameter
                },
                mass: {
                    kg: kg_mass,
                    lb: lb_mass
                },
                first_stage: {
                    thrust_sea_level: {
                        kN: kN_first_stage,
                        lbf: lbf_first_stage
                    },
                    thrust_vacuum: {
                        kN: kN_thrust_vacuum,
                        lbf: lbf_thrust_vacuum
                    },
                    reusable: reusable_reusable,
                    engines: engines_reusable,
                    fuel_amount_tons: fuel_amount_tons_reusable,
                    burn_time_sec: burn_time_sec_reusable
                },
                second_stage: {
                    thrust: {
                        kN: kN_second_stage,
                        lbf: lbf_second_stage
                    },
                    payloads: {
                        composite_fairing: {
                            height: {
                                meters: meters_height_composite_fairing,
                                feet: feet_height_composite_fairing
                            },
                            diameter: {
                                meters: meters_diameter_second_stage,
                                feet: feet_diameter_second_stage
                            }
                        },
                        option_1: option_1
                    },
                    reusable: reusable,
                    engines: engines,
                    fuel_amount_tons: fuel_amount_tons,
                    burn_time_sec: burn_time_sec
                },
                landing_legs: {
                    number: number_landing_legs,
                    material: material_landing_legs
                },
                payload_weights: [
                    {
                        id: payloadId,
                        name: payloadName,
                        kg: Kg_payload_weights,
                        lb: lb_payload_weights
                    }
                ],
                engines: {
                    isp: {
                        sea_level: sea_level,
                        vacuum: vacuum
                    },
                    thrust_sea_level: {
                        kN: kN_sea,
                        lbf: lbf_sea
                    },
                    thrust_vacuum: {
                        kN: kN_vacuum,
                        lbf: lbf_vacuum
                    },
                    number: number_engines,
                    type: type_engine,
                    version: version_engine,
                    layout: single,
                    engine_loss_max: engine_loss_max,
                    propellant_1: propellant_1,
                    propellant_2: propellant_2,
                    thrust_to_weight: thrust_to_weight
                },
                flickr_images: [
                    imagenFlickr1, 
                    imagenFlickr2
                ],
                name: nameRocket,
                type: typeRocket,
                active: active,
                stages: stages,
                boosters: boosters,
                cost_per_launch: cost_per_launch,
                success_rate_pct: success_rate_pct,
                first_flight: first_flight,
                country: country,
                company: company,
                wikipedia: wikipedia,
                description: description,
                id: idRocket
            } = rocket;// Extrae todas las runas y encantamientos del cohete específico

            console.log('Datos del cohete:', rocket);// Imprime en el pergamino los datos desencantados del cohete

            const propellantCount = [propellant_1, propellant_2].filter(Boolean).length;


        const rocketDetails = document.getElementById('rocket-details');
            if (rocketDetails) {
                rocketDetails.innerHTML =  // El mago conjura el hechizo "innerHTML" para imprimir dinámicamente en el pergamino

                /*html*/`
                <section class='down'>
                <section class='down_left'>
                <section class='up'>    
                <h2>${nameRocket}</h2>
                </section>
                <p><strong>Description:</strong> ${description}</p>
                <p><strong>ID:</strong> ${idRocket}</p>
                <p><strong>Country:</strong> ${country}</p>
                <p><strong>Cost_per_launch:</strong> ${cost_per_launch}</p>
                <p><strong>Company:</strong> ${company}</p>
                <p><strong>Meters_height:</strong> ${meters_height}</p>
                <p><strong>Feet_height:</strong> ${feet_height}</p>
                <p><strong>First_flight:</strong> ${first_flight}</p>
                <p><strong>kg_mass:</strong> ${kg_mass}</p>
                <p><strong>lb_mass:</strong> ${lb_mass}</p>
                <p><strong>Meters_diameter:</strong> ${meters_diameter}</p>
                <p><strong>Feet_diameter:</strong> ${feet_diameter}</p>
                <p><strong>Wikipedia:</strong> <a href="${wikipedia}">Link</a></p>
                </section>

                <section class='down_middle'>
                <section class='down_middle_up'>
                <section class='down_middle_up_left'>
                <div id='AAcceleration'>
                <div id='AAcceleration_data'></div>
                </div>
                <p><strong>kN_first_stage:</strong> ${kN_first_stage}</p>
                <p><strong>lbf_first_stage:</strong> ${lbf_first_stage}</p>
                </section>
                <section class='down_middle_up_right'>
                <div id='Speed_in_space'>
                <div id='Speed_in_space_data'></div>
                </div>
                <p><strong>kN_thrust_vacuum:</strong> ${kN_thrust_vacuum}</p>
                <p><strong>lbf_thrust_vacuum:</strong> ${lbf_thrust_vacuum}</p>
                </section>
                </section>


                <section class='down_middle_down'>
                <section class='down_middle_left'>
                <p><strong>TypeRocket:</strong> ${typeRocket}</p>
                <p><strong>Active:</strong> ${active}</p>
                <p><strong>PropellantCount:</strong> ${propellantCount}</p>
                <p><strong>Number_landing_legs:</strong> ${number_landing_legs}</p>
                <p><strong>Material_landing_legs:</strong> ${material_landing_legs}</p>
                </section>
                <section class='down_middle_middle'>
                <img src="${imagenFlickr1}" alt="${nameRocket}" referrerpolicy="no-referrer">
                <img src="${imagenFlickr2}" alt="${nameRocket}" referrerpolicy="no-referrer">
               </section>
                <section class='down_middle_right'>
                <p><strong>Type_engine:</strong> ${type_engine}</p>
                <p><strong>Engine_loss_max:</strong> ${engine_loss_max}</p>
                <p><strong>Number_engines:</strong> ${number_engines}</p>
                <p><strong>Propellant_1:</strong> ${propellant_1}</p>
                <p><strong>Propellant_2:</strong> ${propellant_2}</p>
                </section>
                </section>
                </section>

                <section class='down_right'>
                <p><strong>kg_mass:</strong> ${kg_mass}</p>
                <p><strong>lb_mass:</strong> ${lb_mass}</p>
                <div id='kgGrapichbar'>
                <div id='kgGrapichbar_data'></div>
                </div>
                <p><strong>Kg_payload_weights:</strong> ${Kg_payload_weights}</p>
                <p><strong>lb_payload_weights:</strong> ${lb_payload_weights}</p>
                <div id='payloadGraph'>
                <div id='payloadGraph_data'></div>
                </div>
                <p><strong>Meters_height:</strong> ${meters_height}</p>
                <p><strong>Feet_height:</strong> ${feet_height}</p>
                <div id='meterBarHeight'>
                <div id='meterBarHeight_data'></div>
                </div>
                <p><strong>Meters_diameter:</strong> ${meters_diameter}</p>
                <p><strong>Feet_diameter:</strong> ${feet_diameter}</p>
                <div id='Circle_diameter'>
                <div id='Circle_diameter_data'></div>
                </div>
                <p><strong>Meters_diameter_second_stage:</strong> ${meters_diameter_second_stage}</p>
                <p><strong>Feet_diameter_second_stage:</strong> ${feet_diameter_second_stage}</p>
                <div id='Diameter_second_stage'>
                <div id='Diameter_second_stage_data'></div>
                </div>            
                <p><strong>Meters_height_composite_fairing:</strong> ${meters_height_composite_fairing}</p>
                <p><strong>Feet_height_composite_fairing:</strong> ${feet_height_composite_fairing}</p>
                <div id='Height_composite_fairing'>
                <div id='Height_composite_fairing_data'></div>
                </div>
                </section>
                </section>
            `;
// ______________________________________________________________________________________________________________________________________________________________________________//


            //MOSTRAR BARRAS MAGICAS DE PORCENTAJE DINAMICAMENTE
                const maxKgMass = 200000; // Por ejemplo, establece un valor máximo de masa en kg
                const percentageKgMass = (kg_mass / maxKgMass) * 100; // Calcula el porcentaje de la masa actual respecto al máximo

                const kgGrapichbarData = document.getElementById('kgGrapichbar_data');
                if (kgGrapichbarData) {
                    kgGrapichbarData.style.width = `${percentageKgMass}%`; // Actualiza dinámicamente el ancho de la barra de progreso
                } else {
                    console.error('Elemento con ID "kgGrapichbar_data" no encontrado.');
                }

// ______________________________________________________________________________________________________________________________________________________________________________//
                

                const maxAAcceleration = 100000; // Establece un valor máximo para la aceleración atmosférica (por ejemplo, asumiendo un máximo del 100%)
                const percentageAAcceleration = (kN_first_stage / maxAAcceleration) * 100; // Calcula el porcentaje de la aceleración atmosférica respecto al máximo
                
                const AAccelerationData = document.getElementById('AAcceleration_data');
                if (AAccelerationData) {
                    AAccelerationData.style.width = `${percentageAAcceleration}%`; // Actualiza dinámicamente el ancho de la barra de progreso
                } else {
                    console.error('Elemento con ID "AAcceleration_data" no encontrado.');
                }

// ______________________________________________________________________________________________________________________________________________________________________________//

                    
                // Calcula el máximo valor para kN_thrust_vacuum (por ejemplo)
                const maxKNThrustVacuum = 2000; 

                // Calcula el porcentaje de kN_thrust_vacuum respecto al máximo
                const percentageKNThrustVacuum = (kN_thrust_vacuum / maxKNThrustVacuum) * 100;

                // Selecciona el elemento HTML Speed_in_space_data para actualizar su ancho dinámicamente
                const speedInSpaceData = document.getElementById('Speed_in_space_data');
                if (speedInSpaceData) {
                    speedInSpaceData.style.width = `${percentageKNThrustVacuum}%`; // Actualiza el ancho de la barra de progreso
                } else {
                    console.error('Elemento con ID "Speed_in_space_data" no encontrado.');
                }

// ______________________________________________________________________________________________________________________________________________________________________________//


                const maxDiameter = 10; // Establece un valor máximo para el diámetro (por ejemplo, asumiendo un máximo de 10 unidades)
                const percentageDiameter = (meters_diameter / maxDiameter) * 100; // Calcula el porcentaje del diámetro respecto al máximo

                const DiameterData = document.getElementById('meterBarHeight_data');
                if (DiameterData) {
                    DiameterData.style.width = `${percentageDiameter}%`; // Actualiza dinámicamente el ancho de la barra de progreso
                } else {
                    console.error('Elemento con ID "meterBarHeight_data" no encontrado.');
                }

// ______________________________________________________________________________________________________________________________________________________________________________//

              
                const maxKgPayloadWeights = 5000; // Establece un valor máximo para el peso de carga útil en kilogramos (por ejemplo, asumiendo un máximo de 5000 kg)
                const maxLbPayloadWeights = 11023; // Establece un valor máximo para el peso de carga útil en libras (por ejemplo, asumiendo un máximo de 11023 lb)

                // Calcula el porcentaje del peso de carga útil en kilogramos respecto al máximo
                const percentageKgPayloadWeights = (Kg_payload_weights / maxKgPayloadWeights) * 100;
                // Calcula el porcentaje del peso de carga útil en libras respecto al máximo
                const percentageLbPayloadWeights = (lb_payload_weights / maxLbPayloadWeights) * 100;

                const PayloadWeightsData = document.getElementById('payloadGraph_data');
                if (PayloadWeightsData) {
                    if (Kg_payload_weights) {
                        PayloadWeightsData.style.width = `${percentageKgPayloadWeights}%`; // Actualiza dinámicamente el ancho de la barra de progreso para kilogramos
                    } else if (lb_payload_weights) {
                        PayloadWeightsData.style.width = `${percentageLbPayloadWeights}%`; // Actualiza dinámicamente el ancho de la barra de progreso para libras
                    } else {
                        console.error('Elemento con ID "payloadGraph_data" no encontrado.');
                    }
                }

// ______________________________________________________________________________________________________________________________________________________________________________//

                const maxMetersDiameter = 5; // Establece un valor máximo para el diámetro en metros (por ejemplo, asumiendo un máximo de 200 metros)
                const maxFeetDiameter = 656.17; // Establece un valor máximo para el diámetro en pies (por ejemplo, asumiendo un máximo de 656.17 pies)

                // Calcula el porcentaje del diámetro en metros respecto al máximo
                const percentageMetersDiameter = (meters_diameter / maxMetersDiameter) * 100;
                // Calcula el porcentaje del diámetro en pies respecto al máximo
                const percentageFeetDiameter = (feet_diameter / maxFeetDiameter) * 100;

                const CircleDiameterData = document.getElementById('Circle_diameter_data');
                if (CircleDiameterData) {
                    if (meters_diameter) {
                        CircleDiameterData.style.width = `${percentageMetersDiameter}%`; // Actualiza dinámicamente el ancho de la barra de progreso para metros
                    } else if (feet_diameter) {
                        CircleDiameterData.style.width = `${percentageFeetDiameter}%`; // Actualiza dinámicamente el ancho de la barra de progreso para pies
                    } else {
                        console.error('Elemento con ID "Circle_diameter_data" no encontrado.');
                    }
                }

// ______________________________________________________________________________________________________________________________________________________________________________//

                const maxMetersDiameterSecondStage = 10; // Establece un valor máximo para el diámetro en metros (por ejemplo, asumiendo un máximo de 10 metros)
                const maxFeetDiameterSecondStage = 32.8; // Establece un valor máximo para el diámetro en pies (por ejemplo, asumiendo un máximo de 32.8 pies)

                // Calcula el porcentaje del diámetro en metros respecto al máximo
                const percentageMetersDiameterSecondStage = (meters_diameter_second_stage / maxMetersDiameterSecondStage) * 100;
                // Calcula el porcentaje del diámetro en pies respecto al máximo
                const percentageFeetDiameterSecondStage = (feet_diameter_second_stage / maxFeetDiameterSecondStage) * 100;

                const DiameterSecondStageData = document.getElementById('Diameter_second_stage_data');
                if (DiameterSecondStageData) {
                    if (meters_diameter_second_stage) {
                        DiameterSecondStageData.style.width = `${percentageMetersDiameterSecondStage}%`; // Actualiza dinámicamente el ancho de la barra de progreso para metros
                    } else if (feet_diameter_second_stage) {
                        DiameterSecondStageData.style.width = `${percentageFeetDiameterSecondStage}%`; // Actualiza dinámicamente el ancho de la barra de progreso para pies
                    } else {
                        console.error('Elemento con ID "Diameter_second_stage_data" no encontrado.');
                    }
                }

// ______________________________________________________________________________________________________________________________________________________________________________//

                const maxMetersHeightCompositeFairing = 20; // Establece un valor máximo para la altura del carenado compuesto en metros (por ejemplo, asumiendo un máximo de 20 metros)
                const maxFeetHeightCompositeFairing = 65.6; // Establece un valor máximo para la altura del carenado compuesto en pies (20 metros es aproximadamente 65.6 pies)

                // Calcula el porcentaje de la altura del carenado compuesto en metros respecto al máximo
                const percentageMetersHeightCompositeFairing = (meters_height_composite_fairing / maxMetersHeightCompositeFairing) * 100;
                // Calcula el porcentaje de la altura del carenado compuesto en pies respecto al máximo
                const percentageFeetHeightCompositeFairing = (feet_height_composite_fairing / maxFeetHeightCompositeFairing) * 100;

                const HeightCompositeFairingData = document.getElementById('Height_composite_fairing_data');
                if (HeightCompositeFairingData) {
                    if (meters_height_composite_fairing) {
                        HeightCompositeFairingData.style.width = `${percentageMetersHeightCompositeFairing}%`; // Actualiza dinámicamente el ancho de la barra de progreso para metros
                    } else if (feet_height_composite_fairing) {
                        HeightCompositeFairingData.style.width = `${percentageFeetHeightCompositeFairing}%`; // Actualiza dinámicamente el ancho de la barra de progreso para pies
                    } else {
                        console.error('Elemento con ID "Height_composite_fairing_data" no encontrado.');
                    }
                }

            } else {
                console.error('Elemento con ID "rocket-details" no encontrado.');// Si la cabaña no se encuentra, el mago muestra un error en la consola mágica
            }
        } else {
            console.error('No se encontró el cohete con la ID proporcionada en los datos obtenidos.');
        }
    } catch (error) {
        console.error('Error al obtener los datos del cohete:', error);
    }
};

const crearGaleriaBotones = async () => {
    const response = await fetch(API_URL_ROCKETS); // Invoca un conjuro para obtener el pergamino mágico con datos de los cohetes
    const data = await response.json();// Desenrolla el pergamino y extrae su esencia en forma de datos JSON

    console.log('Datos obtenidos para crear botones:', data); // Revela en la esfera de cristal los datos obtenidos

    // Crear botones dinámicamente
    const buttonsContainer = document.getElementById('buttons-container');// Localiza el contenedor de botones en el DOM con el hechizo de localización
    if (buttonsContainer) {// Si encuentra el contenedor...
        data.forEach((rocket, index) => {// Para cada cohete en los datos recibidos...
            const button = document.createElement('button'); // Invoca un nuevo botón encantado
            button.textContent = `${index + 1}`;// Graba en el botón el número mágico correspondiente
            button.onclick = () => getAllDetailDataRockets(rocket.id);// Encanta el botón con un hechizo de invocación para obtener detalles del cohete
            buttonsContainer.appendChild(button);// Añade el botón encantado al contenedor de botones
        });

        const buttonCountContainer = document.querySelector('#button_container_counts_ID');// Localiza el contenedor de conteo de botones en el DOM con otro hechizo de localización
        if (buttonCountContainer) {// Si encuentra el contenedor de conteo de botones...
            buttonCountContainer.innerHTML = `buttons count: ${data.length}`;// Escribe en el pergamino el número total de botones creados
        } else {// Si no encuentra el contenedor de conteo de botones...
            console.error('Elemento con ID "button_container_counts_ID" no encontrado.');// Lanza un conjuro de error en la consola
        }


        if (data.length > 0) {// Si hay al menos un cohete en los datos...
            getAllDetailDataRockets(data[0].id);// Invoca inmediatamente los detalles del primer cohete
        }
    } else {// Si no encuentra el contenedor de botones...
        console.error('Elemento con ID "buttons-container" no encontrado.'); // Lanza un conjuro de error en la consola
    }
};
crearGaleriaBotones();// Lanza el hechizo principal para crear la galería de botones


