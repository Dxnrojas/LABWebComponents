class AppContainer extends HTMLElement {

    constructor(){

    }
    connectedCallBack(){
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
        
        `
    }
}

customElements.define ('app-container' , AppContainer)