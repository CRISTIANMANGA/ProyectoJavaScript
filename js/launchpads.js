// ______________________________________________________________________________________________________________________________________________________________________________//


//PORTALES DE CONEXION

// ______________________________________________________________________________________________________________________________________________________________________________//


const API_URL_LAUNCHPADS="https://api.spacexdata.com/v4/launchpads";


// ______________________________________________________________________________________________________________________________________________________________________________//


//HECHIZO DE INVOCACION DE TODOS LOS NOMBRES DE LOS launchpadS 

// ______________________________________________________________________________________________________________________________________________________________________________//




export const getAlllaunchpadNames = async () => {// El mago de datos 'getAlllaunchpadNames' lanza un hechizo asincrónico para obtener todos los nombres de los launchpads
    try {
        let response = await fetch(API_URL_LAUNCHPADS);// El mago lanza un encantamiento de búsqueda al portal API_URL_LAUNCHPADS y espera la respuesta
        let data = await response.json(); // El mago convierte la respuesta del portal en un pergamino mágico (JSON) que contiene los datos
        
        let launchpadNames = data.map(launchpad => launchpad.name);// El mago extrae los nombres de los launchpads del pergamino mágico, creando una lista de nombres
        
        return launchpadNames;// El mago devuelve la lista de nombres de launchpads para que otros la usen
    } catch (error) {
        console.error("Error al obtener los nombres de los launchpads:", error);  // Si ocurre un error, el mago escribe una runa de error en la consola mágica
        throw error;// El mago lanza el error para que otros hechiceros puedan manejarlo
    }
};
console.log(await getAlllaunchpadNames());// El mago invoca su hechizo 'getAlllaunchpadNames' y muestra los resultados en la consola mágica



// ______________________________________________________________________________________________________________________________________________________________________________//


//HECHIZO PODEROSO DE INVOCACION DE LA INFO DE LOS launchpadS EN BOTONES QUE AL PRESIONAR INVOCAS 

// ______________________________________________________________________________________________________________________________________________________________________________//



const getAllDetailDatalaunchpads = async (launchpadId) => {
    try {
        const response = await fetch(API_URL_LAUNCHPADS);// Lanza el hechizo para invocar los datos de los launchpads desde el portal mágico (API)
        const data = await response.json(); // Desencanta los datos en formato JSON y guarda el pergamino


        const launchpad = data.find(launchpad => launchpad.id === launchpadId);// Busca el launchpad deseado en el pergamino
        if (launchpad) {
            const {
                images: {
                    large: [
                        launchpad_images_large
                    ]
                  },
                  name: launchpad_name,
                  full_name: launchpad_full_name,
                  locality: launchpad_locality,
                  region: launchpad_region,
                  latitude: launchpad_latitude ,
                  longitude: launchpad_longitude,
                  launch_attempts: launchpad_launch_attempts,
                  launch_successes: launchpad_launch_successes,
                  rockets: [
                    launchpad_rockets
                  ],
                  timezone: launchpad_timezone,
                  launches: [
                    timezone_launches_launchpad
                  ],
                  status: launchpad_status,
                  details: launchpad_details,
                  id: launchpad_id
            } = launchpad;// Extrae todas las runas y encantamientos del launchpad específico

            console.log('Datos del launchpad:', launchpad);// Imprime en el pergamino los datos desencantados del launchpad


// ______________________________________________________________________________________________________________________________________________________________________________//


// El mago invoca al DOM para encontrar la cabaña específica donde se mostrarán los detalles del launchpad
            const launchpadDetails = document.getElementById('launchpads-details');
            if (launchpadDetails) {
                launchpadDetails.innerHTML =  // El mago conjura el hechizo "innerHTML" para imprimir dinámicamente en el pergamino

                /*html*/`
                <section class='main'>
                    <section class='left'>
                        <h2>${launchpad_name}</h2>
                        <p><strong>launchpad_full_name:</strong> ${launchpad_full_name}</p>
                            <p><strong>launchpad_locality:</strong> ${launchpad_locality}</p>
                            <p><strong>launchpad_region:</strong> ${launchpad_region}</p>
                            <p><strong>launchpad_latitude:</strong> ${launchpad_latitude}</p>
                            <p><strong>launchpad_longitude:</strong> ${launchpad_longitude}</p>
                            <p><strong>launchpad_launch_successes:</strong> ${launchpad_launch_successes}</p>
                            <p><strong>launchpad_launch_attempts:</strong> ${launchpad_launch_attempts}</p>
                        </section>
                        <section class='middle'>
                            <img src="${launchpad_images_large}" alt="${launchpad_name}" referrerpolicy="no-referrer">
                        </section>
                        <section class='right'>
                            <p><strong>launchpad_rockets:</strong> ${launchpad_rockets}</p>
                            <p><strong>launchpad_timezone:</strong> ${launchpad_timezone}</p>
                            <p><strong>timezone_launches_launchpad:</strong> ${timezone_launches_launchpad}</p>
                            <p><strong>launchpad_status:</strong> ${launchpad_status}</p>
                            <p><strong>launchpad_details:</strong> ${launchpad_details}</p>
                            <p><strong>launchpad_id:</strong> ${launchpad_id}</p>
                        </section>
                </section>

            `;
            } else {
                console.error('Elemento con ID "launchpads-details" no encontrado.');// Si la cabaña no se encuentra, el mago muestra un error en la consola mágica
            }
        } else {
            console.error('No se encontró el launchpad con la ID proporcionada en los datos obtenidos.');
        }
    } catch (error) {
        console.error('Error al obtener los datos del launchpad:', error);
    }
};

