// ______________________________________________________________________________________________________________________________________________________________________________//


//PORTALES DE CONEXION

// ______________________________________________________________________________________________________________________________________________________________________________//


const API_URL_LAUNCHES="https://api.spacexdata.com/v4/launches";


// ______________________________________________________________________________________________________________________________________________________________________________//


//HECHIZO DE INVOCACION DE TODOS LOS NOMBRES DE LOS launches 

// ______________________________________________________________________________________________________________________________________________________________________________//


export const getAlllaunchesNames = async () => {// El mago de datos 'getAlllaunchesNames' lanza un hechizo asincrónico para obtener todos los nombres de los launches
    try {
        let response = await fetch(API_URL_LAUNCHES);// El mago lanza un encantamiento de búsqueda al portal API_URL_LAUNCHES y espera la respuesta
        let data = await response.json(); // El mago convierte la respuesta del portal en un pergamino mágico (JSON) que contiene los datos
        
        let launchesNames = data.map(launches => launches.serial);// El mago extrae los nombres de los launches del pergamino mágico, creando una lista de nombres
        
        return launchesNames;// El mago devuelve la lista de nombres de launches para que otros la usen
    } catch (error) {
        console.error("Error al obtener los nombres de los launches:", error);  // Si ocurre un error, el mago escribe una runa de error en la consola mágica
        throw error;// El mago lanza el error para que otros hechiceros puedan manejarlo
    }
};
console.log(await getAlllaunchesNames());// El mago invoca su hechizo 'getAlllaunchesNames' y muestra los resultados en la consola mágica


// ______________________________________________________________________________________________________________________________________________________________________________//


//HECHIZO PODEROSO DE INVOCACION DE LA INFO DE LOS launches EN BOTONES QUE AL PRESIONAR INVOCAS 

// ______________________________________________________________________________________________________________________________________________________________________________//


