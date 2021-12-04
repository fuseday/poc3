require('./bootstrap');

import { createApp, h } from 'vue';
import { createInertiaApp } from '@inertiajs/inertia-vue3';
import { InertiaProgress } from '@inertiajs/progress';

const appName = window.document.getElementsByTagName('title')[0]?.innerText || 'Laravel';
window.createInertiaApp=createInertiaApp
window.createApp=createApp
window.h=h


window.createInertiaApp({
    title: (title) => `${title} - ${appName}`,
    resolve: (name) => require(`./Pages/${name}.vue`),
    setup({ el, app, props, plugin }) {
        const vueApp = window.createApp({ render: () => window.h(app, props) })
            .use(plugin)
            .mixin({ methods: { route } })
            .mount(el)

        // vueApp.config.globalProperties.window = window

        return vueApp
    },
});

InertiaProgress.init({ color: '#4B5563' });
