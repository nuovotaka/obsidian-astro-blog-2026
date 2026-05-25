// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import starlightObsidian, { obsidianSidebarEntries } from 'starlight-obsidian'

// https://astro.build/config
export default defineConfig({
	integrations: [
		starlight({
			plugins: [
        // Generate the Obsidian vault pages.
        starlightObsidian({
          vault: './vault/public',
        }),
      ],
			title: 'NUOVOTAKA',
			// head にアドセンスの script タグを追加
      head: [
        {
          tag: 'script',
          attrs: {
            async: true,
            src: 'https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-2390425539078205', // 自身のクライアントIDに置き換え
            crossorigin: 'anonymous',
          },
        },
      ],
			// social: [{ icon: 'github', label: 'GitHub', href: 'https://github.com/withastro/starlight' }],
			// sidebar: [
			// 	{
			// 		label: 'Guides',
			// 		items: [
			// 			// Each item here is one entry in the navigation menu.
			// 			{ label: 'Example Guide', slug: 'guides/example' },
			// 		],
			// 	},
			// 	{
			// 		label: 'Reference',
			// 		items: [{ autogenerate: { directory: 'reference' } }],
			// 	},
			// ],
		}),
	],
});
