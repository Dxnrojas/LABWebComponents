class Community extends HTMLElement {

static get observedAttribute(){
    return ['img' ]

};

constructor(){
    super();
    this.attachShadow({mode:'open'});

};

connectedCallback(){
    this.render();
};

attributeChangedCallback(propName, oldVal, newVal){
    if (oldVal !== newVal) {
        this[propName] = newVal
    };

};


render(){
    this.shadowRoot.innerHTML=`
    <img src='${this.img}' alt=''></img>
    `

};


}
customElements.define('my-community', Community);
export default Community;