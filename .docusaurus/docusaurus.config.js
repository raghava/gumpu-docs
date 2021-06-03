export default {
  "title": "Gumpu Help - What can we help you with?",
  "tagline": "Help documents that every orgamization need",
  "url": "https://help.mygumpu.com",
  "baseUrl": "/",
  "onBrokenLinks": "throw",
  "onBrokenMarkdownLinks": "warn",
  "favicon": "img/favicon.ico",
  "organizationName": "facebook",
  "projectName": "docusaurus",
  "themeConfig": {
    "navbar": {
      "title": "Home",
      "logo": {
        "alt": "Gumpu Logo",
        "src": "img/logo.png"
      },
      "items": [
        {
          "type": "doc",
          "docId": "intro",
          "position": "left",
          "label": "Articles",
          "activeSidebarClassName": "navbar__link--active"
        }
      ],
      "hideOnScroll": false
    },
    "footer": {
      "style": "dark",
      "links": [
        {
          "title": "Articles",
          "items": [
            {
              "label": "Getting started",
              "to": "/docs/intro"
            }
          ]
        },
        {
          "title": "Resources",
          "items": [
            {
              "label": "MyGumpu Portal",
              "href": "https://mygumpu.com"
            },
            {
              "label": "Admin Gumpu Portal",
              "href": "https://app.mygumpu.com"
            }
          ]
        },
        {
          "title": "More",
          "items": [
            {
              "label": "Blog",
              "to": "/blog"
            },
            {
              "label": "GitHub",
              "href": "https://github.com/facebook/docusaurus"
            }
          ]
        }
      ],
      "copyright": "Copyright © 2021 - MyGumpu, a product of Inqude Solutions."
    },
    "colorMode": {
      "defaultMode": "light",
      "disableSwitch": false,
      "respectPrefersColorScheme": false,
      "switchConfig": {
        "darkIcon": "🌜",
        "darkIconStyle": {},
        "lightIcon": "🌞",
        "lightIconStyle": {}
      }
    },
    "docs": {
      "versionPersistence": "localStorage"
    },
    "metadatas": [],
    "prism": {
      "additionalLanguages": []
    },
    "hideableSidebar": false
  },
  "presets": [
    [
      "@docusaurus/preset-classic",
      {
        "docs": {
          "sidebarPath": "/Users/raghavachinnappa/Documents/dev/gumpu-docs/sidebars.js",
          "editUrl": "https://github.com/facebook/docusaurus/edit/master/website/"
        },
        "blog": {
          "showReadingTime": true,
          "editUrl": "https://github.com/facebook/docusaurus/edit/master/website/blog/"
        },
        "theme": {
          "customCss": "/Users/raghavachinnappa/Documents/dev/gumpu-docs/src/css/custom.css"
        }
      }
    ]
  ],
  "baseUrlIssueBanner": true,
  "i18n": {
    "defaultLocale": "en",
    "locales": [
      "en"
    ],
    "localeConfigs": {}
  },
  "onDuplicateRoutes": "warn",
  "customFields": {},
  "plugins": [],
  "themes": [],
  "titleDelimiter": "|",
  "noIndex": false
};