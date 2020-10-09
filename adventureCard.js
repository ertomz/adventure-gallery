// Template
const template = document.createElement('template');
// Add styling here so it only affects this component
template.innerHTML = `
    <style>
        .adventure-card{
            font-family: 'Didot', sans-serif;
            margin-top: 30px;
            margin-bottom: 30px;
        }
        .adventure-img{
            width: 100%;
            opacity: 0.7;
        }
        .img-container{
            position: relative;
            background-color: black;
            text-align: center;
        }
        .img-text{
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            color: 	#F5F5F5;
            font-size: 20px;
            font-family: 'Geneva'; 
        }
        .adventure-card:hover h3{
            opacity: 0;
            transition: opacity .3s;
        }
        .adventure-card:hover img{
            opacity: 1;
            transition: opacity .4s;
        }

    </style>

    <div class="adventure-card">
        <a>
            <div class="img-container">
                <img class="adventure-img"/>
                <div class="img-text">
                    <h3></h3>
                </div>
            </div>
        </a>
        <div class="info">
            <p><slot name="date" /></p>
            <p><slot name="details"/></p>
        </div>
    </div>

`;



// Adventure card class
class AdventureCard extends HTMLElement {
    constructor() {
        super();

        this.attachShadow({ mode: 'open' }); // Shadow DOM
        this.shadowRoot.appendChild(template.content.cloneNode(true)); // Returns copy of node from template
        // Get items from the template and set values
        this.shadowRoot.querySelector('h3').innerText = this.getAttribute('name');
        this.shadowRoot.querySelector('img').src = this.getAttribute('image-link');
        this.shadowRoot.querySelector('a').href = this.getAttribute('page-link');

        // this.shadowRoot.querySelector('a').setAttribute(name, 'name');

        // Save respective info whenever a card is rendered
        // alert(this.getAttribute('name'));

    }
}

// Define custom element: name of tag, class
window.customElements.define('adventure-card', AdventureCard);