import { defineConfig } from 'vitepress';

// refer https://vitepress.dev/reference/site-config for details
export default defineConfig({
  lang: 'en-US',
  title: 'VitePress',
  description: 'Vite & Vue powered static site generator.',

  themeConfig: {
    nav: [
      { text: 'Introducao', link: '/1_introducao' },
      { text: 'Descricao', link: '/2_descricao_projeto' },

      // {
      //   text: 'Dropdown Menu',
      //   items: [
      //     { text: 'Item A', link: '/item-1' },
      //     { text: 'Item B', link: '/item-2' },
      //     { text: 'Item C', link: '/item-3' },
      //   ],
      // },

      // ...
    ],

    sidebar: [
      {
        // text: 'Guide',
        items: [
          { text: 'Introducao', link: '/1_indroducao' },
          { text: 'Descricao', link: '/2_descricao_projeto' },
          { text: 'Example', link: '/example' },
          { text: 'Example', link: '/example' },
          { text: 'Example', link: '/example' },
          // ...
        ],
      },
    ],
  },
});
