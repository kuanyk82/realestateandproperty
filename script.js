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
