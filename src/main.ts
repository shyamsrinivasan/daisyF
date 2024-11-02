import { createApp } from 'vue'
import { createNotivue } from 'notivue'

import './style.css'
import App from './App.vue'

// notivue
import 'notivue/notifications.css' 
import 'notivue/animations.css'

// vuetify
import 'vuetify/styles'
import { fa } from "vuetify/iconsets/fa"
import { aliases, mdi } from 'vuetify/iconsets/mdi'
import { createVuetify } from 'vuetify'
import { VDataTableServer } from 'vuetify/components'
import * as directives from 'vuetify/directives';

//router
import router from "@/router";


const notivue = createNotivue({
    position: 'bottom-right',
    enqueue: false,
    limit: 2,
    notifications: {
        global: {
            duration: 8000,
        }
    }
});

const vuetify = createVuetify({
    theme: {
        themes: {
            light: {
                colors: {
                    primary: "#1b0d77",
                    secondary: "#dc143c",
                },
            },
        },
    },
    icons: {
        defaultSet: "mdi",
        aliases,
        sets: {
            mdi,
            fa,
        },
    },
    components: {
        VDataTableServer,
    },
    directives,
})

const app = createApp(App);

app.use(notivue);
app.use(vuetify);
app.use(router);

app.mount('#app')
