class Hero extends HTMLElement {

    static get observedAttributes(){
        return ['img', 'alt', 'logo', 'description', 'button00', 'button01'];
    }

    constructor () {
    super();
    this.attachShadow({ mode: 'open' });
    }

    connectedCallback () {
    this.render();
    }

    attributeChangedCallback (attrName, oldVal, newVal) {
    this.render();

    }
    render(){
        this.shadowRoot.innerHTML = `
        <section>
        <img src="${this.img}" alt="${this.alt}">
        
        </section>
        `

    }

}
customElements.define('my-hero', Hero)
export default Hero