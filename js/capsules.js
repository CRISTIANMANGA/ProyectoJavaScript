const API_URL_CAPSULES = "https://api.spacexdata.com/v4/capsules";

export const getAllCapsulesNames = async () => {
    try {
        let response = await fetch(API_URL_CAPSULES);
        let data = await response.json();
        let capsuleNames = data.map(capsule => capsule.serial);
        return capsuleNames;
    } catch (error) {
        console.error("Error al obtener los nombres de los capsules:", error);
        throw error;
    }
};
console.log(await getAllCapsulesNames());

const getAllDetailDataCapsules = async (capsuleId) => {
    try {
        const response = await fetch(API_URL_CAPSULES);
        const data = await response.json();

        const capsule = data.find(capsule => capsule.id === capsuleId);
        if (capsule) {
            const {
                reuse_count: capsule_reuse_count,
                water_landings: capsule_water_landings,
                land_landings: capsule_land_landings,
                last_update: capsule_last_update,
                launches: [capsule_launches],
                serial: capsule_serial,
                status: capsule_status,
                type: capsule_type,
                id: capsule_id
            } = capsule;

            console.log('Datos de la capsule:', capsule);

            const capsuleDetails = document.getElementById('capsule-details');
            if (capsuleDetails) {
                capsuleDetails.innerHTML = /*html*/`
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
                console.error('Elemento con ID "capsule-details" no encontrado.');
            }
        } else {
            console.error('No se encontró el capsule con la ID proporcionada en los datos obtenidos.');
        }
    } catch (error) {
        console.error('Error al obtener los datos del capsule:', error);
    }
};

const crearGaleriaBotones = async () => {
    const response = await fetch(API_URL_CAPSULES);
    const data = await response.json();

    console.log('Datos obtenidos para crear botones:', data);

    const buttonsContainer = document.getElementById('buttons-container');
    if (buttonsContainer) {
        data.forEach((capsule, index) => {
            const button = document.createElement('button');
            button.textContent = `${index + 1}`;
            button.onclick = () => getAllDetailDataCapsules(capsule.id);
            buttonsContainer.appendChild(button);
        });

        const buttonCountContainer = document.querySelector('#button_container_counts_ID');
        if (buttonCountContainer) {
            buttonCountContainer.innerHTML = `<p><strong>buttons count: </strong>${data.length}</p>`;
        } else {
            console.error('Elemento con ID "button_container_counts_ID" no encontrado.');
        }

        if (data.length > 0) {
            getAllDetailDataCapsules(data[0].id);
        }
    } else {
        console.error('Elemento con ID "buttons-container" no encontrado.');
    }
};
crearGaleriaBotones();
