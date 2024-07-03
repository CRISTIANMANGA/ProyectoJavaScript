// Constantes de URLs de API
const API_URLS = {
    ROCKETS: "https://api.spacexdata.com/v4/rockets",
    CAPSULES: "https://api.spacexdata.com/v4/capsules",
    CREW: "https://api.spacexdata.com/v4/crew",
    LAUNCHES: "https://api.spacexdata.com/v4/launches",
    CORES: "https://api.spacexdata.com/v4/cores",
    LANDPADS: "https://api.spacexdata.com/v4/landpads",
    SHIPS: "https://api.spacexdata.com/v4/ships",
    COMPANY: "https://api.spacexdata.com/v4/company",
    DRAGONS: "https://api.spacexdata.com/v4/dragons",
    HISTORY: "https://api.spacexdata.com/v4/history",
    LAUNCHPADS: "https://api.spacexdata.com/v4/launchpads",
    PAYLOADS: "https://api.spacexdata.com/v4/payloads",
    ROADSTER: "https://api.spacexdata.com/v4/roadster",
    STARLINK: "https://api.spacexdata.com/v4/starlink"
};

// Función genérica para obtener datos de la API
const fetchData = async (url) => {
    try {
        const response = await fetch(url);
        if (!response.ok) throw new Error(`Error: ${response.statusText}`);
        return await response.json();
    } catch (error) {
        console.error("Error al obtener los datos:", error);
        throw error;
    }
};

// Obtener todos los datos de los rockets
export const getAllData = async () => {
    return await fetchData(API_URLS.ROCKETS);
};

// Obtener todos los nombres de los rockets
export const getAllRocketNames = async () => {
    const data = await fetchData(API_URLS.ROCKETS);
    return data.map(rocket => rocket.name);
};

// Obtener detalles de un rocket por ID
const getRocketDetailsById = async (rocketId) => {
    const data = await fetchData(API_URLS.ROCKETS);
    return data.find(rocket => rocket.id === rocketId);
};

// Actualizar el DOM con los detalles del rocket
const updateRocketDetailsInDOM = (rocket) => {
    const rocketDetails = document.getElementById('rocket-details');
    if (!rocketDetails) {
        console.error('Elemento con ID "rocket-details" no encontrado.');
        return;
    }

    // Asignación de valores mágicos a las variables
    const {
        height: { meters: meters_height, feet: feet_height },
        diameter: { meters: meters_diameter, feet: feet_diameter },
        mass: { kg: kg_mass, lb: lb_mass },
        first_stage: { thrust_sea_level: { kN: kN_first_stage, lbf: lbf_first_stage } },
        // ... Otras propiedades
    } = rocket;

    rocketDetails.innerHTML = /*html*/`
        <section class='up'>
            <h2>${rocket.name}</h2>
        </section>
        <section class='down'>
            <!-- Más contenido aquí -->
        </section>
    `;
};

// Crear botones dinámicos para cada rocket
const createRocketButtons = async () => {
    const data = await fetchData(API_URLS.ROCKETS);
    const buttonsContainer = document.getElementById('buttons-container');

    if (!buttonsContainer) {
        console.error('Elemento con ID "buttons-container" no encontrado.');
        return;
    }

    data.forEach((rocket, index) => {
        const button = document.createElement('button');
        button.textContent = `${index + 1}`;
        button.onclick = () => getRocketDetailsById(rocket.id).then(updateRocketDetailsInDOM);
        buttonsContainer.appendChild(button);
    });

    const buttonCountContainer = document.querySelector('#button_container_counts_ID');
    if (buttonCountContainer) {
        buttonCountContainer.innerHTML = `Cantidad de botones: ${data.length}`;
    } else {
        console.error('Elemento con ID "button_container_counts_ID" no encontrado.');
    }

    // Invocar la información del primer cohete automáticamente
    if (data.length > 0) {
        const firstRocket = await getRocketDetailsById(data[0].id);
        updateRocketDetailsInDOM(firstRocket);
    }
};

createRocketButtons();
