// Fetch property listings from the JSON file
async function fetchProperties() {
    try {
        const response = await fetch('properties.json');
        const properties = await response.json();
        populateProperties(properties);
    } catch (error) {
        console.error('Error loading properties:', error);
    }
}

function populateProperties(properties) {
    const listingsContainer = document.querySelector('.sub-sales-listing');
    listingsContainer.innerHTML = ''; // Clear previous listings

    properties.forEach(property => {
        const card = document.createElement('div');
        card.classList.add('card');

        card.innerHTML = `
            <div class="card-inner">
                <div class="card-front">
                    <img src="${property.image}" alt="${property.title}">
                    <div class="card-details">
                        <h3>${property.title}</h3>
                        <p>${property.description}</p>
                    </div>
                </div>
                <div class="card-back">
                    <p><strong>Price:</strong> ${property.price}</p>
                    <p>Contact us for more details!</p>
                </div>
            </div>
        `;

        listingsContainer.appendChild(card);
    });
}

// Initialize the property listings
document.addEventListener('DOMContentLoaded', fetchProperties);


async function fetchNewProjects() {
    try {
        const response = await fetch('projects.json');  // Assuming a projects.json file for new projects
        const projects = await response.json();
        populateNewProjects(projects);
    } catch (error) {
        console.error('Error loading projects:', error);
    }
}

function populateNewProjects(projects) {
    const listingsContainer = document.querySelector('.projects-listing');
    listingsContainer.innerHTML = ''; // Clear previous listings

    projects.forEach(project => {
        const projectCard = document.createElement('div');
        projectCard.classList.add('card');

        // Create project card with video
        projectCard.innerHTML = `
            <img src="${project.image}" alt="${project.title}">
            <div class="card-details">
                <h3>${project.title}</h3>
                <p>${project.description}</p>
                <p class="price">${project.price}</p>
            </div>
            <div class="video-container">
                <iframe 
                    src="${project.video}" 
                    title="${project.title} Video" 
                    frameborder="0" 
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                    allowfullscreen>
                </iframe>
            </div>
        `;

        listingsContainer.appendChild(projectCard);
    });
}

// Initialize the new project listings
document.addEventListener('DOMContentLoaded', fetchNewProjects);
