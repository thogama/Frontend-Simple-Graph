import { defineNuxtConfig } from 'nuxt/config'
// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
    link:[{
        rel:"icon",type:"image/x-icon",href:"/favicon.ico"
    }],

    ssr: false,
    css: [

        "@fortawesome/fontawesome-svg-core/styles.css",
        "~~/sass/main.scss"
    ],




})