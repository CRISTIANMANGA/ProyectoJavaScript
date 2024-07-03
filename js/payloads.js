




const API_URL_PAYLOADS="https://api.spacexdata.com/v4/payloads";


// ______________________________________________________________________________________________________________________________________________________________________________//



// ______________________________________________________________________________________________________________________________________________________________________________//




export const getAllpayloadNames = async () => {// El mago de datos 'getAllpayloadNames' lanza un hechizo asincrónico para obtener todos los nombres de los cohetes
    try {
        let response = await fetch(API_URL_PAYLOADS);// El mago lanza un encantamiento de búsqueda al portal API_URL_PAYLOADS y espera la respuesta
        let data = await response.json(); // El mago convierte la respuesta del portal en un pergamino mágico (JSON) que contiene los datos
        
        let payloadNames = data.map(payload => payload.name);// El mago extrae los nombres de los cohetes del pergamino mágico, creando una lista de nombres
        
        return payloadNames;// El mago devuelve la lista de nombres de cohetes para que otros la usen
    } catch (error) {
        console.error("Error al obtener los nombres de los cohetes:", error);  // Si ocurre un error, el mago escribe una runa de error en la consola mágica
        throw error;// El mago lanza el error para que otros hechiceros puedan manejarlo
    }
};
console.log(await getAllpayloadNames());// El mago invoca su hechizo 'getAllpayloadNames' y muestra los resultados en la consola mágica



// ______________________________________________________________________________________________________________________________________________________________________________//



// ______________________________________________________________________________________________________________________________________________________________________________//



const getAllDetailDatapayloads = async (payloadId) => {
    try {
        const response = await fetch(API_URL_PAYLOADS);// Lanza el hechizo para invocar los datos de los cohetes desde el portal mágico (API)
        const data = await response.json(); // Desencanta los datos en formato JSON y guarda el pergamino


        const payload = data.find(payload => payload.id === payloadId);// Busca el cohete deseado en el pergamino
        if (payload) {
            const {
                dragon: {
                    capsule: payload_dragon_capsule,
                    mass_returned_kg: payload_dragon_mass_returned_kg,
                    mass_returned_lbs: payload_dragon_mass_returned_lbs,
                    flight_time_sec:payload_dragon_flight_time_sec ,
                    manifest: payload_dragon_manifest,
                    water_landing: payload_dragon_water_landing,
                    land_landing: payload_dragon_land_landing
                  },
                  name: payload_name,
                  type:payload_type,
                  reused:payload_reused,
                  launch: payload_launch,
                  customers: [
                    payload_customers
                  ],
                  norad_ids: [
                    payload_norad_ids
                  ],
                  nationalities: [
                    payload_nationalities
                  ],
                  manufacturers: [
                    payload_manufacturers
                  ],
                  mass_kg:payload_mass_kg,
                  mass_lbs: payload_mass_lbs,
                  orbit: payload_orbit,
                  reference_system: payload_reference_system,
                  regime: payload_regime,
                  longitude: payload_longitude,
                  semi_major_axis_km: payload_semi_major_axis_km,
                  eccentricity: payload_eccentricity,
                  periapsis_km:payload_periapsis_km ,
                  apoapsis_km: payload_apoapsis_km,
                  inclination_deg: payload_inclination_deg,
                  period_min:payload_period_min ,
                  lifespan_years: payload_lifespan_years,
                  epoch:payload_epoch ,
                  mean_motion: payload_mean_motion,
                  raan:payload_raan ,
                  arg_of_pericenter:payload_arg_of_pericenter,
                  mean_anomaly:payload_mean_anomaly ,
                  id: payload_id
            } = payload;// Extrae todas las runas y encantamientos del cohete específico

            console.log('Datos del cohete:', payload);// Imprime en el pergamino los datos desencantados del cohete


// ______________________________________________________________________________________________________________________________________________________________________________//


// El mago invoca al DOM para encontrar la cabaña específica donde se mostrarán los detalles del cohete
            const payloadDetails = document.getElementById('payload-details');
            if (payloadDetails) {
                payloadDetails.innerHTML =  // El mago conjura el hechizo "innerHTML" para imprimir dinámicamente en el pergamino

                /*html*/`
                <section class='main'>
                <section class='left'>
                    <h2>${payload_name}</h2>
                    <p><strong>payload_dragon_capsule:</strong> ${payload_dragon_capsule}</p>
                    <p><strong>payload_dragon_mass_returned_kg:</strong> ${payload_dragon_mass_returned_kg}</p>
                    <p><strong>payload_dragon_mass_returned_lbs:</strong> ${payload_dragon_mass_returned_lbs}</p>
                    <p><strong>payload_dragon_flight_time_sec:</strong> ${payload_dragon_flight_time_sec}</p>
                    <p><strong>payload_dragon_manifest:</strong> ${payload_dragon_manifest ? `<a href="${payload_dragon_manifest}" target="_blank">payload_dragon_manifest</a>` : 'N/A'}</p>     
                    <p><strong>payload_dragon_water_landing:</strong> ${payload_dragon_water_landing}</p>
                    <p><strong>payload_dragon_land_landing:</strong> ${payload_dragon_land_landing}</p>
                    <p><strong>payload_type:</strong> ${payload_type}</p>
                    <p><strong>payload_reused:</strong> ${payload_reused}</p>
                    <p><strong>payload_launch:</strong> ${payload_launch}</p>
                    <p><strong>payload_customers:</strong> ${payload_customers}</p>
                    <p><strong>payload_norad_ids:</strong> ${payload_norad_ids}</p>
                    <p><strong>payload_nationalities:</strong> ${payload_nationalities}</p>
                    <p><strong>payload_manufacturers:</strong> ${payload_manufacturers}</p>
                    <p><strong>payload_mass_kg:</strong> ${payload_mass_kg}</p>
                    <p><strong>payload_mass_lbs:</strong> ${payload_mass_lbs}</p>
                    </section>
                    <section class='middle'>
                        <img src='../storage/img/paylodss.png'>
                    </section>
                    <section class='right'>
                    <p><strong>payload_orbit:</strong> ${payload_orbit}</p>
                    <p><strong>payload_reference_system:</strong> ${payload_reference_system}</p>
                    <p><strong>payload_regime:</strong> ${payload_regime}</p>
                    <p><strong>payload_longitude:</strong> ${payload_longitude}</p>
                    <p><strong>payload_semi_major_axis_km:</strong> ${payload_semi_major_axis_km}</p>
                    <p><strong>payload_eccentricity:</strong> ${payload_eccentricity}</p>
                    <p><strong>payload_periapsis_km:</strong> ${payload_periapsis_km}</p>
                    <p><strong>payload_apoapsis_km:</strong> ${payload_apoapsis_km}</p>
                    <p><strong>payload_inclination_deg:</strong> ${payload_inclination_deg}</p>
                    <p><strong>payload_period_min:</strong> ${payload_period_min}</p>
                    <p><strong>payload_lifespan_years:</strong> ${payload_lifespan_years}</p>
                    <p><strong>payload_epoch:</strong> ${payload_epoch}</p>
                    <p><strong>payload_mean_motion:</strong> ${payload_mean_motion}</p>
                    <p><strong>payload_raan:</strong> ${payload_raan}</p>
                    <p><strong>payload_arg_of_pericenter:</strong> ${payload_arg_of_pericenter}</p>
                    <p><strong>payload_mean_anomaly:</strong> ${payload_mean_anomaly}</p>
                    <p><strong>payload_id:</strong> ${payload_id}</p>                
                </section>
                </section>
                `;
            } else {
                console.error('Elemento con ID "payload-details" no encontrado.');// Si la cabaña no se encuentra, el mago muestra un error en la consola mágica
            }
        } else {
            console.error('No se encontró el cohete con la ID proporcionada en los datos obtenidos.');
        }
    } catch (error) {
        console.error('Error al obtener los datos del cohete:', error);
    }
};

