// Template
const template = document.createElement('template');
// Add styling here so it only affects this component
template.innerHTML = `
    <style>
        
    </style>

    <div class="adventure-page">
        <div class="img-container">
            <h3></h3>
        </div>
        <div class="info">
            <p><slot name="date" /></p>
            <p><slot name="details"/></p>
        </div>
    </div>
`;

// Adventure page class
class AdventurePage extends HTMLElement {
    constructor() {
        super();

        this.attachShadow({ mode: 'open' }); // Shadow DOM
        this.shadowRoot.appendChild(template.content.cloneNode(true)); // Returns copy of node from template
        // Get items from the template and set values
        this.shadowRoot.querySelector('h3').innerText = this.getAttribute('name');


    }
}

// Define custom element: name of tag, class
window.customElements.define('adventure-page', AdventurePage);