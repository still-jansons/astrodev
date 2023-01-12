// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    modules: [
        '@nuxtjs/tailwindcss',
        '@nuxt/image-edge'
    ],
    app: {
        head: {
            title: 'AstroDev',
            meta: [
                { name: 'description', content: 'Astronaut Development' }
            ],
        }
    },
    css: [
        '@/assets/styles/main.scss'
    ]
})
