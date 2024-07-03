// ______________________________________________________________________________________________________________________________________________________________________________//


//PORTALES DE CONEXION

// ______________________________________________________________________________________________________________________________________________________________________________//


const API_URL_LANDPADS="https://api.spacexdata.com/v4/landpads";


// ______________________________________________________________________________________________________________________________________________________________________________//


//HECHIZO DE INVOCACION DE TODOS LOS NOMBRES DE LOS landpads 

// ______________________________________________________________________________________________________________________________________________________________________________//


export const getAlllandpadsNames = async () => {// El mago de datos 'getAlllandpadsNames' lanza un hechizo asincrónico para obtener todos los nombres de los landpads
    try {
        let response = await fetch(API_URL_LANDPADS);// El mago lanza un encantamiento de búsqueda al portal API_URL_LANDPADS y espera la respuesta
        let data = await response.json(); // El mago convierte la respuesta del portal en un pergamino mágico (JSON) que contiene los datos
        
        let landpadsNames = data.map(landpads => landpads.name);// El mago extrae los nombres de los landpads del pergamino mágico, creando una lista de nombres
        
        return landpadsNames;// El mago devuelve la lista de nombres de landpads para que otros la usen
    } catch (error) {
        console.error("Error al obtener los nombres de los landpads:", error);  // Si ocurre un error, el mago escribe una runa de error en la consola mágica
        throw error;// El mago lanza el error para que otros hechiceros puedan manejarlo
    }
};
console.log(await getAlllandpadsNames());// El mago invoca su hechizo 'getAlllandpadsNames' y muestra los resultados en la consola mágica


// ______________________________________________________________________________________________________________________________________________________________________________//


//HECHIZO PODEROSO DE INVOCACION DE LA INFO DE LOS landpads EN BOTONES QUE AL PRESIONAR INVOCAS 

// ______________________________________________________________________________________________________________________________________________________________________________//


const getAllDetailDatalandpads = async (landpadId) => {
    try {
        const response = await fetch(API_URL_LANDPADS);// el mago inicia su encantamiento para buscar datos en el API_URL_LANDPADS
        const data = await response.json();// el mago espera la respuesta mágica del encantamiento fetch y obtiene los datos

        const landpads = data.find(landpad => landpad.id === landpadId); // Busca el landpad específico con la ID proporcionada
        if (landpads) {
            const { // Desestructura los datos del landpad encontrado
                images: {
                    large: [
                        landpads_large
                    ]
                  },
                  name: landpads_name,
                  full_name: landpads_full_name,
                  status: landpads_status,
                  type: landpads_type,
                  locality: landpads_locality,
                  region: landpads_region,
                  latitude: landpads_latitude,
                  longitude: landpads_longitude,
                  landing_attempts: landpads_landing_attempts,
                  landing_successes: landpads_landing_successes,
                  wikipedia: landpads_wikipedia,
                  details: landpads_details,
                  launches: [
                    landpads_launches
                  ],
                  id: landpads_id
            } = landpads;

            console.log(data);
            console.log('Datos del landpad:', landpads);// Imprime los detalles del landpad en la consola mágica

            const landpadsDetails = document.getElementById('landpads-details');// Accede al pergamino mágico 'landpads-details' en el DOM
            if (landpadsDetails) { // Llena el pergamino con los datos mágicos del landpad
                landpadsDetails.innerHTML = //contenido que ira dentro del pergamino mágico 'landpads-details'

                    // Utilizamos condiciones mágicas, como ${variable ? fairings.reused : 'N/A'}, para verificar si cierta información está 
                    // disponible antes de escribirla en el pergamino. Es como verificar si un hechizo está disponible antes de lanzarlo.
                    /*html*/
                    `
                    <section class='main'>
                    <section class='left'>
                    <img src="${landpads_large}" alt="${landpads_name}" referrerpolicy="no-referrer">
                    </section>
                    <section class='right'>
                    <h2>${landpads_name}</h2>
                    <p><strong>landpad_full_name:</strong> ${landpads_full_name}</p>
                    <p><strong>landpad_status:</strong> ${landpads_status}</p>
                    <p><strong>landpad_type:</strong> ${landpads_type}</p>
                    <p><strong>landpad_locality:</strong> ${landpads_locality}</p>
                    <p><strong>landpad_region:</strong> ${landpads_region}</p>
                    <p><strong>landpad_latitude:</strong> ${landpads_latitude}</p>
                    <p><strong>landpad_longitude:</strong> ${landpads_longitude}</p>
                    <p><strong>landpad_landing_attempts:</strong> ${landpads_landing_attempts}</p>
                    <p><strong>landpad_landing_successes:</strong> ${landpads_landing_successes}</p>
                    <p><strong>landpad_wikipedia:</strong><a href="${landpads_wikipedia}">Wikipedia</a></p>                       
                    <p><strong>landpad_details:</strong> ${landpads_details}</p>
                    <p><strong>landpad_launches:</strong> ${landpads_launches}</p>
                    <p><strong>landpad_id:</strong> ${landpads_id}</p>
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

// ______________________________________________________________________________________________________________________________________________________________________________//


// HECHIZO para obtener todas las IDs de los landpads y crear botones dinámicos
const crearGaleriaBotones = async () => {
    const response = await fetch(API_URL_LANDPADS); // Invoca un conjuro para obtener el pergamino mágico con datos de los landpads
    const data = await response.json();// Desenrolla el pergamino y extrae su esencia en forma de datos JSON

    console.log('Datos obtenidos para crear botones:', data); // Revela en la esfera de cristal los datos obtenidos

    // Crear botones dinámicamente
    const buttonsContainer = document.getElementById('buttons-container');// Localiza el contenedor de botones en el DOM con el hechizo de localización
    if (buttonsContainer) {// Si encuentra el contenedor...
        data.forEach((landpads, index) => {// Para cada landpads en los datos recibidos...
            const button = document.createElement('button'); // Invoca un nuevo botón encantado
            button.textContent = `${index + 1}`;// Graba en el botón el número mágico correspondiente
            button.onclick = () => getAllDetailDatalandpads(landpads.id);// Encanta el botón con un hechizo de invocación para obtener detalles del landpads
            buttonsContainer.appendChild(button);// Añade el botón encantado al contenedor de botones
        });

        const buttonCountContainer = document.querySelector('#button_container_counts_ID');// Localiza el contenedor de conteo de botones en el DOM con otro hechizo de localización
        if (buttonCountContainer) {// Si encuentra el contenedor de conteo de botones...
            buttonCountContainer.innerHTML = `buttons count: ${data.length}`;// Escribe en el pergamino el número total de botones creados
        } else {// Si no encuentra el contenedor de conteo de botones...
            console.error('Elemento con ID "button_container_counts_ID" no encontrado.');// Lanza un conjuro de error en la consola
        }

        if (data.length > 0) {// Si hay al menos un landpads en los datos...
            getAllDetailDatalandpads(data[0].id);// Invoca inmediatamente los detalles del primer landpads
        }
    } else {// Si no encuentra el contenedor de botones...
        console.error('Elemento con ID "buttons-container" no encontrado.'); // Lanza un conjuro de error en la consola
    }
};
crearGaleriaBotones();// Lanza el hechizo principal para crear la galería de botones
