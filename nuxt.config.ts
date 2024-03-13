// https://nuxt.com/docs/api/configuration/nuxt-config

export default defineNuxtConfig({
    devtools: { enabled: process.env.DEV_TOOLS || true },
    // css单独文件引用，不使用内联
    experimental: {
        inlineSSRStyles: false,
    },
    modules: ['@element-plus/nuxt', 'dayjs-nuxt'],
    css: [
        '@/assets/css/main.css',
        'element-plus/dist/index.css',
        'element-plus/theme-chalk/display.css'
    ],
    vite: {
        css: {
            preprocessorOptions: {
                scss: {
                    additionalData: '@import "assets/scss/var.scss";',
                }
            }
        }
    },
    app: {
            head: {
                viewport: 'width=device-width, initial-scale=1.0, minimum-scale=1.0, maximum-scale=1.0, user-scalable=no',
                title: '聊软影视CMS-最全最新免费电影电视剧网站',
                meta: [
                    { name: 'keywords', content: '聊软影视,最新电影，最新电视剧' },
                    { name: 'description', content: '聊软影视更新最快的影视网站之一，收集了全网最新高分电影,电视剧,综艺,动漫等热播剧目免费在线观看！' }
                ],
                link: [
                    { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
                ]
            }
    },
    runtimeConfig: {
        public: {
            apiBase: '/api',
            globalTitle: '聊软影视'
        }
    },
    nitro: {
        devProxy: {
            '/server': {
                target: 'http://localhost:4000',
                changeOrigin: true
            },
            '/external': {
                target: 'http://cms.yinchunyu.com/external',
                changeOrigin: true
            }
        },
        // 该配置用于服务端请求转发
        routeRules: {
            '/api/**': {
                proxy: 'http://localhost:4000' + '/api/**'
            }
        }
    }
})
