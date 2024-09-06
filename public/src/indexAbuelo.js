import * as components from './components/indexPadre.js'

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
        <my-header></my-header>
        <my-hero
        
             img="https://support.activision.com/resource/1544667366000/CODLOW_Hero"
             
                description="¡YA DISPONIBLE PARA iOS Y ANDROID"
                button00="DESCARGALO YA"
                button01="VISITA ESTE SITIO"
             
        
        ></my-hero>

        <h2>ULTIMAS NOTICIAS Y ARTICULOS</h2>

        <my-news
            img="https://www.callofduty.com/content/dam/atvi/callofduty/cod-touchui/blog/hero/codm/CODM-S8-SHADOW-OPERATIVES-TOUT-MX-ES.jpg"
            date="AUG 23, 2024"
            description="Presentamos la temporada 8 de <em> Call of Duty: Mobile </em> - Agentes de la oscuridad"
            textbutton="LEER MAS"
        ></my-news>

        <my-news
            img src="https://www.callofduty.com/content/dam/atvi/callofduty/cod-touchui/blog/hero/bo6/BO6-SP-MOST-WANTED-TOUT.jpg"
            date="AUG 19, 2024"
            description= "Black Ops 6 - Más  buscado: ¡Revelación de la misión de la campaña!"
            textbutton="LEER MAS"
        ></my-news>

        <my-news
            img="https://www.callofduty.com/content/dam/atvi/callofduty/cod-touchui/blog/hero/COD-EXP-ROADMAP-TOUT.jpg"
            date="AUG 15, 2024"
            description="Optimización de la experiencia <em> Call of Duty </em>"
            textbutton="LEER MAS"
        ></my-news>

        <my-news
            img="https://www.callofduty.com/content/dam/atvi/callofduty/cod-touchui/blog/hero/codm/CODM-S8-SHADOW-OPERATIVES-TOUT-MX-ES.jpg"
            date="AUG 08, 2024"
            description="Modo zombies de Black Ops 6: qué necesitas sabeer"
            textbutton="LEER MAS"
        ></my-news>

        <my-news
            img="https://www.callofduty.com/content/dam/atvi/callofduty/cod-touchui/blog/hero/bo6/BO6-ZOMBIES-CINEMATIC-TOUT.jpg"
            date="AUG 06, 2024"
            description="Zombies de <em> Ops: 6</em>: La historia hasta ahora"
            textbutton="LEER MAS"
        ></my-news>

        <my-news
            img="https://www.callofduty.com/content/dam/atvi/callofduty/cod-touchui/blog/hero/codm/CODM-S7-ETERNAL-GHOST-TOUT.jpg"
            date="JUL 25, 2024"
            description="Presentamos la 7 temporada de Call of Duty: Mobile - Ghost Eterno"
            textbutton="LEER MAS"
        ></my-news>

        <smallBanner></smallBanner>
        <community
            img="../public/src/assets/community1.jpg"
            description="callofdutyindowment"
        ></community>

        <community
            img="../public/src/assets/community2.jpg"
            description="callofdutyindowment"
        ></community>

        <community
            img="../public/src/assets/community3.jpg"
            description="callofdutyindowment"
        ></community>
        
        `
    }
}

customElements.define ('app-container' , AppContainer)