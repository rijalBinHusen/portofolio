import { createApp } from 'vue'
import App from './App.vue'
import './index.css'
import Axios from 'axios'
import { library } from "@fortawesome/fontawesome-svg-core";
import {
    faTrophy,
    faCode,
    faStar,
    faStarHalfAlt,
} from "@fortawesome/free-solid-svg-icons";
import { faJs, 
         faCss3,
         faBootstrap,
         faVuejs,
         faNodeJs,
         faTelegramPlane,
         faGithub,
        } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

library.add(
    faTrophy,
    faCode,
    faStar,
    faStarHalfAlt,
    faJs,
    faCss3,
    faBootstrap,
    faVuejs,
    faNodeJs,
    faTelegramPlane,
    faGithub,
);


const app = createApp(App).component("font-awesome-icon", FontAwesomeIcon)

app.config.globalProperties.http = Axios;
app.mount('#app')
