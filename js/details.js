const crewMemberContainer = document.querySelector(".member-details");

const queryString = document.location.search;

const params = new URLSearchParams(queryString);

const id = params.get("id");

console.log(id);


const detailsUrl = "https://api.spacexdata.com/v4/crew/" + id;

console.log(detailsUrl);

async function fetchMember() {

    try {
        const response = await fetch(detailsUrl);
        const details = await response.json();

        console.log(details);

        const newPageTitle = document.querySelector("title");

        newPageTitle.innerHTML = `${details.name}`;

        createHTML(details);
    }
    catch(error) {
        console.log(error);
        crewMemberContainer.innerHTML = message("error", "An error occurred", error);
    }
}

fetchMember();

function createHTML(member) {

    crewMemberContainer.innerHTML = `<h1>${member.name}</h1>
                                     <div class="details-container">
                                        <img class="details-image" src="${member.image}" alt="${member.name}">
                                            <div class="details-container">
                                                <ul>
                                                    <li><span>Agency:</span> ${member.agency}</li>
                                                    <li><span>Status:</span> ${member.status}</li>
                                                    <li><span>Wikipedia:</span> ${member.wikipedia}</li>
                                                </ul>
                                            </div>
                                     </div>`;
}