// ______________________________________________________________________________________________________________________________________________________________________________//


// HECHIZO para obtener todas las IDs de los cohetes y crear botones dinámicos
const crearGaleriaBotones = async () => {
    const response = await fetch(API_URL_PAYLOADS); // Invoca un conjuro para obtener el pergamino mágico con datos de los cohetes
    const data = await response.json();// Desenrolla el pergamino y extrae su esencia en forma de datos JSON

    console.log('Datos obtenidos para crear botones:', data); // Revela en la esfera de cristal los datos obtenidos

    // Crear botones dinámicamente
    const buttonsContainer = document.getElementById('buttons-container');// Localiza el contenedor de botones en el DOM con el hechizo de localización
    if (buttonsContainer) {// Si encuentra el contenedor...
        data.forEach((payload, index) => {// Para cada cohete en los datos recibidos...
            const button = document.createElement('button'); // Invoca un nuevo botón encantado
            button.textContent = `${index + 1}`;// Graba en el botón el número mágico correspondiente
            button.onclick = () => getAllDetailDatapayloads(payload.id);// Encanta el botón con un hechizo de invocación para obtener detalles del cohete
            buttonsContainer.appendChild(button);// Añade el botón encantado al contenedor de botones
        });

        const buttonCountContainer = document.querySelector('#button_container_counts_ID');// Localiza el contenedor de conteo de botones en el DOM con otro hechizo de localización
        if (buttonCountContainer) {// Si encuentra el contenedor de conteo de botones...
            buttonCountContainer.innerHTML = `buttons count: ${data.length}`;// Escribe en el pergamino el número total de botones creados
        } else {// Si no encuentra el contenedor de conteo de botones...
            console.error('Elemento con ID "button_container_counts_ID" no encontrado.');// Lanza un conjuro de error en la consola
        }


        if (data.length > 0) {// Si hay al menos un cohete en los datos...
            getAllDetailDatapayloads(data[0].id);// Invoca inmediatamente los detalles del primer cohete
        }
    } else {// Si no encuentra el contenedor de botones...
        console.error('Elemento con ID "buttons-container" no encontrado.'); // Lanza un conjuro de error en la consola
    }
};
crearGaleriaBotones();// Lanza el hechizo principal para crear la galería de botones
