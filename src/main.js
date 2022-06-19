import { createApp } from "vue";
import App from "./App.vue";
import "./index.css";
import router from "./router";
import store from "./store";
import Axios from "axios";
import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faTrophy,
  faCode,
  faStar,
  faStarHalfAlt,
  faSync,
  faPaintBrush,
  faFileExcel,
  faUser,
  faGlobeEurope,
  faCloudRain,
  faSmile,
  faTimes,
} from "@fortawesome/free-solid-svg-icons";
import {
  faJs,
  faCss3,
  faBootstrap,
  faVuejs,
  faNodeJs,
  faTelegramPlane,
  faGithub,
  faFigma,
  faPhp,
  faHtml5,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { faTimesCircle } from "@fortawesome/free-regular-svg-icons";

library.add(
  faHtml5,
  faTimes,
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
  faSync,
  faFileExcel,
  faPaintBrush,
  faFigma,
  faPhp,
  faUser,
  faGlobeEurope,
  faCloudRain,
  faSmile
);

const app = createApp(App)
  .component("font-awesome-icon", FontAwesomeIcon)
  .use(router)
  .use(store);

app.config.globalProperties.http = Axios;
app.mount("#app");
