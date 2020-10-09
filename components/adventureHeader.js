// Template
const template = document.createElement('template');
// Add styling here so it only affects this component
template.innerHTML = `
    <style>
        h2{
            font-family: 'Palatino Linotype';
            font-size: 50px;
            color: white;
            padding-bottom: 15px;
        },
        h5{
            font-family: 'Century Gothic';
            color: 'white';
            font-size: 20px;
            
        }
        .adventure-header{
            padding-top: 100px;
            padding-bottom: 30px;
            background-color: #40a798;
        } 
    </style>

    <div class="adventure-header">
        <h2></h2>
        <h5></h5>
    </div>


`;



// Adventure card class
class AdventureHeader extends HTMLElement {
    constructor() {
        super();

        this.attachShadow({ mode: 'open' }); // Shadow DOM
        this.shadowRoot.appendChild(template.content.cloneNode(true)); // Returns copy of node from template
        // Get items from the template and set values
        this.shadowRoot.querySelector('h2').innerText = this.getAttribute('name');
        this.shadowRoot.querySelector('h5').innerText = this.getAttribute('date');


    }
}

// Define custom element: name of tag, class
window.customElements.define('adventure-header', AdventureHeader);