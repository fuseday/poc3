require('./bootstrap');

import { createApp, h } from 'vue';
import { createInertiaApp } from '@inertiajs/inertia-vue3';
import { InertiaProgress } from '@inertiajs/progress';

const appName = window.document.getElementsByTagName('title')[0]?.innerText || 'Laravel';
window.createInertiaApp=createInertiaApp
window.createApp=createApp
window.h=h
window.globalComponentRegistrations = window.globalComponentRegistrations || [ 2 ]



window.createInertiaApp({
    title: (title) => `${title} - ${appName}`,
    resolve: (name) => require(`./Pages/${name}.vue`),
    setup({ el, app: InertiaApp, props, plugin }) {
        const app = window.createApp({ render: () => window.h(InertiaApp, props) })
            .use(plugin)
            .mixin({ methods: { route } })

        const { VButton, Greeter } = window.MyLib
        app.component('v-button', VButton)
        app.component('v-greeter', Greeter)

        return app.mount(el)
    },
});

InertiaProgress.init({ color: '#4B5563' });
