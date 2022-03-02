const crewContainer = document.querySelector(".results");

const url = "https://api.spacexdata.com/v4/crew/";

const corsEnabledUrl = "https://noroffcors.herokuapp.com/" + url;

async function fetchCrew() {

    try {
        const response = await fetch(corsEnabledUrl);
        const json = await response.json();

        console.log(json);

        crewContainer.innerHTML = "";
        
        const crew = json;

        for (let i = 0; i < crew.length; i++) {

            if (i === 9) {
                break;
            }
            crewContainer.innerHTML += `<a href="details.html?id=${crew[i].id}" class="card">
                                            <div class="grid-container">
                                                <img class="image" src="${crew[i].image}"/>
                                            </div>
                                            <div class="details">
                                                <h4 class="name">${crew[i].name}</h4>
                                            </div>
                                        </a>`;
        };
    }
    catch(error) {
        console.log(error);
        crewContainer.innerHTML = message("error", "Something went wrong!", error);
    }
}

fetchCrew();