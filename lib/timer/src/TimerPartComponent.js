import {LitElement, html, css} from 'lit';

export class TimerPartComponent extends LitElement{

    static properties = {
        value: { type: Number, attribute: true },
        format: {type: String, attribute: true}
    }

    constructor(){
        super();
    }
    
    static styles = css`
        :host {
            color : var(--timer-component-part-color);
            background-color: var(--timer-component-part-background-color);
            padding: var(--timer-component-part-padding);
            box-shadow: var(--timer-component-part-box-shadow);
            border-radius: var(--timer-component-part-boder-radius);
        }

    `;

    render() {
        return html`
            <div>${this._formatTime(this.value)}</div>
        `;
    }

    _formatTime(time) {
        if (this.format?.length>1) return time < 10 ? `0${time}` : time; 
        return time;
    }
}
window.customElements.define('timer-part-component', TimerPartComponent);