// ______________________________________________________________________________________________________________________________________________________________________________//


//PORTALES DE CONEXION

// ______________________________________________________________________________________________________________________________________________________________________________//


const API_URL_HISTORY="https://api.spacexdata.com/v4/history";


// ______________________________________________________________________________________________________________________________________________________________________________//


//HECHIZO DE INVOCACION DE TODOS LOS NOMBRES DE LOS historyS 

// ______________________________________________________________________________________________________________________________________________________________________________//




export const getAllhistoryNames = async () => {// El mago de datos 'getAllhistoryNames' lanza un hechizo asincrónico para obtener todos los nombres de los historys
    try {
        let response = await fetch(API_URL_HISTORY);// El mago lanza un encantamiento de búsqueda al portal API_URL_HISTORY y espera la respuesta
        let data = await response.json(); // El mago convierte la respuesta del portal en un pergamino mágico (JSON) que contiene los datos
        
        let historyNames = data.map(history => history.name);// El mago extrae los nombres de los historys del pergamino mágico, creando una lista de nombres
        
        return historyNames;// El mago devuelve la lista de nombres de historys para que otros la usen
    } catch (error) {
        console.error("Error al obtener los nombres de los historys:", error);  // Si ocurre un error, el mago escribe una runa de error en la consola mágica
        throw error;// El mago lanza el error para que otros hechiceros puedan manejarlo
    }
};
console.log(await getAllhistoryNames());// El mago invoca su hechizo 'getAllhistoryNames' y muestra los resultados en la consola mágica



// ______________________________________________________________________________________________________________________________________________________________________________//


//HECHIZO PODEROSO DE INVOCACION DE LA INFO DE LOS historyS EN BOTONES QUE AL PRESIONAR INVOCAS 

// ______________________________________________________________________________________________________________________________________________________________________________//



const getAllDetailDatahistory = async (historyId) => {
    try {
        const response = await fetch(API_URL_HISTORY);// Lanza el hechizo para invocar los datos de los historys desde el portal mágico (API)
        const data = await response.json(); // Desencanta los datos en formato JSON y guarda el pergamino


        const history = data.find(history => history.id === historyId);// Busca el history deseado en el pergamino
        if (history) {
            const {
                links: {
                    article: links_article_history
                  },
                  title: history_title,
                  event_date_utc:history_event_date_utc,
                  event_date_unix: history_event_date_unix,
                  details: history_details,
                  id: history_id
            } = history;// Extrae todas las runas y encantamientos del history específico

            console.log('Datos del history:', history);// Imprime en el pergamino los datos desencantados del history

// ______________________________________________________________________________________________________________________________________________________________________________//


// El mago invoca al DOM para encontrar la cabaña específica donde se mostrarán los detalles del history
            const historyDetails = document.getElementById('history-details');
            if (historyDetails) {
                historyDetails.innerHTML =  // El mago conjura el hechizo "innerHTML" para imprimir dinámicamente en el pergamino

                /*html*/`
                <section class='main'>
                    <section class='left'>
                        <img src="../storage/img/historyIcon.svg">
                    </section>
                        <section class='right'>                
                            <h2>${history_title}</h2>
                            <p><strong>history_id:</strong> ${history_id}</p>
                            <p><strong>links_article_history:</strong> ${links_article_history}</p>
                            <p><strong>history_event_date_utc:</strong> ${history_event_date_utc}</p>
                            <p><strong>history_event_date_unix:</strong> ${history_event_date_unix}</p>
                            <p><strong>history_details:</strong> ${history_details}</p>
                        </section>
                </section>

            `;
            } else {
                console.error('Elemento con ID "history-details" no encontrado.');// Si la cabaña no se encuentra, el mago muestra un error en la consola mágica
            }
        } else {
            console.error('No se encontró el history con la ID proporcionada en los datos obtenidos.');
        }
    } catch (error) {
        console.error('Error al obtener los datos del history:', error);
    }
};

// ______________________________________________________________________________________________________________________________________________________________________________//


// HECHIZO para obtener todas las IDs de los historys y crear botones dinámicos
const crearGaleriaBotones = async () => {
    const response = await fetch(API_URL_HISTORY); // Invoca un conjuro para obtener el pergamino mágico con datos de los historys
    const data = await response.json();// Desenrolla el pergamino y extrae su esencia en forma de datos JSON

    console.log('Datos obtenidos para crear botones:', data); // Revela en la esfera de cristal los datos obtenidos

    // Crear botones dinámicamente
    const buttonsContainer = document.getElementById('buttons-container');// Localiza el contenedor de botones en el DOM con el hechizo de localización
    if (buttonsContainer) {// Si encuentra el contenedor...
        data.forEach((history, index) => {// Para cada history en los datos recibidos...
            const button = document.createElement('button'); // Invoca un nuevo botón encantado
            button.textContent = `${index + 1}`;// Graba en el botón el número mágico correspondiente
            button.onclick = () => getAllDetailDatahistory(history.id);// Encanta el botón con un hechizo de invocación para obtener detalles del history
            buttonsContainer.appendChild(button);// Añade el botón encantado al contenedor de botones
        });

        const buttonCountContainer = document.querySelector('#button_container_counts_ID');// Localiza el contenedor de conteo de botones en el DOM con otro hechizo de localización
        if (buttonCountContainer) {// Si encuentra el contenedor de conteo de botones...
            buttonCountContainer.innerHTML = `buttons count: ${data.length}`;// Escribe en el pergamino el número total de botones creados
        } else {// Si no encuentra el contenedor de conteo de botones...
            console.error('Elemento con ID "button_container_counts_ID" no encontrado.');// Lanza un conjuro de error en la consola
        }


        if (data.length > 0) {// Si hay al menos un history en los datos...
            getAllDetailDatahistory(data[0].id);// Invoca inmediatamente los detalles del primer history
        }
    } else {// Si no encuentra el contenedor de botones...
        console.error('Elemento con ID "buttons-container" no encontrado.'); // Lanza un conjuro de error en la consola
    }
};
crearGaleriaBotones();// Lanza el hechizo principal para crear la galería de botones
