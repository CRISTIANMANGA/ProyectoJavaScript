const API_URL_CORES = "https://api.spacexdata.com/v4/cores";

export const getAllcoreNames = async () => {
    try {
        let response = await fetch(API_URL_CORES);
        let data = await response.json();
        
        let coreNames = data.map(core => core.name);
        
        return coreNames;
    } catch (error) {
        console.error("Error al obtener los nombres de los cores:", error);
        throw error;
    }
};
console.log(await getAllcoreNames());

const getAllDetailDatacores = async (coreId) => {
    try {
        const response = await fetch(API_URL_CORES);
        const data = await response.json();

        const core = data.find(core => core.id === coreId);
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
            } = core;

            console.log('Datos del core:', core);

            const coreDetails = document.getElementById('cores-details');
            if (coreDetails) {
                coreDetails.innerHTML = /*html*/`
                <section id='main'>
                <div id='left'>
                <img src="../storage/img/cores.png">
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
                console.error('Elemento con ID "cores-details" no encontrado.');
            }
        } else {
            console.error('No se encontró el core con la ID proporcionada en los datos obtenidos.');
        }
    } catch (error) {
        console.error('Error al obtener los datos del core:', error);
    }
};

const crearGaleriaBotones = async () => {
    const response = await fetch(API_URL_CORES);
    const data = await response.json();

    console.log('Datos obtenidos para crear botones:', data);

    const buttonsContainer = document.getElementById('buttons-container');
    if (buttonsContainer) {
        data.forEach((core, index) => {
            const button = document.createElement('button');
            button.textContent = `${index + 1}`;
            button.onclick = () => getAllDetailDatacores(core.id);
            buttonsContainer.appendChild(button);
        });

        const buttonCountContainer = document.querySelector('#button_container_counts_ID');
        if (buttonCountContainer) {
            buttonCountContainer.innerHTML = `buttons count: ${data.length}`;
        } else {
            console.error('Elemento con ID "button_container_counts_ID" no encontrado.');
        }

        if (data.length > 0) {
            getAllDetailDatacores(data[0].id);
        }
    } else {
        console.error('Elemento con ID "buttons-container" no encontrado.');
    }
};
crearGaleriaBotones();
