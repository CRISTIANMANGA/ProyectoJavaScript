// ______________________________________________________________________________________________________________________________________________________________________________//


//PORTALES DE CONEXION

// ______________________________________________________________________________________________________________________________________________________________________________//


const API_URL_CAPSULES="https://api.spacexdata.com/v4/capsules";


// ______________________________________________________________________________________________________________________________________________________________________________//


//HECHIZO DE INVOCACION DE TODOS LOS NOMBRES DE LOS capsuleS 

// ______________________________________________________________________________________________________________________________________________________________________________//




export const getAllCapsulesNames = async () => {// El mago de datos 'getAllcapsuleNames' lanza un hechizo asincrónico para obtener todos los nombres de los capsules
    try {
        let response = await fetch(API_URL_CAPSULES);// El mago lanza un encantamiento de búsqueda al portal API_URL_CAPSULES y espera la respuesta
        let data = await response.json(); // El mago convierte la respuesta del portal en un pergamino mágico (JSON) que contiene los datos
        
        let capsuleNames = data.map(capsule => capsule.serial);// El mago extrae los nombres de los capsules del pergamino mágico, creando una lista de nombres
        
        return capsuleNames;// El mago devuelve la lista de nombres de capsules para que otros la usen
    } catch (error) {
        console.error("Error al obtener los nombres de los capsules:", error);  // Si ocurre un error, el mago escribe una runa de error en la consola mágica
        throw error;// El mago lanza el error para que otros hechiceros puedan manejarlo
    }
};
console.log(await getAllCapsulesNames());// El mago invoca su hechizo 'getAllcapsuleNames' y muestra los resultados en la consola mágica



// ______________________________________________________________________________________________________________________________________________________________________________//


//HECHIZO PODEROSO DE INVOCACION DE LA INFO DE LOS capsuleS EN BOTONES QUE AL PRESIONAR INVOCAS 

// ______________________________________________________________________________________________________________________________________________________________________________//



const getAllDetailDataCapsules = async (capsuleId) => {
    try {
        const response = await fetch(API_URL_CAPSULES);// Lanza el hechizo para invocar los datos de los capsules desde el portal mágico (API)
        const data = await response.json(); // Desencanta los datos en formato JSON y guarda el pergamino


        const capsule = data.find(capsule => capsule.id === capsuleId);// Busca el capsule deseado en el pergamino
        if (capsule) {
            const {
            
                reuse_count: capsule_reuse_count,
                water_landings: capsule_water_landings,
                land_landings:capsule_land_landings,
                last_update: capsule_last_update,
                launches: [
                    capsule_launches
                ],
                serial: capsule_serial,
                status: capsule_status,
                type: capsule_type,
                id: capsule_id
                
            } = capsule;// Extrae todas las runas y encantamientos de la capsule específica

            console.log('Datos de la capsule:', capsule);// Imprime en el pergamino los datos desencantados del capsule


// ______________________________________________________________________________________________________________________________________________________________________________//


// El mago invoca al DOM para encontrar la cabaña específica donde se mostrarán los detalles del capsule
            const capsuleDetails = document.getElementById('capsule-details');
            if (capsuleDetails) {
                capsuleDetails.innerHTML = // El mago conjura el hechizo "innerHTML" para imprimir dinámicamente en el pergamino

                /*html*/`
                <section class='down'>
                <div id='imgCapsule'>
                    <img src="../storage/img/spaceCapsule.svg">
                </div>
                <div id='down_info_box'>
                <h2>${capsule_serial}</h2>
                <p><strong>capsule_reuse_count:</strong> ${capsule_reuse_count}</p>
                <p><strong>capsule_water_landings:</strong> ${capsule_water_landings}</p>
                <p><strong>capsule_land_landings:</strong> ${capsule_land_landings}</p>
                <p><strong>capsule_last_update:</strong> ${capsule_last_update}</p>
                <p><strong>capsule_launches:</strong> ${capsule_launches}</p>
                <p><strong>capsule_status:</strong> ${capsule_status}</p>
                <p><strong>capsule_type:</strong> ${capsule_type}</p>
                <p><strong>capsule_id:</strong> ${capsule_id}</p>
                </div>
                </section>
                
            `;
            } else {
                console.error('Elemento con ID "capsule-details" no encontrado.');// Si la cabaña no se encuentra, el mago muestra un error en la consola mágica
            }
        } else {
            console.error('No se encontró el capsule con la ID proporcionada en los datos obtenidos.');
        }
    } catch (error) {
        console.error('Error al obtener los datos del capsule:', error);
    }
};

// ______________________________________________________________________________________________________________________________________________________________________________//


// HECHIZO para obtener todas las IDs de los capsules y crear botones dinámicos
const crearGaleriaBotones = async () => {
    const response = await fetch(API_URL_CAPSULES); // Invoca un conjuro para obtener el pergamino mágico con datos de los capsules
    const data = await response.json();// Desenrolla el pergamino y extrae su esencia en forma de datos JSON

    console.log('Datos obtenidos para crear botones:', data); // Revela en la esfera de cristal los datos obtenidos

    // Crear botones dinámicamente
    const buttonsContainer = document.getElementById('buttons-container');// Localiza el contenedor de botones en el DOM con el hechizo de localización
    if (buttonsContainer) {// Si encuentra el contenedor...
        data.forEach((capsule, index) => {// Para cada capsule en los datos recibidos...
            const button = document.createElement('button'); // Invoca un nuevo botón encantado
            button.textContent = `${index + 1}`;// Graba en el botón el número mágico correspondiente
            button.onclick = () => getAllDetailDataCapsules(capsule.id);// Encanta el botón con un hechizo de invocación para obtener detalles del capsule
            buttonsContainer.appendChild(button);// Añade el botón encantado al contenedor de botones
        });

        const buttonCountContainer = document.querySelector('#button_container_counts_ID');// Localiza el contenedor de conteo de botones en el DOM con otro hechizo de localización
        if (buttonCountContainer) {// Si encuentra el contenedor de conteo de botones...
            buttonCountContainer.innerHTML = `<p><strong>buttons count: </strong>${data.length}</p>`;// Escribe en el pergamino el número total de botones creados
        } else {// Si no encuentra el contenedor de conteo de botones...
            console.error('Elemento con ID "button_container_counts_ID" no encontrado.');// Lanza un conjuro de error en la consola
        }


        if (data.length > 0) {// Si hay al menos un capsule en los datos...
            getAllDetailDataCapsules(data[0].id);// Invoca inmediatamente los detalles del primer capsule
        }
    } else {// Si no encuentra el contenedor de botones...
        console.error('Elemento con ID "buttons-container" no encontrado.'); // Lanza un conjuro de error en la consola
    }
};
crearGaleriaBotones();// Lanza el hechizo principal para crear la galería de botones
