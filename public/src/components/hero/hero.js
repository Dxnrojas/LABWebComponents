class Hero extends HTMLElement {

    static get observedAttributes(){
        return ['img', 'logo', 'description', 'button00', 'button01'];
    }

    constructor () {
    super();
    this.attachShadow({ mode: 'open' });
    }

    connectedCallback () {
    this.render();
    }

    attributeChangedCallback (propName, oldVal, newVal) {
        if (oldVal !== newVal) {
            this[propName] = newVal
        };

    }
    render(){
        this.shadowRoot.innerHTML = `
        <section>
        <img src="${this.img}" alt="${this.alt}">
        <div>
            <img src="${this.logo}">
            <p>${this.description}</p>
            <button>${this.button00}</button>
            <button>${this.button01}</button>
        </div>
        </section>
        `

    }

}
customElements.define('my-hero', Hero)
export default Hero