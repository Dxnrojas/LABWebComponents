import '../button/button.js'
class SmallBanner extends HTMLElement {

 static get observedAttributes() {
        return ['image', 'title', 'description'];
    }

    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
    }

    connectedCallback() {
        this.render();
    }

    attributeChangedCallback(propName, oldValue, newValue) {
        if (oldValue !== newValue) {
            this[propName] = newValue
        }
    }

    render(){
        this.shadowRoot.innerHTML = `
        <link rel="stylesheet" href="./src/components/smallBanner/smallBanner.css">
        <section>
            <div class='small-banner'>
                <div class='smallBanner-txt'>
                    <h1>${this.title}</h1>
                    <br></br>
                    <p>${this.description}</p>
                    <br></br>
             <my-button label="VISIT SUPPORT" type="secondary"></my-button>
                </div>
                <div class='smallBanner-img'>
                    <img src="${this.image}"/>
                </div>
            </div>
        </section>
        `
        
    }



}
customElements.define('small-banner', SmallBanner);
export default SmallBanner;
