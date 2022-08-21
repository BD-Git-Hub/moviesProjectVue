import { createApp,  } from 'vue'
import App from './App.vue'
import router from './router/router.js'
import BaseButton from './components/UI/BaseButton.vue'




const app = createApp(App);

app.use(router);

app.component('base-button', BaseButton)

app.mount('#app');

