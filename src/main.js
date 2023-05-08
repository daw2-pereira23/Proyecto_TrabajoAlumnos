
import { header } from './componentes/header'
import { footer } from './componentes/footer'

// Import our custom CSS
import './scss/styles.scss'

// Import all of Bootstrap's JS
import * as bootstrap from 'bootstrap'

import { pruebaSupabase } from './vistas/pruebaSupabase';
import { enrutador } from './componentes/router'
import { menuSuperior } from './componentes/menuSuperior';





header.script()
document.querySelector('header').innerHTML = header.template


document.querySelector('footer').innerHTML = footer.template



enrutador.observadorRutas()
// Cargamos la página home
window.location = '#/home'



