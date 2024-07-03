// ______________________________________________________________________________________________________________________________________________________________________________//


//PORTALES DE CONEXION

// ______________________________________________________________________________________________________________________________________________________________________________//


const API_URL_CORES="https://api.spacexdata.com/v4/cores";


// ______________________________________________________________________________________________________________________________________________________________________________//


//HECHIZO DE INVOCACION DE TODOS LOS NOMBRES DE LOS coreS 

// ______________________________________________________________________________________________________________________________________________________________________________//




export const getAllcoreNames = async () => {// El mago de datos 'getAllcoreNames' lanza un hechizo asincrónico para obtener todos los nombres de los cores
    try {
        let response = await fetch(API_URL_CORES);// El mago lanza un encantamiento de búsqueda al portal API_URL_CORES y espera la respuesta
        let data = await response.json(); // El mago convierte la respuesta del portal en un pergamino mágico (JSON) que contiene los datos
        
        let coreNames = data.map(core => core.name);// El mago extrae los nombres de los cores del pergamino mágico, creando una lista de nombres
        
        return coreNames;// El mago devuelve la lista de nombres de cores para que otros la usen
    } catch (error) {
        console.error("Error al obtener los nombres de los cores:", error);  // Si ocurre un error, el mago escribe una runa de error en la consola mágica
        throw error;// El mago lanza el error para que otros hechiceros puedan manejarlo
    }
};
console.log(await getAllcoreNames());// El mago invoca su hechizo 'getAllcoreNames' y muestra los resultados en la consola mágica



// ______________________________________________________________________________________________________________________________________________________________________________//


//HECHIZO PODEROSO DE INVOCACION DE LA INFO DE LOS coreS EN BOTONES QUE AL PRESIONAR INVOCAS 

// ______________________________________________________________________________________________________________________________________________________________________________//



const getAllDetailDatacores = async (coreId) => {
    try {
        const response = await fetch(API_URL_CORES);// Lanza el hechizo para invocar los datos de los cores desde el portal mágico (API)
        const data = await response.json(); // Desencanta los datos en formato JSON y guarda el pergamino


        const core = data.find(core => core.id === coreId);// Busca el core deseado en el pergamino
        if (core) {
            const {
                block: core_block,
                reuse_count: core_reuse_count,
                rtls_attempts: core_rtls_attempts,
                rtls_landings: core_rtls_landings,
                asds_attempts: core_asds_attempts,
                asds_landings: core_asds_landings,
                last_update: core_last_update,
                launches: [
                    core_launches
                ],
                serial: core_serial,
                status: core_status,
                id: core_id
            } = core;// Extrae todas las runas y encantamientos del core específico

            console.log('Datos del core:', core);// Imprime en el pergamino los datos desencantados del core

// ______________________________________________________________________________________________________________________________________________________________________________//


// El mago invoca al DOM para encontrar la cabaña específica donde se mostrarán los detalles del core
            const coreDetails = document.getElementById('cores-details');
            if (coreDetails) {
                coreDetails.innerHTML =  // El mago conjura el hechizo "innerHTML" para imprimir dinámicamente en el pergamino

                /*html*/`
                <section id='main'>
                <div id='left'>
                <img src="../storage/img/coreImg.svg">
                </div>
                <div id='right'>
                <h2>${core_serial}</h2> 
                    <p><strong>core_id:</strong> ${core_id}</p>
                    <p><strong>core_block:</strong> ${core_block}</p>
                    <p><strong>core_reuse_count:</strong> ${core_reuse_count}</p>
                    <p><strong>core_rtls_attempts:</strong> ${core_rtls_attempts}</p>
                    <p><strong>core_rtls_landings:</strong> ${core_rtls_landings}</p>
                    <p><strong>core_asds_attempts:</strong> ${core_asds_attempts}</p>
                    <p><strong>core_asds_landings:</strong> ${core_asds_landings}</p>
                    <p><strong>core_last_update:</strong> ${core_last_update}</p>   
                    <p><strong>core_launches:</strong> ${core_launches}</p>
                    <p><strong>core_status:</strong> ${core_status}</p>
                </div>
                </section>

            `;
            } else {
                console.error('Elemento con ID "cores-details" no encontrado.');// Si la cabaña no se encuentra, el mago muestra un error en la consola mágica
            }
        } else {
            console.error('No se encontró el core con la ID proporcionada en los datos obtenidos.');
        }
    } catch (error) {
        console.error('Error al obtener los datos del core:', error);
    }
};

// ______________________________________________________________________________________________________________________________________________________________________________//


// HECHIZO para obtener todas las IDs de los cores y crear botones dinámicos
const crearGaleriaBotones = async () => {
    const response = await fetch(API_URL_CORES); // Invoca un conjuro para obtener el pergamino mágico con datos de los cores
    const data = await response.json();// Desenrolla el pergamino y extrae su esencia en forma de datos JSON

    console.log('Datos obtenidos para crear botones:', data); // Revela en la esfera de cristal los datos obtenidos

    // Crear botones dinámicamente
    const buttonsContainer = document.getElementById('buttons-container');// Localiza el contenedor de botones en el DOM con el hechizo de localización
    if (buttonsContainer) {// Si encuentra el contenedor...
        data.forEach((core, index) => {// Para cada core en los datos recibidos...
            const button = document.createElement('button'); // Invoca un nuevo botón encantado
            button.textContent = `${index + 1}`;// Graba en el botón el número mágico correspondiente
            button.onclick = () => getAllDetailDatacores(core.id);// Encanta el botón con un hechizo de invocación para obtener detalles del core
            buttonsContainer.appendChild(button);// Añade el botón encantado al contenedor de botones
        });

        const buttonCountContainer = document.querySelector('#button_container_counts_ID');// Localiza el contenedor de conteo de botones en el DOM con otro hechizo de localización
        if (buttonCountContainer) {// Si encuentra el contenedor de conteo de botones...
            buttonCountContainer.innerHTML = `buttons count: ${data.length}`;// Escribe en el pergamino el número total de botones creados
        } else {// Si no encuentra el contenedor de conteo de botones...
            console.error('Elemento con ID "button_container_counts_ID" no encontrado.');// Lanza un conjuro de error en la consola
        }


        if (data.length > 0) {// Si hay al menos un core en los datos...
            getAllDetailDatacores(data[0].id);// Invoca inmediatamente los detalles del primer core
        }
    } else {// Si no encuentra el contenedor de botones...
        console.error('Elemento con ID "buttons-container" no encontrado.'); // Lanza un conjuro de error en la consola
    }
};
crearGaleriaBotones();// Lanza el hechizo principal para crear la galería de botones
