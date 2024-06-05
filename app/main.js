import './src/scss/global.scss';
import './src/sounds/fairy.mp3';
import './src/sounds/sheep.mp3';
import './src/images/logos/TimerPWA-logos_transparent.png';
import { App } from './src/js/app.js';

if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('/sw.js', { scope: '/' })
        .then(() => {
            console.log('Service Worker Registered'); 
        })
        .catch(err => {
            console.log('Service Worker Failed to Register', err); 
        });
} else {
    console.log('Service Worker not supported in this browser'); 
}
customElements.define('timer-app', App);
const appElement = document.getElementById('app');
const app = document.createElement('timer-app');
appElement.appendChild(app);