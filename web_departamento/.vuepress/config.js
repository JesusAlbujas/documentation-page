const { config } = require("vuepress-theme-hope");

module.exports = config({
  title: "Informática y Comunicaciones",
  description: "CIFP Virgen de Gracia",

  dest: "./dist",

  head: [
    [
      "script",
      { src: "https://cdn.jsdelivr.net/npm/react/umd/react.production.min.js" },
    ],
    [
      "script",
      {
        src:
          "https://cdn.jsdelivr.net/npm/react-dom/umd/react-dom.production.min.js",
      },
    ],
    ["script", { src: "https://cdn.jsdelivr.net/npm/vue/dist/vue.min.js" }],
    [
      "script",
      { src: "https://cdn.jsdelivr.net/npm/@babel/standalone/babel.min.js" },
    ],
  ],

  themeConfig: {
    logo: "/assets/icon/logo03.png",
    hostname: "https://vuepress-theme-hope-demo.mrhope.site",

    author: "Informática y Comunicaciones",
    //repo: "https://github.com/vuepress-theme-hope/vuepress-theme-hope",

    nav: [
      { text: "Home", link: "/", icon: "home" },
      { 
        text: "Formación profesional", 
        icon: "study", 
        items: [
          {
            text: "FP reglada", 
            link: "/fp_reglada/",
            items: [
              {
                text: "Técnico en Sistemas Microinformáticos y Redes",
                link: "/fp_reglada/smr/"
              },
              {
                text: "Técnico Superior en Administración de Sistemas Informáticos en Red",
                link: "/fp_reglada/asir/"
              },
              {
                text: "Técnico Superior en Desarrollo de Aplicaciones Web",
                link: "/fp_reglada/daw/"
              },
              {
                text: "Técnico Superior en Desarrollo de Aplicaciones Multiplataforma",
                link: "/fp_reglada/dam/"
              },
              {
                text: "Técnico Superior en Administración de Sistemas Informáticos en Red (e-Learning)",
                link: "/fp_reglada/asir-e/"
              },
            ]
          },
          {text: "Especialización en FP",
          link: "/fp_especializacion/",
          items: [
            {text: "Ciberseguridad", link: "/fp_especializacion/ciberseguridad/"},
          ]
        },
          {text: "FP para el empleo", 
          link: "/fp_empleo/",
          items: [
            {text: "IFCD0110-Confección y Publicación de Páginas Web", link: "/fp_empleo/pag_web/"}
          ]
          }
        ]
      },
      {
        text: "Proyectos",
        icon: "creative",
        items: [
          {text: "DAM2", link: "/proyectos/dam2/", icon: "folder"},
          {text: "Coworking-DAW2", link: "/proyectos/daw2/", icon: "folder"},
          {text: "Departamento", link: "/proyectos/departamento/", icon: "folder"},

        ]
      },
      {
        text: "Tecnologías",
        icon: "animation",
        link: "/tecnologias/"
      },
      {
        text: "Miembros",
        icon: "group",
        link: "/members/",
      },
      {
        text: "Contacto",
        icon: "community",
        link: "mailto:informatica@cifpvirgendegracia.com",
      },
    ],

    sidebar: {
      "/fp_reglada/": [
        {
          title: "Formación profesional reglada",
          icon: "read",
          prefix: "/fp_reglada/",
          children: ["smr", "asir", "daw", "dam", "asir-e"],
        },
      ],
      "/fp_especializacion/": [
        {
          title: "Especialización en Formación profesional",
          icon: "read",
          prefix: "/fp_especializacion/",
          children: ["ciberseguridad"],
        },
      ],
      "/fp_empleo/": [
        {
          title: "Formación profesional para el empleo",
          icon: "read",
          prefix: "/fp_empleo/",
          children: ["pag_web"],
        },
      ],
      "/proyectos/": [
        {
          title: "Proyectos",
          icon: "creative",
          prefix: "/proyectos/",
          children: ["dam2", "daw2", "departamento"]
        }
      ],
    },

    blog: {
      intro: "/intro/",
      name: "Informática",
      avatar: "/assets/icon/logoCortado.jpeg",
      sidebarDisplay: "mobile",
      links: {
        Github: "https://github.com/CIFP-Virgen-de-Gracia",
      },
    },

    footer: {
      display: true,
      content: "Departamento de Informática y Comunicaciones.",
    },

    comment: {
      type: "valine",
      appId: "2vSLKb0SqFKKWEgrOPGy3sp1-gzGzoHsz",
      appKey: "vma8Ewk61WeNkI81O3CGpT2i",
    },

    copyright: true,

    mdEnhance: {
      enableAll: true,
      presentation: {
        plugins: [
          "highlight",
          "math",
          "search",
          "notes",
          "zoom",
          "anything",
          "audio",
          "chalkboard",
        ],
      },
    },

    pwa: {
      favicon: "/favicon.ico",
      cachePic: true,
      apple: {
        icon: "/assets/icon/apple-icon-152.png",
        statusBarColor: "black",
      },
      msTile: {
        image: "/assets/icon/ms-icon-144.png",
        color: "#ffffff",
      },
      manifest: {
        icons: [
          {
            src: "/assets/icon/chrome-mask-512.png",
            sizes: "512x512",
            purpose: "maskable",
            type: "image/png",
          },
          {
            src: "/assets/icon/chrome-mask-192.png",
            sizes: "192x192",
            purpose: "maskable",
            type: "image/png",
          },
          {
            src: "/assets/icon/chrome-512.png",
            sizes: "512x512",
            type: "image/png",
          },
          {
            src: "/assets/icon/chrome-192.png",
            sizes: "192x192",
            type: "image/png",
          },
        ],
        shortcuts: [
          {
            name: "Guide",
            short_name: "Guide",
            url: "/guide/",
            icons: [
              {
                src: "/assets/icon/guide-maskable.png",
                sizes: "192x192",
                purpose: "maskable",
                type: "image/png",
              },
              {
                src: "/assets/icon/guide-monochrome.png",
                sizes: "192x192",
                purpose: "monochrome",
                type: "image/png",
              },
            ],
          },
        ],
      },
    },
  },
});
