// ______________________________________________________________________________________________________________________________________________________________________________//
// PORTALES DE CONEXION
// ______________________________________________________________________________________________________________________________________________________________________________//

const API_URL_COMPANY = "https://api.spacexdata.com/v4/company";

// ______________________________________________________________________________________________________________________________________________________________________________//
// HECHIZO DE INVOCACION DE TODOS LOS NOMBRES DE LOS companyS
// ______________________________________________________________________________________________________________________________________________________________________________//

export const getAllcompanyNames = async () => {
    try {
        let response = await fetch(API_URL_COMPANY);
        let data = await response.json();
        
        // Debido a que data no es un array, no se puede usar map directamente.
        // Si necesitas extraer nombres de subobjetos, aquí se realiza manualmente.
        let companyNames = data.name ? [data.name] : [];
        
        return companyNames;
    } catch (error) {
        console.error("Error al obtener los nombres de los company:", error);
        throw error;
    }
};

console.log(await getAllcompanyNames());

// ______________________________________________________________________________________________________________________________________________________________________________//
// HECHIZO PODEROSO DE INVOCACION DE LA INFO DE LOS companyS EN BOTONES QUE AL PRESIONAR INVOCAS
// ______________________________________________________________________________________________________________________________________________________________________________//

const getAllDetailDatacompanys = async (companyId) => {
    try {
        const response = await fetch(API_URL_COMPANY);
        const data = await response.json();

        // La API solo devuelve un objeto, así que usamos directamente data
        if (data.id === companyId) {
            const {
                headquarters: {
                    address: company_address,
                    city: company_city,
                    state: company_state
                },
                links: {
                    website: company_website,
                    flickr: company_flickr,
                    twitter: company_twitter,
                    elon_twitter: company_elon_twitter
                },
                name: company_name,
                founder: company_founder,
                founded: company_founded,
                employees: company_employees,
                vehicles: company_vehicles,
                launch_sites: company_launch_sites,
                test_sites: company_test_sites,
                ceo: company_ceo,
                cto: company_cto,
                coo: company_coo,
                cto_propulsion: company_cto_propulsion,
                valuation: company_valuation,
                summary: company_summary,
                id: company_id
            } = data;

            console.log('Datos de la company:', data);

            const companyDetails = document.getElementById('company-details');
            if (companyDetails) {
                companyDetails.innerHTML = 
                /*html*/
                `
                <section class='main'>
                <section class='left'>
                <img src="../storage/img/spaceXlogo.png">     
                </section>
                <section class='right'>
                <h2>${company_name}</h2>
                <p><strong>company_address:</strong> ${company_address}</p>
                <p><strong>company_city:</strong> ${company_city}</p>
                <p><strong>company_state:</strong> ${company_state}</p>
                <p><strong>company_website:</strong> <a href="${company_website}" target="_blank">${company_website}</a></p>
                <p><strong>company_flickr:</strong> <a href="${company_flickr}" target="_blank">${company_flickr}</a></p>
                <p><strong>company_twitter:</strong> <a href="${company_twitter}" target="_blank">${company_twitter}</a></p>
                <p><strong>company_elon_twitter:</strong> <a href="${company_elon_twitter}" target="_blank">${company_elon_twitter}</a></p>
                <p><strong>company_founder:</strong> ${company_founder}</p>
                <p><strong>company_founded:</strong> ${company_founded}</p>
                <p><strong>company_employees:</strong> ${company_employees}</p>
                <p><strong>company_vehicles:</strong> ${company_vehicles}</p>
                <p><strong>company_launch_sites:</strong> ${company_launch_sites}</p>
                <p><strong>company_test_sites:</strong> ${company_test_sites}</p>
                <p><strong>company_ceo:</strong> ${company_ceo}</p>
                <p><strong>company_cto:</strong> ${company_cto}</p>
                <p><strong>company_coo:</strong> ${company_coo}</p>
                <p><strong>company_cto_propulsion:</strong> ${company_cto_propulsion}</p>
                <p><strong>company_valuation:</strong> ${company_valuation}</p>
                <p><strong>company_summary:</strong> ${company_summary}</p>
                </section>
                </section>
                `;
            } else {
                console.error('Elemento con ID "company-details" no encontrado.');
            }
        } else {
            console.error('No se encontró el company con la ID proporcionada en los datos obtenidos.');
        }
    } catch (error) {
        console.error('Error al obtener los datos del company:', error);
    }
};

// Invoca el hechizo con el ID específico del company
getAllDetailDatacompanys('5eb75edc42fea42237d7f3ed');
