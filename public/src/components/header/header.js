import '../button/button.js'

class Header extends HTMLElement {

    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
    }

    connectedCallback() {
        this.render();
    }


    render() {
        this.shadowRoot.innerHTML = `
        <link rel="stylesheet" href="./src/components/header/header.css">
        <header class="myNav">
        <div class="header-inner-container"> 
            <div>
            <img id="activision-logo" src="https://www.activision.com/content/dam/atvi/global/firstparty/activision/activision_logo_white-text.png" alt="logo Activision"></img>
            </div>
        
            <nav class="nav-items">
                <ul>
                    <li>JUEGOS</li>
                    <li>ACERCA DE</li>
                    <li>TRABAJO</li>
                    <li>SOPORTE</li>
                </ul>
            </nav>
        
            <div class="header-btns">
            <my-button label="REGISTRARSE" type="primary-sml"></my-button>
            <my-button label="INICIAR SESIÓN" type="tertiary-sml"></my-button>
            </div>
        </div>
        </header>`
    }
}

customElements.define('my-header', Header)
export default Header