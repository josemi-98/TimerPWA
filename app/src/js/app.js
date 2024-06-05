import { LitElement, html, css } from 'lit';
import 'component-timer';
import 'component-sound-player';

export class App extends LitElement {
    static styles = css `
    timer-player-component{
            --timer-component-part-color: var(--neutral-color);
            --timer-component-part-padding: 10px;
            --timer-component-part-box-shadow: 0 2px 3px rgb(0, 0, 0, 0.2);
            --timer-component-part-boder-radius: 5px;
            --timer-component-join-padding: 10px;
            --timer-player-component-color: var(--neutral-light-color);
            --timer-player-component-part-color: var(--neutral-color);
            --timer-player-component-button-padding: 5px 30px;
            --timer-player-component-button-margin: 5px 10px ;
            --timer-player-component-button-border-radius: 5px ;
            --timer-player-component-play-color: var(--primary-lightest-color) ;
            --timer-player-component-play-background-color: var(--primary-color) ;
            --timer-player-component-save-color: var(--primary-lightest-color) ;
            --timer-player-component-actions-margin: 20px 0 0 0;
            --timer-player-component-status-color: var(--info-color) ;
            --timer-player-component-status-font-size: 1.5rem;
            --timer-player-component-status-margin: 0 0 20px 0;
            --timer-player-component-save-background-color:var(--neutral-light-color);

            color: var(--neutral-light-color);
            background-color: var(--primary-lightest-color);
            box-shadow: 0 2px 3px rgb(0, 0, 0, 0.6);
            padding: 20px;
            
        }

        #app {
            display: flex;
            justify-content: center;
            align-items: center;
            height: 100vh;
            flex-direction: column;
        }
        img{
            width:350px;
        }
    `;

    static properties = {};

    render () {
        return html `
            <div id="app">
                <img src="./assets/TimerPWA-logos_transparent.png" alt="Icon description">
                <timer-player-component play-btn pause-btn reset-btn >
                    <sound-component sound="./assets/fairy.mp3"></sound-component>
                    <timer-component reverse></timer-component>
                </timer-player-component>
            </div>
        `;
    }
}