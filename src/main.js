import { createApp } from 'vue'
import App from './App.vue'
import VueMathjax from 'vue-mathjax-next';
import router from './router'// loads from src/router/index.js

//#region import components
import HelloWorld from './components/HelloWorld.vue'
//#endregion



// createApp(App).use(VueMathjax).mount('#app');

const app = createApp(App);

app.use(router);
app.use(VueMathjax);

//#region register components
app.component('HelloWorld', HelloWorld);
//#endregion 

app.mount('#app');

