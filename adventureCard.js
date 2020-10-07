// Template
const template = document.createElement('template');
// Add styling here so it only affects this component
template.innerHTML = `
    <style>
        h3{
            color: white;
            text-shadow: 1px 1px gray;
            position: absolute;
            left: 33%;
            top: 33%;
            font-size: 20px;
        }
        .adventure-card{
            font-family: 'Didot', sans-serif;
            margin-top: 30px;
            margin-bottom: 30px;
            // border-top: #aacdbe 5px solid;
            // height: 400px;
        }
        .adventure-img{
            width: 100%;
            opacity: 0.5;
        }
        .img-container{
            position: relative;
        }
        .adventure-img:hover {
            opacity: 0.8;
            transition: opacity .4s;
        }

    </style>

    <div class="adventure-card">
        <div class="img-container">
            <a>
                <img class="adventure-img"/>
                <h3></h3>
            </a>
        </div>
        <div class="info">
            <p><slot name="date" /></p>
            <p><slot name="details"/></p>
        </div>
    </div>

    <script src="adventurePage.js"></script>

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


    }
}

// Define custom element: name of tag, class
window.customElements.define('adventure-card', AdventureCard);