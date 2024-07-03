

const API_URL_DRAGONS="https://api.spacexdata.com/v4/dragons";




export const getAlldragonsNames = async () => {// El mago de datos 'getAlldragonsNames' lanza un hechizo asincrónico para obtener todos los nombres de los dragons
    try {
        let response = await fetch(API_URL_DRAGONS);// El mago lanza un encantamiento de búsqueda al portal API_URL_DRAGONS y espera la respuesta
        let data = await response.json(); // El mago convierte la respuesta del portal en un pergamino mágico (JSON) que contiene los datos
        
        let dragonsNames = data.map(dragons => dragons.name);// El mago extrae los nombres de los dragons del pergamino mágico, creando una lista de nombres
        
        return dragonsNames;// El mago devuelve la lista de nombres de dragons para que otros la usen
    } catch (error) {
        console.error("Error al obtener los nombres de los dragons:", error);  // Si ocurre un error, el mago escribe una runa de error en la consola mágica
        throw error;// El mago lanza el error para que otros hechiceros puedan manejarlo
    }
};
console.log(await getAlldragonsNames());// El mago invoca su hechizo 'getAlldragonsNames' y muestra los resultados en la consola mágica



const getAllDetailDatadragons = async (landpadId) => {
    try {
        const response = await fetch(API_URL_DRAGONS);// el mago inicia su encantamiento para buscar datos en el API_URL_DRAGONS
        const data = await response.json();// el mago espera la respuesta mágica del encantamiento fetch y obtiene los datos

        const dragons = data.find(landpad => landpad.id === landpadId); // Busca el landpad específico con la ID proporcionada
        if (dragons) {
            const { // Desestructura los datos del landpad encontrado
                heat_shield: {
                    material: dragons_material,
                    size_meters: dragons_size_meters,
                    temp_degrees: dragons_temp_degrees,
                    dev_partner: dragons_dev_partner
                    },
                    launch_payload_mass: {
                    kg: dragons_kg,
                    lb: dragons_lb
                    },
                    launch_payload_vol: {
                    cubic_meters: dragons_cubic_meters,
                    cubic_feet: dragons_cubic_feet
                    },
                    return_payload_mass: {
                    kg: return_payload_mass_dragons_kg,
                    lb: return_payload_mass_dragons_lb
                    },
                    return_payload_vol: {
                    cubic_meters: return_payload_vol_dragons_cubic_meters,
                    cubic_feet: return_payload_vol_dragons_cubic_feet
                    },
                    pressurized_capsule: {
                    payload_volume: {
                        cubic_meters: payload_volume_dragons_cubic_meters,
                        cubic_feet: payload_volume_dragons_cubic_feet
                    }
                    },
                    trunk: {
                    trunk_volume: {
                        cubic_meters: trunk_volume_dragons_cubic_meters,
                        cubic_feet: cubic_feet_dragons_cubic_feet
                    },
                    cargo: {
                        solar_array: dragons_solar_array,
                        unpressurized_cargo: dragons_unpressurized_cargo
                    }
                    },
                    height_w_trunk: {
                    meters: height_w_trunk_dragons_meters,
                    feet: height_w_trunk_dragons_feet
                    },
                    diameter: {
                    meters: dragons_meters,
                    feet: dragons_feet
                    },
                    first_flight: dragons_first_flight,
                    flickr_images: [
                        dragons_flickr_images
                    ],
                    name: dragons_name,
                    type: dragons_type,
                    active: dragons_active,
                    crew_capacity: dragons_crew_capacity,
                    sidewall_angle_deg: dragons_sidewall_angle_deg,
                    orbit_duration_yr: dragons_orbit_duration_yr,
                    dry_mass_kg: dragons_dry_mass_kg,
                    dry_mass_lb: dragons_dry_mass_lb,
                    thrusters: [
                    {
                        type: thrusters_dragons_type,
                        amount: dragons_amount,
                        pods: dragons_pods,
                        fuel_1: dragons_fuel_1,
                        fuel_2: dragons_fuel_2,
                        isp: dragons_isp,
                        thrust: {
                        kN: dragons_kN,
                        lbf: dragons_lbf
                        }
                    }
                    ],
                    wikipedia: dragons_wikipedia,
                    description: dragons_description,
                    id: dragons_id
            } = dragons;

            console.log(data);
            console.log('Datos del landpad:', dragons);// Imprime los detalles del landpad en la consola mágica

            const dragonsDetails = document.getElementById('dragon-details');// Accede al pergamino mágico 'dragon-details' en el DOM
            if (dragonsDetails) { // Llena el pergamino con los datos mágicos del landpad
                dragonsDetails.innerHTML = //contenido que ira dentro del pergamino mágico 'dragon-details'

                    // Utilizamos condiciones mágicas, como ${variable ? fairings.reused : 'N/A'}, para verificar si cierta información está 
                    // disponible antes de escribirla en el pergamino. Es como verificar si un hechizo está disponible antes de lanzarlo.
                    /*html*/
                    `
                    <section class='main'>
                    <section class='left'>
                    <h2>${dragons_name}</h2>
                    <p><strong>dragon_material:</strong> ${dragons_material}</p>
                    <p><strong>dragon_size_meters:</strong> ${dragons_size_meters}</p>
                    <p><strong>dragon_temp_degrees:</strong> ${dragons_temp_degrees}</p>
                    <p><strong>dragon_dev_partner:</strong> ${dragons_dev_partner}</p>
                    <p><strong>dragon_kg:</strong> ${dragons_kg}</p>
                    <p><strong>dragon_lb:</strong> ${dragons_lb}</p>
                    <p><strong>dragon_cubic_meters:</strong> ${dragons_cubic_meters}</p>
                    <p><strong>dragon_cubic_feet:</strong> ${dragons_cubic_feet}</p>
                    <p><strong>return_payload_mass_dragons_kg:</strong> ${return_payload_mass_dragons_kg}</p>
                    <p><strong>return_payload_mass_dragons_lb:</strong> ${return_payload_mass_dragons_lb}</p>
                    <p><strong>return_payload_vol_dragons_cubic_meters:</strong> ${return_payload_vol_dragons_cubic_meters}</p>
                    <p><strong>return_payload_vol_dragons_cubic_feet:</strong> ${return_payload_vol_dragons_cubic_feet}</p>
                    <p><strong>payload_volume_dragons_cubic_meters:</strong> ${payload_volume_dragons_cubic_meters}</p>
                    <p><strong>payload_volume_dragons_cubic_feet:</strong> ${payload_volume_dragons_cubic_feet}</p>
                    <p><strong>height_w_trunk_dragons_feet:</strong> ${height_w_trunk_dragons_feet}</p>
                    <p><strong>dragon_unpressurized_cargo:</strong> ${dragons_unpressurized_cargo}</p>
                    <p><strong>height_w_trunk_dragons_meters:</strong> ${height_w_trunk_dragons_meters}</p>
                    </section>
                    
                    
                    <section class='middle'>
                    <section class='middle_up'>
                    <img src="${dragons_flickr_images}" alt="${dragons_name}" referrerpolicy="no-referrer">
                    </section>
                    <section class='middle_down'>
                    
                    <section class='middle_down_left'>
                    <p><strong>dragon_meters:</strong> ${dragons_meters}</p>
                    <p><strong>dragon_feet:</strong> ${dragons_feet}</p>
                    <p><strong>dragon_first_flight:</strong> ${dragons_first_flight}</p>
                    <p><strong>dragon_type:</strong> ${dragons_type}</p>
                    <p><strong>dragon_active:</strong> ${dragons_active}</p>
                    <p><strong>dragon_crew_capacity:</strong> ${dragons_crew_capacity}</p>
                    <p><strong>dragon_sidewall_angle_deg:</strong> ${dragons_sidewall_angle_deg}</p>
                    <p><strong>dragon_orbit_duration_yr:</strong> ${dragons_orbit_duration_yr}</p>
                    </section>

                    <section class='middle_down_right'>
                    <p><strong>dragon_dry_mass_kg:</strong> ${dragons_dry_mass_kg}</p>
                    <p><strong>dragon_dry_mass_lb:</strong> ${dragons_dry_mass_lb}</p>
                    <p><strong>thrusters_dragon_type:</strong> ${thrusters_dragons_type}</p>
                    <p><strong>dragon_amount:</strong> ${dragons_amount}</p>
                    <p><strong>dragon_pods:</strong> ${dragons_pods}</p>
                    </section>
                    
                    </section>
                    </section>
                    
                    <section class='right'>
                    <p><strong>dragon_fuel_1:</strong> ${dragons_fuel_1}</p>
                    <p><strong>dragon_fuel_2:</strong> ${dragons_fuel_2}</p>
                    <p><strong>dragon_isp:</strong> ${dragons_isp}</p>
                    <p><strong>dragon_kN:</strong> ${dragons_kN}</p>
                    <p><strong>dragon_lbf:</strong> ${dragons_lbf}</p>
                    <p><strong>dragon_wikipedia:</strong> ${dragons_wikipedia}</p>
                    <p><strong>dragon_description:</strong> ${dragons_description}</p>
                    <p><strong>dragon_id:</strong> ${dragons_id}</p>
                    <p><strong>trunk_volume_dragons_cubic_meters:</strong> ${trunk_volume_dragons_cubic_meters}</p>
                    <p><strong>cubic_feet_dragons_cubic_feet:</strong> ${cubic_feet_dragons_cubic_feet}</p>
                    <p><strong>dragon_solar_array:</strong> ${dragons_solar_array}</p>
                    </section>
                    </section>
                    `;
                }
            } else {
                console.error(`landpad con ID ${landpadId} no encontrado.`);
            }
        } catch (error) {
            console.error(`Error al obtener detalles del landpad con ID ${landpadId}: ${error.message}`);
    }
};


