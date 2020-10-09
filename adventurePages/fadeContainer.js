// PROBLEM: There's some weird black space below the image, unsure why 
// the background is carrying below the image.


// Template
const template = document.createElement('template');
// Add styling here so it only affects this component
template.innerHTML = `
    <style>
        .img-fade-container{
            position: relative;
            background-color: black;
            padding: 0 !important;
            margin: 0 !important;
        }
        .center{
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            color: white;
            opacity: 0;
            text-align: center;
        }
        .img-fade-container:hover img{
            opacity: 0.5;
            transition: opacity .5s;
        }
        .img-fade-container:hover .center{
            opacity: 1;
            transition: opacity .5s;
        }
        img{
            width: 100%;
            height: auto;
        }
    </style>


    <div class="img-fade-container">
        <img/>
        <div class="center">
            <p><slot name="text" /></p>
        </div>
    </div>

`;



// Adventure card class
class FadeContainer extends HTMLElement {
    constructor() {
        super();

        this.attachShadow({ mode: 'open' }); // Shadow DOM
        this.shadowRoot.appendChild(template.content.cloneNode(true)); // Returns copy of node from template
        // Get items from the template and set values
        this.shadowRoot.querySelector('img').src = this.getAttribute('img');
        
    }
}

// Define custom element: name of tag, class
window.customElements.define('img-fade-container', FadeContainer);






