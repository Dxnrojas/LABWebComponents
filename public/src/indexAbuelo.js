import * as components from './components/indexPadre.js';


class AppContainer extends HTMLElement {

    constructor(){
        super();
        this.attachShadow({mode: "open"});
    }
    connectedCallback(){
        this.render()
    }

    render(){
        this.shadowRoot.innerHTML = `
        <link rel="stylesheet" href="/public/index.css">
        <my-header></my-header>
        <my-hero></my-hero>

    <section class="notices-logos">
        <my-logos
          title="ÚLTIMAS NOTICIAS Y ARTÍCULOS"
          logo1="./src/assets/NOTICES.png"
          logo2="./src/assets/ACTIVISION.png"
          logo3="./src/assets/COD.png"
          logo4="./src/assets/TONY.png"
          logo5="./src/assets/CRASH.png"
        ></my-logos>
    </section>

    <section class="cards-container">
        <my-card 
            bigImg="https://www.callofduty.com/content/dam/atvi/callofduty/cod-touchui/blog/hero/codm/CODM-S8-SHADOW-OPERATIVES-TOUT-MX-ES.jpg" 
            description="Presentamos la Temporada 8 de <em>Call of Duty: Mobile</em> — Agentes de la oscuridad"
        ></my-card>

        <my-card 
            bigImg="https://www.callofduty.com/content/dam/atvi/callofduty/cod-touchui/blog/hero/bo6/BO6-SP-MOST-WANTED-TOUT.jpg" 
            description="Black Ops 6 - Más buscado: ¡Revelación de la misión de campaña!"
        ></my-card>

        <my-card 
            bigImg="https://www.callofduty.com/content/dam/atvi/callofduty/cod-touchui/blog/hero/COD-EXP-ROADMAP-TOUT.jpg" 
            description="Optimización de la experiencia de <em>Call of Duty</em>"
        ></my-card>

        <my-card 
            bigImg="https://www.callofduty.com/content/dam/atvi/callofduty/cod-touchui/blog/hero/bo6/BO6-ZOMBIES-888-TOUT.jpg" 
            description="Modo Zombis de Black Ops 6: qué necesitas saber"
        ></my-card>

        <my-card 
            bigImg="https://www.callofduty.com/content/dam/atvi/callofduty/cod-touchui/blog/hero/bo6/BO6-ZOMBIES-CINEMATIC-TOUT.jpg" 
            description="Zombis de <em>Black Ops 6</em>: la historia hasta ahora"
        ></my-card>

        <my-card 
            bigImg="https://www.callofduty.com/content/dam/atvi/callofduty/cod-touchui/blog/hero/codm/CODM-S7-ETERNAL-GHOST-TOUT.jpg" 
            description="Presentamos la Temporada 7 de Call of Duty: Mobile - Ghost eterno"
        ></my-card>
    </section>

    

    
        `
    }
}

customElements.define ('app-container' , AppContainer)