// ______________________________________________________________________________________________________________________________________________________________________________//

//PORTALES DE CONEXION

// ______________________________________________________________________________________________________________________________________________________________________________//

const API_URL_STARLINK = "https://api.spacexdata.com/v4/starlink"; // Corregido el URL

// ______________________________________________________________________________________________________________________________________________________________________________//

//HECHIZO DE INVOCACION DE TODOS LOS NOMBRES DE LOS starlinkS 

// ______________________________________________________________________________________________________________________________________________________________________________//

export const getAllStarlinkNames = async () => { // Corregido el nombre de la función para seguir la convención camelCase
    try {
        let response = await fetch(API_URL_STARLINK); // El mago lanza un encantamiento de búsqueda al portal API_URL_STARLINK y espera la respuesta
        let data = await response.json(); // El mago convierte la respuesta del portal en un pergamino mágico (JSON) que contiene los datos

        let starlinkNames = data.map(starlink => starlink.spaceTrack.OBJECT_NAME); // El mago extrae los nombres de los starlinks del pergamino mágico, creando una lista de nombres
        return starlinkNames; // El mago devuelve la lista de nombres de starlinks para que otros la usen
    } catch (error) {
        console.error("Error al obtener los nombres de los starlinks:", error);  // Si ocurre un error, el mago escribe una runa de error en la consola mágica
        throw error; // El mago lanza el error para que otros hechiceros puedan manejarlo
    }
};
// console.log(await getAllStarlinkNames()); // Comentado porque `await` solo se puede usar dentro de una función asíncrona

// ______________________________________________________________________________________________________________________________________________________________________________//

//HECHIZO PODEROSO DE INVOCACION DE LA INFO DE LOS starlinkS EN BOTONES QUE AL PRESIONAR INVOCAS 

// ______________________________________________________________________________________________________________________________________________________________________________//