// ______________________________________________________________________________________________________________________________________________________________________________//


// HECHIZO para obtener todas las IDs de los launchpads y crear botones dinámicos
const crearGaleriaBotones = async () => {
    const response = await fetch(API_URL_LAUNCHPADS); // Invoca un conjuro para obtener el pergamino mágico con datos de los launchpads
    const data = await response.json();// Desenrolla el pergamino y extrae su esencia en forma de datos JSON

    console.log('Datos obtenidos para crear botones:', data); // Revela en la esfera de cristal los datos obtenidos

    // Crear botones dinámicamente
    const buttonsContainer = document.getElementById('buttons-container');// Localiza el contenedor de botones en el DOM con el hechizo de localización
    if (buttonsContainer) {// Si encuentra el contenedor...
        data.forEach((launchpad, index) => {// Para cada launchpad en los datos recibidos...
            const button = document.createElement('button'); // Invoca un nuevo botón encantado
            button.textContent = `${index + 1}`;// Graba en el botón el número mágico correspondiente
            button.onclick = () => getAllDetailDatalaunchpads(launchpad.id);// Encanta el botón con un hechizo de invocación para obtener detalles del launchpad
            buttonsContainer.appendChild(button);// Añade el botón encantado al contenedor de botones
        });

        const buttonCountContainer = document.querySelector('#button_container_counts_ID');// Localiza el contenedor de conteo de botones en el DOM con otro hechizo de localización
        if (buttonCountContainer) {// Si encuentra el contenedor de conteo de botones...
            buttonCountContainer.innerHTML = `buttons count: ${data.length}`;// Escribe en el pergamino el número total de botones creados
        } else {// Si no encuentra el contenedor de conteo de botones...
            console.error('Elemento con ID "button_container_counts_ID" no encontrado.');// Lanza un conjuro de error en la consola
        }


        if (data.length > 0) {// Si hay al menos un launchpad en los datos...
            getAllDetailDatalaunchpads(data[0].id);// Invoca inmediatamente los detalles del primer launchpad
        }
    } else {// Si no encuentra el contenedor de botones...
        console.error('Elemento con ID "buttons-container" no encontrado.'); // Lanza un conjuro de error en la consola
    }
};
crearGaleriaBotones();// Lanza el hechizo principal para crear la galería de botones
