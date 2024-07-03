




const API_URL_CREW="https://api.spacexdata.com/v4/crew";









export const getAllCrewNames = async () => {// El mago de datos 'getAllcrewNames' lanza un hechizo asincrónico para obtener todos los nombres de los crews
    try {
        let response = await fetch(API_URL_CREW);// El mago lanza un encantamiento de búsqueda al portal API_URL_CREW y espera la respuesta
        let data = await response.json(); // El mago convierte la respuesta del portal en un pergamino mágico (JSON) que contiene los datos
        
        let crewNames = data.map(crew => crew.serial);// El mago extrae los nombres de los crews del pergamino mágico, creando una lista de nombres
        
        return crewNames;// El mago devuelve la lista de nombres de crews para que otros la usen
    } catch (error) {
        console.error("Error al obtener los nombres de los crews:", error);  // Si ocurre un error, el mago escribe una runa de error en la consola mágica
        throw error;// El mago lanza el error para que otros hechiceros puedan manejarlo
    }
};
console.log(await getAllCrewNames());// El mago invoca su hechizo 'getAllcrewNames' y muestra los resultados en la consola mágica






// _________________________


const getAllDetailDatacrews = async (crewId) => {
    try {
        const response = await fetch(API_URL_CREW);// Lanza el hechizo para invocar los datos de los crews desde el portal mágico (API)
        const data = await response.json(); // Desencanta los datos en formato JSON y guarda el pergamino


        const crew = data.find(crew => crew.id === crewId);// Busca el crew deseado en el pergamino
        if (crew) {
            const {
                    name: crew_name,
                    agency:crew_agency,
                    image: crew_image,
                    wikipedia: crew_wikipedia,
                    launches: [
                      crew_launches
                    ],
                    status: crew_status,
                    id: crew_id
            } = crew;// Extrae todas las runas y encantamientos de la crew específica

            console.log('Datos de la crew:', crew);// Imprime en el pergamino los datos desencantados del crew


// ______________________________________________________________________________________________________________________________________________________________________________//


// El mago invoca al DOM para encontrar la cabaña específica donde se mostrarán los detalles del crew
            const crewDetails = document.getElementById('crew-details');
            if (crewDetails) {
                crewDetails.innerHTML =   // El mago conjura el hechizo "innerHTML" para imprimir dinámicamente en el pergamino
                /*html*/`
                <div id='down'>
                <img src="${crew_image}" alt="${crew_name}" referrerpolicy="no-referrer">
                <div id='down_detail'>
                <h2>${crew_name}</h2>
                <p><strong>crew_id:</strong> ${crew_id}</p>
                <p><strong>crew_launches:</strong> ${crew_launches}</p>
                <p><strong>crew_agency:</strong> ${crew_agency}</p>
                <p><strong>crew_status:</strong> ${crew_status}</p>
                <p><strong>crew_wikipedia:</strong> ${crew_wikipedia}</p>
                </div>
                </div>
                `;
            } else {
                console.error('Elemento con ID "crew-details" no encontrado.');// Si la cabaña no se encuentra, el mago muestra un error en la consola mágica
            }
        } else {
            console.error('No se encontró el crew con la ID proporcionada en los datos obtenidos.');
        }
    } catch (error) {
        console.error('Error al obtener los datos del crew:', error);
    }
};

// ______________________________________________________________________________________________________________________________________________________________________________//


// HECHIZO para obtener todas las IDs de los crews y crear botones dinámicos
const crearGaleriaBotones = async () => {
    const response = await fetch(API_URL_CREW); // Invoca un conjuro para obtener el pergamino mágico con datos de los crews
    const data = await response.json();// Desenrolla el pergamino y extrae su esencia en forma de datos JSON

    console.log('Datos obtenidos para crear botones:', data); // Revela en la esfera de cristal los datos obtenidos

    // Crear botones dinámicamente
    const buttonsContainer = document.getElementById('buttons-container');// Localiza el contenedor de botones en el DOM con el hechizo de localización
    if (buttonsContainer) {// Si encuentra el contenedor...
        data.forEach((crew, index) => {// Para cada crew en los datos recibidos...
            const button = document.createElement('button'); // Invoca un nuevo botón encantado
            button.textContent = `${index + 1}`;// Graba en el botón el número mágico correspondiente
            button.onclick = () => getAllDetailDatacrews(crew.id);// Encanta el botón con un hechizo de invocación para obtener detalles del crew
            buttonsContainer.appendChild(button);// Añade el botón encantado al contenedor de botones
        });

        const buttonCountContainer = document.querySelector('#button_container_counts_ID');// Localiza el contenedor de conteo de botones en el DOM con otro hechizo de localización
        if (buttonCountContainer) {// Si encuentra el contenedor de conteo de botones...
            buttonCountContainer.innerHTML = `buttons count: ${data.length}`;// Escribe en el pergamino el número total de botones creados
        } else {// Si no encuentra el contenedor de conteo de botones...
            console.error('Elemento con ID "button_container_counts_ID" no encontrado.');// Lanza un conjuro de error en la consola
        }


        if (data.length > 0) {// Si hay al menos un crew en los datos...
            getAllDetailDatacrews(data[0].id);// Invoca inmediatamente los detalles del primer crew
        }
    } else {// Si no encuentra el contenedor de botones...
        console.error('Elemento con ID "buttons-container" no encontrado.'); // Lanza un conjuro de error en la consola
    }
};
crearGaleriaBotones();// Lanza el hechizo principal para crear la galería de botones
