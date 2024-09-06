import '../button/button.js'

class Hero extends HTMLElement {

    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
    }

    // static get observedAttributes(){
    //     return ['img', 'alt', 'logo', 'description', 'button00', 'button01'];
    // }


    connectedCallback() {
        this.render();
    }

    // attributeChangedCallback (attrName, oldVal, newVal) {
    // this.render();
    // }

    render() {

        const url = 'https://image.api.playstation.com/vulcan/ap/rnd/202406/0723/693419933b166764a1fa09c5da5617dbb4f8fc0a36dc471a.png'

        this.shadowRoot.innerHTML = `
        <link rel="stylesheet" href="./src/components/hero/hero.css">
        <section style="background-image: url('${url}');" class="hero">
            <div class="hero-info">
                <img src="https://www.activision.com/content/dam/atvi/callofduty/cod-touchui/blackops6/common/black-ops-6-full-logo.png" alt="logo">
            <div class="caption">
                Obligados a rebelarse. Perseguidos desde dentro. 
                <br> Esto es 
                <em>Black Ops 6 </em>.
            </div>
            <div class="hero-actions">
                <my-button label="RESERVA BO6" type="primary"></my-button>
                <my-button label="VISITAR SITIO" type="secondary"></my-button>
            </div>
            </div>
        </section>
        `

    }

}
customElements.define('my-hero', Hero)
export default Hero