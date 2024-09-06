class Button extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' })
    }

    connectedCallback() {
        this.render()
    }

    render() {
        const label = this.getAttribute('label') //Se realiza para que pueda leer lo que tiene el boton
        const type = this.getAttribute('type')//Se realiza para especificar el tipo de boton
        const className = `button ${type}`

        this.shadowRoot.innerHTML = `
        <link rel=stylesheet href="./src/components/button/button.css">
        <button class="${className}">${label}</button> 
        `
    }

}
customElements.define('my-button', Button)
export default Button