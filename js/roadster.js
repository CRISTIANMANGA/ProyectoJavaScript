______________________________________________________________________________________________________________________________________________//

const API_URL_ROADSTER = "https://api.spacexdata.com/v4/roadster";

_____________________________________________________//

export const getAllroadsterNames = async () => {
    try {
        let response = await fetch(API_URL_ROADSTER);
        let data = await response.json();
        
        // Debido a que data no es un array, no se puede usar map directamente.
        // Si necesitas extraer nombres de subobjetos, aquí se realiza manualmente.
        let roadsterNames = data.name ? [data.name] : [];
        
        return roadsterNames;
    } catch (error) {
        console.error("Error al obtener los nombres de los roadster:", error);
        throw error;
    }
};


console.log(await getAllroadsterNames());


const getAllDetailDataroadsters = async (roadsterId) => {
    try {
        const response = await fetch(API_URL_ROADSTER);
        const data = await response.json();

        // La API solo devuelve un objeto, así que usamos directamente data
        if (data.id === roadsterId) {
            const {
                name,
                launch_date_utc,
                launch_date_unix,
                launch_mass_kg,
                launch_mass_lbs,
                norad_id,
                epoch_jd,
                orbit_type,
                apoapsis_au,
                periapsis_au,
                semi_major_axis_au,
                eccentricity,
                inclination,
                longitude,
                periapsis_arg,
                period_days,
                speed_kph,
                speed_mph,
                earth_distance_km,
                earth_distance_mi,
                mars_distance_km,
                mars_distance_mi,
                flickr_images,
                wikipedia,
                video,
                details,
                id
            } = data;

            console.log('Datos del roadster:', data);

            const roadsterDetails = document.getElementById('roadster-details');
            if (roadsterDetails) {
                roadsterDetails.innerHTML = 
                /*html*/
                `
                <section class='main'>
                <section class='left'>
                    <h2>${name}</h2>
                    <p><strong>launch_date_utc:</strong> ${launch_date_utc}</p>
                    <p><strong>launch_date_unix:</strong> ${launch_date_unix}</p>
                    <p><strong>launch_mass_kg:</strong> ${launch_mass_kg}</p>
                    <p><strong>launch_mass_lbs:</strong> ${launch_mass_lbs}</p>
                    <p><strong>norad_id:</strong> ${norad_id}</p>
                    <p><strong>epoch_jd:</strong> ${epoch_jd}</p>
                    <p><strong>orbit_type:</strong> ${orbit_type}</p>
                    <p><strong>apoapsis_au:</strong> ${apoapsis_au}</p>
                    <p><strong>periapsis_au:</strong> ${periapsis_au}</p>
                    <p><strong>semi_major_axis_au:</strong> ${semi_major_axis_au}</p>
                    <p><strong>eccentricity:</strong> ${eccentricity}</p>
                    <p><strong>inclination:</strong> ${inclination}</p>
                    <p><strong>longitude:</strong> ${longitude}</p>
                </section>
                    <div class="middle">
                        ${flickr_images.map(img => `<img src="${img}" alt="Imagen del roadster">`).join('')}
                    </div>
                    <div class="right">
                        <p><strong>periapsis_arg:</strong> ${periapsis_arg}</p>
                        <p><strong>period_days:</strong> ${period_days}</p>
                        <p><strong>speed_kph:</strong> ${speed_kph}</p>
                        <p><strong>speed_mph:</strong> ${speed_mph}</p>
                        <p><strong>earth_distance_km:</strong> ${earth_distance_km}</p>
                        <p><strong>earth_distance_mi:</strong> ${earth_distance_mi}</p>
                        <p><strong>mars_distance_km:</strong> ${mars_distance_km}</p>
                        <p><strong>mars_distance_mi:</strong> ${mars_distance_mi}</p>
                        <p><strong>wikipedia:</strong><a href="${wikipedia}">wikipedia</a></p>                       
                        <p><strong>video:</strong> ${video}</p>
                        <p><strong>details:</strong> ${details}</p>
                        <p><strong>id:</strong> ${id}</p>
                    </section>
                </section>
                `;
            } else {
                console.error('Elemento con ID "roadster-details" no encontrado.');
            }
        } else {
            console.error('No se encontró el roadster con la ID proporcionada en los datos obtenidos.');
        }
    } catch (error) {
        console.error('Error al obtener los datos del roadster:', error);
    }
};


getAllDetailDataroadsters('5eb75f0842fea42237d7f3f4');