const getAllDetailDataStarlinks = async (starlinkId) => { // Corregido el nombre de la función para seguir la convención camelCase
    try {
        const response = await fetch(API_URL_STARLINK); // Lanza el hechizo para invocar los datos de los starlinks desde el portal mágico (API)
        const data = await response.json(); // Desencanta los datos en formato JSON y guarda el pergamino

        const starlink = data.find(starlink => starlink.id === starlinkId); // Busca el starlink deseado en el pergamino
        if (starlink) {
            const {
                spaceTrack: {
                    CCSDS_OMM_VERS,
                    COMMENT,
                    CREATION_DATE,
                    ORIGINATOR,
                    OBJECT_NAME,
                    OBJECT_ID,
                    CENTER_NAME,
                    REF_FRAME,
                    TIME_SYSTEM,
                    MEAN_ELEMENT_THEORY,
                    EPOCH,
                    MEAN_MOTION,
                    ECCENTRICITY,
                    INCLINATION,
                    RA_OF_ASC_NODE,
                    ARG_OF_PERICENTER,
                    MEAN_ANOMALY,
                    EPHEMERIS_TYPE,
                    CLASSIFICATION_TYPE,
                    NORAD_CAT_ID,
                    ELEMENT_SET_NO,
                    REV_AT_EPOCH,
                    BSTAR,
                    MEAN_MOTION_DOT,
                    MEAN_MOTION_DDOT,
                    SEMIMAJOR_AXIS,
                    PERIOD,
                    APOAPSIS,
                    PERIAPSIS,
                    OBJECT_TYPE,
                    RCS_SIZE,
                    COUNTRY_CODE,
                    LAUNCH_DATE,
                    SITE,
                    DECAY_DATE,
                    DECAYED,
                    FILE,
                    GP_ID,
                    TLE_LINE0,
                    TLE_LINE1,
                    TLE_LINE2
                },
                launch,
                version,
                height_km,
                latitude,
                longitude,
                velocity_kms,
                id
            } = starlink; // Extrae todas las runas y encantamientos del starlink específico

            console.log('Datos del starlink:', starlink); // Imprime en el pergamino los datos desencantados del starlink

            // ______________________________________________________________________________________________________________________________________________________________________________//

            // El mago invoca al DOM para encontrar la cabaña específica donde se mostrarán los detalles del starlink
            const starlinkDetails = document.getElementById('starlink-details');
            if (starlinkDetails) {
                starlinkDetails.innerHTML = // El mago conjura el hechizo "innerHTML" para imprimir dinámicamente en el pergamino
                    /*html*/ `
                    <section class='main'>
                    <section class='left'>
                    <h2>${OBJECT_NAME}</h2>
                    <p><strong>OBJECT_ID:</strong> ${OBJECT_ID}</p>
                    <p><strong>CCSDS_OMM_VERS:</strong> ${CCSDS_OMM_VERS}</p>
                    <p><strong>COMMENT:</strong> ${COMMENT}</p>
                    <p><strong>CREATION_DATE:</strong> ${CREATION_DATE}</p>
                    <p><strong>ORIGINATOR:</strong> ${ORIGINATOR}</p>
                    <p><strong>CENTER_NAME:</strong> ${CENTER_NAME}</p>
                    <p><strong>REF_FRAME:</strong> ${REF_FRAME}</p>
                    <p><strong>TIME_SYSTEM:</strong> ${TIME_SYSTEM}</p>
                    <p><strong>MEAN_ELEMENT_THEORY:</strong> ${MEAN_ELEMENT_THEORY}</p>
                    <p><strong>EPOCH:</strong> ${EPOCH}</p>
                    <p><strong>MEAN_MOTION:</strong> ${MEAN_MOTION}</p>
                    <p><strong>ECCENTRICITY:</strong> ${ECCENTRICITY}</p>
                    <p><strong>INCLINATION:</strong> ${INCLINATION}</p>
                    <p><strong>RA_OF_ASC_NODE:</strong> ${RA_OF_ASC_NODE}</p>
                    <p><strong>ARG_OF_PERICENTER:</strong> ${ARG_OF_PERICENTER}</p>
                    <p><strong>MEAN_ANOMALY:</strong> ${MEAN_ANOMALY}</p>
                    <p><strong>EPHEMERIS_TYPE:</strong> ${EPHEMERIS_TYPE}</p>
                    <p><strong>CLASSIFICATION_TYPE:</strong> ${CLASSIFICATION_TYPE}</p>
                    <p><strong>NORAD_CAT_ID:</strong> ${NORAD_CAT_ID}</p>
                    <p><strong>ELEMENT_SET_NO:</strong> ${ELEMENT_SET_NO}</p>
                    <p><strong>REV_AT_EPOCH:</strong> ${REV_AT_EPOCH}</p>
                    <p><strong>BSTAR:</strong> ${BSTAR}</p>
                    <p><strong>MEAN_MOTION_DOT:</strong> ${MEAN_MOTION_DOT}</p>
                    <p><strong>MEAN_MOTION_DDOT:</strong> ${MEAN_MOTION_DDOT}</p>
                    </section>
                    <section class='middle'>
                    <img src="../storage/img/starlinkIcon.svg">
                    </section>
                    <section class='right'>
                    <p><strong>SEMIMAJOR_AXIS:</strong> ${SEMIMAJOR_AXIS}</p>
                    <p><strong>PERIOD:</strong> ${PERIOD}</p>
                    <p><strong>APOAPSIS:</strong> ${APOAPSIS}</p>
                    <p><strong>PERIAPSIS:</strong> ${PERIAPSIS}</p>
                    <p><strong>OBJECT_TYPE:</strong> ${OBJECT_TYPE}</p>
                    <p><strong>RCS_SIZE:</strong> ${RCS_SIZE}</p>
                    <p><strong>COUNTRY_CODE:</strong> ${COUNTRY_CODE}</p>
                    <p><strong>LAUNCH_DATE:</strong> ${LAUNCH_DATE}</p>
                    <p><strong>SITE:</strong> ${SITE}</p>
                    <p><strong>DECAY_DATE:</strong> ${DECAY_DATE}</p>
                    <p><strong>DECAYED:</strong> ${DECAYED}</p>
                    <p><strong>FILE:</strong> ${FILE}</p>
                    <p><strong>GP_ID:</strong> ${GP_ID}</p>
                    <p><strong>TLE_LINE0:</strong> ${TLE_LINE0}</p>
                    <p><strong>TLE_LINE1:</strong> ${TLE_LINE1}</p>
                    <p><strong>TLE_LINE2:</strong> ${TLE_LINE2}</p>
                    <p><strong>launch:</strong> ${launch}</p>
                    <p><strong>version:</strong> ${version}</p>
                    <p><strong>height_km:</strong> ${height_km}</p>
                    <p><strong>latitude:</strong> ${latitude}</p>
                    <p><strong>longitude:</strong> ${longitude}</p>
                    <p><strong>velocity_kms:</strong> ${velocity_kms}</p>
                    <p><strong>id:</strong> ${id}</p>
                    </section>
                    </section>
                `;
            } else {
                console.error('Elemento con ID "starlink-details" no encontrado.'); // Si la cabaña no se encuentra, el mago muestra un error en la consola mágica
            }
        } else {
            console.error('No se encontró el starlink con la ID proporcionada en los datos obtenidos.');
        }
    } catch (error) {
        console.error('Error al obtener los datos del starlink:', error);
    }
};