const getAllDetailDatalaunches = async (launchesId) => {
    try {
        const response = await fetch(API_URL_LAUNCHES);// el mago inicia su encantamiento para buscar datos en el API_URL_LAUNCHES
        const data = await response.json();// el mago espera la respuesta mágica del encantamiento fetch y obtiene los datos

        const launches = data.find(launch => launch.id === launchesId); // Busca el launch específico con la ID proporcionada
        if (launches) {
            const { // Desestructura los datos del launch encontrado
                fairings,
                links: { patch, reddit, presskit, webcast, youtube_id, article, wikipedia },
                static_fire_date_utc,
                static_fire_date_unix,
                net,
                window,
                rocket,
                success,
                failures,
                details,
                payloads,
                launchpad,
                flight_number,
                name,
                date_utc,
                date_unix,
                date_local,
                date_precision,
                upcoming,
                cores,
                auto_update,
                tbd,
                launch_library_id,
                id
            } = launches;

            console.log(data);
            console.log('Datos del launch:', launches);// Imprime los detalles del launch en la consola mágica

            const launchesDetails = document.getElementById('launches-details');// Accede al pergamino mágico 'launches-details' en el DOM
            if (launchesDetails) { // Llena el pergamino con los datos mágicos del launch
                launchesDetails.innerHTML = //contenido que ira dentro del pergamino mágico 'launches-details'

                    // Utilizamos condiciones mágicas, como ${variable ? fairings.reused : 'N/A'}, para verificar si cierta información está 
                    // disponible antes de escribirla en el pergamino. Es como verificar si un hechizo está disponible antes de lanzarlo.
                    /*html*/
                    `
                    <section class='main'>

                    <section class='main_left'>

                        <h2>${name}</h2>
                        <p><strong>Launch ID:</strong> ${id}</p>
                        <p><strong>Fairings Reused:</strong> ${fairings ? fairings.reused : 'N/A'}</p>
                        <p><strong>Recovery Attempt:</strong> ${fairings ? fairings.recovery_attempt : 'N/A'}</p>
                        <p><strong>Recovered:</strong> ${fairings ? fairings.recovered : 'N/A'}</p>
                        <p><strong>Reddit Campaign:</strong> ${reddit && reddit.campaign ? `<a href="${reddit.campaign}" target="_blank">${reddit.campaign}</a>` : 'N/A'}</p>
                        <p><strong>Reddit Launch:</strong> ${reddit && reddit.launch ? `<a href="${reddit.launch}" target="_blank">${reddit.launch}</a>` : 'N/A'}</p>
                        <p><strong>Reddit Media:</strong> ${reddit && reddit.media ? `<a href="${reddit.media}" target="_blank">${reddit.media}</a>` : 'N/A'}</p>
                        <p><strong>Reddit Recovery:</strong> ${reddit && reddit.recovery ? `<a href="${reddit.recovery}" target="_blank">${reddit.recovery}</a>` : 'N/A'}</p>
                        <p><strong>Presskit:</strong> ${presskit ? `<a href="${presskit}" target="_blank">Presskit</a>` : 'N/A'}</p>
                        <p><strong>Webcast:</strong> ${webcast ? `<a href="${webcast}" target="_blank">Webcast</a>` : 'N/A'}</p>
                        <p><strong>YouTube ID:</strong> ${youtube_id ? `<a href="https://www.youtube.com/watch?v=${youtube_id}" target="_blank">YouTube Video</a>` : 'N/A'}</p>
                        <p><strong>Article:</strong> ${article ? `<a href="${article}" target="_blank">Article</a>` : 'N/A'}</p>
                        <p><strong>Wikipedia:</strong> ${wikipedia ? `<a href="${wikipedia}" target="_blank">Wikipedia</a>` : 'N/A'}</p>                        <p><strong>Static Fire Date (UTC):</strong> ${static_fire_date_utc ? static_fire_date_utc : 'N/A'}</p>
                        <p><strong>Static Fire Date (Unix):</strong> ${static_fire_date_unix ? static_fire_date_unix : 'N/A'}</p>
                        <p><strong>Net:</strong> ${net ? net : 'N/A'}</p>
                        <p><strong>Window:</strong> ${window ? window : 'N/A'}</p>
                        <p><strong>Rocket:</strong> ${rocket ? rocket : 'N/A'}</p>
                        <p><strong>Success:</strong> ${success ? success : 'N/A'}</p>
                        ${failures && failures.length > 0 ? `
                            <p><strong>Failure Time:</strong> ${failures[0].time}</p>
                            <p><strong>Altitude:</strong> ${failures[0].altitude}</p>
                            <p><strong>Failure Reason:</strong> ${failures[0].reason}</p>
                        ` : ''}
                    </section>



                    <section class='main_middle'>
                        <img src="${patch ? patch.large : 'N/A'}" alt="Patch large" referrerpolicy="no-referrer">
                    </section>


                    <section class='main_right'>
                    <p><strong>Details:</strong> ${details ? details : 'N/A'}</p>
                    <p><strong>Payloads:</strong> ${payloads ? payloads : 'N/A'}</p>
                    <p><strong>Launchpad:</strong> ${launchpad ? launchpad : 'N/A'}</p>
                    <p><strong>Flight Number:</strong> ${flight_number ? flight_number : 'N/A'}</p>
                    <p><strong>Date (UTC):</strong> ${date_utc ? date_utc : 'N/A'}</p>
                    <p><strong>Date (Unix):</strong> ${date_unix ? date_unix : 'N/A'}</p>
                    <p><strong>Date (Local):</strong> ${date_local ? date_local : 'N/A'}</p>
                    <p><strong>Date Precision:</strong> ${date_precision ? date_precision : 'N/A'}</p>
                    <p><strong>Upcoming:</strong> ${upcoming ? upcoming : 'N/A'}</p>
                    <p><strong>Core:</strong> ${cores && cores.length > 0 ? cores[0].core : 'N/A'}</p>
                    <p><strong>Flight Cores:</strong> ${cores && cores.length > 0 ? cores[0].flight : 'N/A'}</p>
                    <p><strong>Gridfins Cores:</strong> ${cores && cores.length > 0 ? cores[0].gridfins : 'N/A'}</p>
                    <p><strong>Legs Cores:</strong> ${cores && cores.length > 0 ? cores[0].legs : 'N/A'}</p>
                    <p><strong>Reused Cores:</strong> ${cores && cores.length > 0 ? cores[0].reused : 'N/A'}</p>
                    <p><strong>Landing Attempt Cores:</strong> ${cores && cores.length > 0 ? cores[0].landing_attempt : 'N/A'}</p>
                    <p><strong>Landing Success Cores:</strong> ${cores && cores.length > 0 ? cores[0].landing_success : 'N/A'}</p>
                    <p><strong>Landing Type Cores:</strong> ${cores && cores.length > 0 ? cores[0].landing_type : 'N/A'}</p>
                    <p><strong>Landpad Cores:</strong> ${cores && cores.length > 0 ? cores[0].landpad : 'N/A'}</p>
                    <p><strong>Auto Update:</strong> ${auto_update ? auto_update : 'N/A'}</p>
                    <p><strong>TBD:</strong> ${tbd ? tbd : 'N/A'}</p>
                    <p><strong>Launch Library ID:</strong> ${launch_library_id ? launch_library_id : 'N/A'}</p>
                    </section>


                    </section>
                    `;
            }
        } else {
            console.error(`Launch con ID ${launchesId} no encontrado.`);
        }
    } catch (error) {
        console.error(`Error al obtener detalles del launch con ID ${launchesId}: ${error.message}`);
    }
};

