class Card extends HTMLElement {

    static get observedAttributes() {
        return ['bigImg', 'description'];
    }


    constructor() {
        super();
        this.attachShadow({ mode: 'open' })
    }
    connectedCallback() {
        this.render()
    }

    attributeChangedCallback(propName, oldVal, newVal) {
        if (oldVal !== newVal) {
            this.render()
        }
    }

    render() {
        const bigImg = this.getAttribute('bigImg')
        const description = this.getAttribute('description') 

        this.shadowRoot.innerHTML = `
        <link rel="stylesheet" href="./src/components/card/card.css"> 
        <div class="card">
        
            <div class="image-container">
                <div style="background-image: url('${bigImg}');" class="card-bg-img">
            </div>

            </div>

            <div class="text-container">
                <p>AUG 23, 2024</p>
                <p id="card-headline">${description}</p>
                <a>Leer más</a>
            </div>
        </div>
        `
    }
}

customElements.define('my-card', Card)
export default Card