// ______________________________________________________________________________________________________________________________________________________________________________//


//PORTALES DE CONEXION

// ______________________________________________________________________________________________________________________________________________________________________________//


const API_URL_SHIPS="https://api.spacexdata.com/v4/ships";


// ______________________________________________________________________________________________________________________________________________________________________________//


//HECHIZO DE INVOCACION DE TODOS LOS NOMBRES DE LOS shipS 

// ______________________________________________________________________________________________________________________________________________________________________________//




export const getAllshipNames = async () => {// El mago de datos 'getAllshipNames' lanza un hechizo asincrónico para obtener todos los nombres de los ships
    try {
        let response = await fetch(API_URL_SHIPS);// El mago lanza un encantamiento de búsqueda al portal API_URL_SHIPS y espera la respuesta
        let data = await response.json(); // El mago convierte la respuesta del portal en un pergamino mágico (JSON) que contiene los datos
        
        let shipNames = data.map(ship => ship.name);// El mago extrae los nombres de los ships del pergamino mágico, creando una lista de nombres
        
        return shipNames;// El mago devuelve la lista de nombres de ships para que otros la usen
    } catch (error) {
        console.error("Error al obtener los nombres de los ships:", error);  // Si ocurre un error, el mago escribe una runa de error en la consola mágica
        throw error;// El mago lanza el error para que otros hechiceros puedan manejarlo
    }
};
console.log(await getAllshipNames());// El mago invoca su hechizo 'getAllshipNames' y muestra los resultados en la consola mágica



// ______________________________________________________________________________________________________________________________________________________________________________//


//HECHIZO PODEROSO DE INVOCACION DE LA INFO DE LOS shipS EN BOTONES QUE AL PRESIONAR INVOCAS 

// ______________________________________________________________________________________________________________________________________________________________________________//



const getAllDetailDataships = async (shipId) => {
    try {
        const response = await fetch(API_URL_SHIPS);// Lanza el hechizo para invocar los datos de los ships desde el portal mágico (API)
        const data = await response.json(); // Desencanta los datos en formato JSON y guarda el pergamino


        const ship = data.find(ship => ship.id === shipId);// Busca el ship deseado en el pergamino
        if (ship) {
            const {
                last_ais_update: ship_last_ais_update,
                legacy_id: ship_legacy_id,
                model: ship_model,
                type: ship_type,
                roles: [
                    ship_roles
                ],
                imo: ship_imo,
                mmsi: ship_mmsi,
                abs: ship_abs,
                class: ship_class,
                mass_kg: ship_mass_kg,
                mass_lbs: ship_mass_lbs,
                year_built: ship_year_built,
                home_port: ship_home_port,
                status: shipship_status,
                speed_kn: ship_speed_kn,
                course_deg: ship_course_deg,
                latitude: ship_latitude,
                longitude: ship_longitude,
                link:ship_link,
                image: ship_image,
                name: ship_name,
                active: ship_active,
                launches: [
                    ship_launches
                ],
                id: ship_id
            } = ship;// Extrae todas las runas y encantamientos del ship específico

            console.log('Datos del ship:', ship);// Imprime en el pergamino los datos desencantados del ship


// ______________________________________________________________________________________________________________________________________________________________________________//


// El mago invoca al DOM para encontrar la cabaña específica donde se mostrarán los detalles del ship
            const shipDetails = document.getElementById('ships-details');
            if (shipDetails) {
                shipDetails.innerHTML =  // El mago conjura el hechizo "innerHTML" para imprimir dinámicamente en el pergamino

                /*html*/`
                <section class='main'>
                <h2 ID='noImage'>NO IMAGE</h2>
                <section class='left'>
                    ${ship_image ? `<img src="${ship_image}" alt="${ship_name}" referrerpolicy="no-referrer">` : ''}
                </section>
                <section class='right'>
                <h2>${ship_name}</h2>
                <p><strong>ship_last_ais_update:</strong> ${ship_last_ais_update}</p>
                <p><strong>ship_legacy_id:</strong> ${ship_legacy_id}</p>
                <p><strong>ship_model:</strong> ${ship_model}</p>
                <p><strong>ship_type:</strong> ${ship_type}</p>
                <p><strong>ship_roles:</strong> ${ship_roles}</p>
                <p><strong>ship_imo:</strong> ${ship_imo}</p>
                <p><strong>ship_mmsi:</strong> ${ship_mmsi}</p>
                <p><strong>ship_abs:</strong> ${ship_abs}</p>
                <p><strong>ship_class:</strong> ${ship_class}</p>
                <p><strong>ship_mass_kg:</strong> ${ship_mass_kg}</p>
                <p><strong>ship_mass_lbs:</strong> ${ship_mass_lbs}</p>
                <p><strong>ship_year_built:</strong> ${ship_year_built}</p>
                <p><strong>ship_home_port:</strong> ${ship_home_port}</p>
                <p><strong>shipship_status:</strong> ${shipship_status}</p>
                <p><strong>ship_speed_kn:</strong> ${ship_speed_kn}</p>
                <p><strong>ship_course_deg:</strong> ${ship_course_deg}</p>
                <p><strong>ship_latitude:</strong> ${ship_latitude}</p>
                <p><strong>ship_longitude:</strong> ${ship_longitude}</p>
                <p><strong>ship_link: </strong><a href="${ship_link}">ship_link</a></p>                       
                <p><strong>ship_active:</strong> ${ship_active}</p>
                <p><strong>ship_launches:</strong> ${ship_launches}</p>
                <p><strong>ship_id:</strong> ${ship_id}</p>
                </section>
                </section>
                `;
            } else {
                console.error('Elemento con ID "ships-details" no encontrado.');// Si la cabaña no se encuentra, el mago muestra un error en la consola mágica
            }
        } else {
            console.error('No se encontró el ship con la ID proporcionada en los datos obtenidos.');
        }
    } catch (error) {
        console.error('Error al obtener los datos del ship:', error);
    }
};