// ______________________________________________________________________________________________________________________________________________________________________________//


// HECHIZO para obtener todas las IDs de los launches y crear botones dinámicos
const crearGaleriaBotones = async () => {
    const response = await fetch(API_URL_LAUNCHES); // Invoca un conjuro para obtener el pergamino mágico con datos de los launches
    const data = await response.json();// Desenrolla el pergamino y extrae su esencia en forma de datos JSON

    console.log('Datos obtenidos para crear botones:', data); // Revela en la esfera de cristal los datos obtenidos

    // Crear botones dinámicamente
    const buttonsContainer = document.getElementById('buttons-container');// Localiza el contenedor de botones en el DOM con el hechizo de localización
    if (buttonsContainer) {// Si encuentra el contenedor...
        data.forEach((launches, index) => {// Para cada launches en los datos recibidos...
            const button = document.createElement('button'); // Invoca un nuevo botón encantado
            button.textContent = `${index + 1}`;// Graba en el botón el número mágico correspondiente
            button.onclick = () => getAllDetailDatalaunches(launches.id);// Encanta el botón con un hechizo de invocación para obtener detalles del launches
            buttonsContainer.appendChild(button);// Añade el botón encantado al contenedor de botones
        });

        const buttonCountContainer = document.querySelector('#button_container_counts_ID');// Localiza el contenedor de conteo de botones en el DOM con otro hechizo de localización
        if (buttonCountContainer) {// Si encuentra el contenedor de conteo de botones...
            buttonCountContainer.innerHTML = `buttons count: ${data.length}`;// Escribe en el pergamino el número total de botones creados
        } else {// Si no encuentra el contenedor de conteo de botones...
            console.error('Elemento con ID "button_container_counts_ID" no encontrado.');// Lanza un conjuro de error en la consola
        }

        if (data.length > 0) {// Si hay al menos un launches en los datos...
            getAllDetailDatalaunches(data[0].id);// Invoca inmediatamente los detalles del primer launches
        }
    } else {// Si no encuentra el contenedor de botones...
        console.error('Elemento con ID "buttons-container" no encontrado.'); // Lanza un conjuro de error en la consola
    }
};
crearGaleriaBotones();// Lanza el hechizo principal para crear la galería de botones
