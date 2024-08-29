class header extends HTMLElement {

    static get observedAttributes(){
        return["p"]
    }

    constructor(){
        super();
        this.shadowRoot({mode: 'open'});
    }

    connectedCallback(){
        this.render();
    }

    attributeChangedCallback(propname, oldValue, newValueS){

    }

    render(){
        this.shadowRoot.innerHTML = `
        <nav class="myNav">
        <div>
            <img src="https://www.activision.com/content/dam/atvi/global/firstparty/activision/activision_logo_white-text.png" alt="logo Activision"></img>
        </div>
        <div>
            <p>JUEGOS</p>
        </div>
        <div>
            <p>ACERCA DE</p>
        </div>
        <div>
            <p>TRABAJO</p>
        </div>
        <div>
            <p>SOPORTE</p>
        </div>
        <div>
            <button>REGISTRARME</button>
        </div>
        <div>
             <button>INICIAR SESION</button>
        </div>
        </nav>`
    }
}

customElements.define('my-header',header)
export default header