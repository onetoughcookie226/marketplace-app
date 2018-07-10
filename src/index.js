import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<App title="Resturant Manager"
                // id="1"
                company= "Gummies Muffin International"
                
            description= "Gummies muffin sesame snaps fruitcake. Cookie macaroon macaroon. Ice cream donut apple pie sweet muffin apple pie muffin pudding. Muffin caramels croissant. Jelly cotton candy candy canes gummies tootsie roll halvah. Tootsie roll topping croissant tiramisu topping jelly-o pudding. Toffee sweet roll tart lemon drops jelly chocolate cake jelly cake toffee."
    />, document.getElementById('root'));
registerServiceWorker();
