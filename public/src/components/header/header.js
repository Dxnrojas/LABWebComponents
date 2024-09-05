class Header extends HTMLElement {

    constructor(){
        super();
        this.attachShadow({mode: 'open'});
    }

    connectedCallback(){
        this.render();
    }


    render(){
        this.shadowRoot.innerHTML = `
        <header class="myNav">
        <div>
            <img src="https://www.activision.com/content/dam/atvi/global/firstparty/activision/activision_logo_white-text.png" alt="logo Activision"></img>
        </div>

        <nav>
            <ul>
                <li>JUEGOS</li>
                <li>ACERCA DE</li>
                <li>TRABAJO</li>
                <li>SOPORTE</li>
            </ul>
        </nav>

        <div>
            <button>REGISTRARME</button>
        </div>
        <div>
             <button>INICIAR SESION</button>
        </div>
        </header>`
    }
}

customElements.define('my-header',Header)
export default Header