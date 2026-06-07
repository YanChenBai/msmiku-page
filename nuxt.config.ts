import tailwindcss from '@tailwindcss/vite';

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  css: ['~/assets/css/tailwind.css'],
  modules: ['@nuxt/fonts', 'shadcn-nuxt'],
  vite: { plugins: [tailwindcss()] },
  fonts: {
    families: [
      {
        name: 'MiSans',
        src: 'https://assets.viyuni.top/fonts/MiSans-Regular.woff2',
        weight: '400',
      },
      { name: 'MiSans', src: 'https://assets.viyuni.top/fonts/MiSans-Normal.woff2', weight: '450' },
      { name: 'MiSans', src: 'https://assets.viyuni.top/fonts/MiSans-Medium.woff2', weight: '500' },
      {
        name: 'MiSans',
        src: 'https://assets.viyuni.top/fonts/MiSans-Semibold.woff2',
        weight: '600',
      },
      {
        name: 'MiSans',
        src: 'https://assets.viyuni.top/fonts/MiSans-Demibold.woff2',
        weight: '650',
      },
      { name: 'MiSans', src: 'https://assets.viyuni.top/fonts/MiSans-Bold.woff2', weight: '700' },
      { name: 'MiSans', src: 'https://assets.viyuni.top/fonts/MiSans-Heavy.woff2', weight: '900' },
      { name: 'Noto Sans SC', provider: 'google', weights: [400, 500, 600, 700] },
    ],
  },
  shadcn: {
    /**
     * Prefix for all the imported component.
     * @default "Ui"
     */
    prefix: '',
    /**
     * Directory that the component lives in.
     * Will respect the Nuxt aliases.
     * @link https://nuxt.com/docs/api/nuxt-config#alias
     * @default "@/components/ui"
     */
    componentDir: '@/components/ui',
  },
  nitro: {
    preset: 'static',
  },
});
