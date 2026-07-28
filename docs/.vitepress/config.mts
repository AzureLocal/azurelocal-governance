import { defineConfig } from 'vitepress'

export default defineConfig({
  ignoreDeadLinks: true,
  base: '/azurelocal-governance/',
  title: "Governance on Azure Local",
  description: "Governed centrally by HCS Platform Engineering standards",
  themeConfig: {
    nav: [{"link":"/","text":"Home"},{"link":"/getting-started","text":"Getting Started"},{"link":"/roadmap","text":"Roadmap"},{"link":"/contributing","text":"Contributing"}],
    sidebar: [{"link":"/","text":"Home"},{"link":"/getting-started","text":"Getting Started"},{"link":"/roadmap","text":"Roadmap"},{"link":"/contributing","text":"Contributing"}],
    socialLinks: [
      { icon: 'github', link: 'https://github.com/AzureLocal/azurelocal-governance' }
    ],
    footer: {
      message: 'Released under the MIT License.',
      copyright: 'Copyright © Hybrid Cloud Solutions & AzureLocal'
    }
  }
})




