import  "./components/header/header.js";

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
        <section>
            
        </section>
        <h2>ULTIMAS NOTICIAS Y ARTICULOS</h2>
        <section>
        </section>
        <news></news>
        <smallBanner></smallBanner>
        <community></community>
        
        `
    }
}

customElements.define ('app-container' , AppContainer)