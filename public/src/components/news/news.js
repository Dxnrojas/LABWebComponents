class News extends HTMLElement {

    static get observedAttributes(){
        return ['img', 'date', 'description', 'textbutton'];
    }

    constructor(){
        super();
        this.attachShadow({mode: 'open'});
    }

    connectedCallback(){
        this.render();
    }

    attributeChangedCallback(propName, oldVal, newVal){
        if (oldVal !== newVal) {
            this[propName] = newVal
        };

    }

    render(){
        this.shadowRoot.innerHTML=`
        <img src='${this.img}' alt=''></img>
        <p>${this.date}</p>
        <h4>${this.description}</h4>
        <p>${this.textbutton}</p>
        `
    }
}

customElements.define('my-news', News);
export default News;