class Logos extends HTMLElement {

    static get observedAttributes() {
        return ['title', 'logo1', 'logo2', 'logo3', 'logo4', 'logo5'];
    }
    constructor() {
        super();
        this.attachShadow({mode: 'open'});
    }

    connectedCallback() {
        this.render();
    }

    attributeChangedCallback(propName, oldValue, newValue) {
        if(oldValue !== newValue) {
            this[propName] = newValue;
        }
    }

    render() {
        this.shadowRoot.innerHTML = `
        <link rel="stylesheet" href="./src/components/logos/logos.css">
        <section class = 'container'>
        <div>
        <h2>${this.title}</h2>
        </div>
        <div class = 'img-container'>
        <img src="${this.logo1}"/>
        <img src="${this.logo2}"/> 
        <img src="${this.logo3}"/>
        <img src="${this.logo4}"/>
        <img src="${this.logo5}"/>
        </div>
        </section>`;
    }
}

customElements.define('my-logos', Logos);
export default Logos;