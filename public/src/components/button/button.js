class Button extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' })
    }

    connectedCallback() {
        this.render()
    }

    render() {
        const label = this.getAttribute('label') || 'Label'
        const type = this.getAttribute('type')
        const className = `button ${type}`

        this.shadowRoot.innerHTML = `
        <link rel=stylesheet href="./src/components/button/button.css">
        <button class="${className}">${label}</button> 
        `
    }

}
customElements.define('my-button', Button)
export default Button