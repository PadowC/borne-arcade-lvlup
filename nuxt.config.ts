// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    app: {
        head: {
            charset: 'utf-8',
            viewport: 'width=device-width, initial-scale=1',
            title: "Borne d'arcade | LvlUp ESEO",

            htmlAttrs: {
                lang: 'fr'
            },

            meta: [
                {name: 'description', content: "Site Web du projet borne d'arcade"}
            ],

            link: [
                {rel: 'icon', type: 'image/jpg', href: '/logo.jpg' },
                { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Fredoka+One&family=Roboto:wght@300;400;500;700;900&display=swap'},
            ],

            script: [
                { src: "https://kit.fontawesome.com/4ca1d285a7.js", crossorigin:"anonymous"},
            ]
        }
    },

    css: [
        '~/assets/scss/main.scss'
    ],

    components: [
        {
            path: '~/components',
            pathPrefix: false,
        }
    ],

    vite: {
        css: {
            preprocessorOptions: {
                scss: {
                    additionalData: '@use "@/assets/scss/variables.scss" as *;'
                }
            }
        }
    }
})