// ______________________________________________________________________________________________________________________________________________________________________________//


// HECHIZO para obtener todas las IDs de los ships y crear botones dinámicos
const crearGaleriaBotones = async () => {
    const response = await fetch(API_URL_SHIPS); // Invoca un conjuro para obtener el pergamino mágico con datos de los ships
    const data = await response.json();// Desenrolla el pergamino y extrae su esencia en forma de datos JSON

    console.log('Datos obtenidos para crear botones:', data); // Revela en la esfera de cristal los datos obtenidos

    // Crear botones dinámicamente
    const buttonsContainer = document.getElementById('buttons-container');// Localiza el contenedor de botones en el DOM con el hechizo de localización
    if (buttonsContainer) {// Si encuentra el contenedor...
        data.forEach((ship, index) => {// Para cada ship en los datos recibidos...
            const button = document.createElement('button'); // Invoca un nuevo botón encantado
            button.textContent = `${index + 1}`;// Graba en el botón el número mágico correspondiente
            button.onclick = () => getAllDetailDataships(ship.id);// Encanta el botón con un hechizo de invocación para obtener detalles del ship
            buttonsContainer.appendChild(button);// Añade el botón encantado al contenedor de botones
        });

        const buttonCountContainer = document.querySelector('#button_container_counts_ID');// Localiza el contenedor de conteo de botones en el DOM con otro hechizo de localización
        if (buttonCountContainer) {// Si encuentra el contenedor de conteo de botones...
            buttonCountContainer.innerHTML = `buttons count: ${data.length}`;// Escribe en el pergamino el número total de botones creados
        } else {// Si no encuentra el contenedor de conteo de botones...
            console.error('Elemento con ID "button_container_counts_ID" no encontrado.');// Lanza un conjuro de error en la consola
        }


        if (data.length > 0) {// Si hay al menos un ship en los datos...
            getAllDetailDataships(data[0].id);// Invoca inmediatamente los detalles del primer ship
        }
    } else {// Si no encuentra el contenedor de botones...
        console.error('Elemento con ID "buttons-container" no encontrado.'); // Lanza un conjuro de error en la consola
    }
};
crearGaleriaBotones();// Lanza el hechizo principal para crear la galería de botones
