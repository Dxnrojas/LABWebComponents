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
        <my-header></my-header>
        <my-hero></my-hero>

        <section class="notices-logos">
        <my-logos
          title="ÚLTIMAS NOTICIAS Y ARTÍCULOS"
          img="./src/assets/NOTICES.png"
          img1="./src/assets/ACTIVISION.png"
          img2="./src/assets/COD.png"
          img3="./src/assets/TONY.png"
          img4="./src/assets/CRASH.png"
        ></my-logos>
      </section>

       
        `
    }
}

customElements.define ('app-container' , AppContainer)