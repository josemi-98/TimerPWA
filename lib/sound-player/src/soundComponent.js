import {LitElement, html, css} from 'lit';

export class SoundComponent extends LitElement{
    static properties = {
        sound: { type: String, attribute: true } 
    }

    constructor(){
        super();
    }
    
    render() {
        return html`
            <audio src="${this.sound}"></audio>
        `;
    }

    play() {
        this.shadowRoot.querySelector('audio').play();
    }
}
window.customElements.define('sound-component', SoundComponent);