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

// Function to generate property cards
function populateProperties(properties) {
    const listingContainer = document.querySelector('.sub-sales-listing');
    properties.forEach(property => {
        const card = document.createElement('div');
        card.className = 'card';
        card.innerHTML = `
            <h3>${property.title}</h3>
            <p>${property.description}</p>
            <p><strong>Price:</strong> ${property.price}</p>
        `;
        listingContainer.appendChild(card);
    });
}

// Load properties when the page is ready
document.addEventListener('DOMContentLoaded', fetchProperties);