// ______________________________________________________________________________________________________________________________________________________________________________//

// HECHIZO para obtener todas las IDs de los starlinks y crear botones dinámicos
const crearGaleriaBotones = async () => {
    try {
        const response = await fetch(API_URL_STARLINK); // Invoca un conjuro para obtener el pergamino mágico con datos de los starlinks
        const data = await response.json(); // Desenrolla el pergamino y extrae su esencia en forma de datos JSON

        console.log('Datos obtenidos para crear botones:', data); // Revela en la esfera de cristal los datos obtenidos

        // Crear botones dinámicamente
        const buttonsContainer = document.getElementById('buttons-container'); // Localiza el contenedor de botones en el DOM con el hechizo de localización
        if (buttonsContainer) { // Si encuentra el contenedor...
            data.forEach((starlink, index) => { // Para cada starlink en los datos recibidos...
                const button = document.createElement('button'); // Invoca un nuevo botón encantado
                button.textContent = `${index + 1}`; // Graba en el botón el número mágico correspondiente
                button.onclick = () => getAllDetailDataStarlinks(starlink.id); // Encanta el botón con un hechizo de invocación para obtener detalles del starlink
                buttonsContainer.appendChild(button); // Añade el botón encantado al contenedor de botones
            });

            const buttonCountContainer = document.querySelector('#button_container_counts_ID'); // Localiza el contenedor de conteo de botones en el DOM con otro hechizo de localización
            if (buttonCountContainer) { // Si encuentra el contenedor de conteo de botones...
                buttonCountContainer.innerHTML = `buttons count: ${data.length}`; // Escribe en el pergamino el número total de botones creados
            } else { // Si no encuentra el contenedor de conteo de botones...
                console.error('Elemento con ID "button_container_counts_ID" no encontrado.'); // Lanza un conjuro de error en la consola
            }

            if (data.length > 0) { // Si hay al menos un starlink en los datos...
                getAllDetailDataStarlinks(data[0].id); // Invoca inmediatamente los detalles del primer starlink
            }
        } else { // Si no encuentra el contenedor de botones...
            console.error('Elemento con ID "buttons-container" no encontrado.'); // Lanza un conjuro de error en la consola
        }
    } catch (error) {
        console.error('Error al crear la galería de botones:', error); // Lanza un conjuro de error en la consola si algo sale mal
    }
};
crearGaleriaBotones(); // Lanza el hechizo principal para crear la galería de botones