const crearGaleriaBotones = async () => {
    const response = await fetch(API_URL_DRAGONS); // Invoca un conjuro para obtener el pergamino mágico con datos de los dragons
    const data = await response.json();// Desenrolla el pergamino y extrae su esencia en forma de datos JSON

    console.log('Datos obtenidos para crear botones:', data); // Revela en la esfera de cristal los datos obtenidos

    // Crear botones dinámicamente
    const buttonsContainer = document.getElementById('buttons-container');// Localiza el contenedor de botones en el DOM con el hechizo de localización
    if (buttonsContainer) {// Si encuentra el contenedor...
        data.forEach((dragons, index) => {// Para cada dragons en los datos recibidos...
            const button = document.createElement('button'); // Invoca un nuevo botón encantado
            button.textContent = `${index + 1}`;// Graba en el botón el número mágico correspondiente
            button.onclick = () => getAllDetailDatadragons(dragons.id);// Encanta el botón con un hechizo de invocación para obtener detalles del dragons
            buttonsContainer.appendChild(button);// Añade el botón encantado al contenedor de botones
        });

        const buttonCountContainer = document.querySelector('#button_container_counts_ID');// Localiza el contenedor de conteo de botones en el DOM con otro hechizo de localización
        if (buttonCountContainer) {// Si encuentra el contenedor de conteo de botones...
            buttonCountContainer.innerHTML = `buttons count: ${data.length}`;// Escribe en el pergamino el número total de botones creados
        } else {// Si no encuentra el contenedor de conteo de botones...
            console.error('Elemento con ID "button_container_counts_ID" no encontrado.');// Lanza un conjuro de error en la consola
        }

        if (data.length > 0) {// Si hay al menos un dragons en los datos...
            getAllDetailDatadragons(data[0].id);// Invoca inmediatamente los detalles del primer dragons
        }
    } else {// Si no encuentra el contenedor de botones...
        console.error('Elemento con ID "buttons-container" no encontrado.'); // Lanza un conjuro de error en la consola
    }
};
crearGaleriaBotones();// Lanza el hechizo principal para crear la galería de botones
