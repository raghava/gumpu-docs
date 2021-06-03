
import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';
export default [
{
  path: '/',
  component: ComponentCreator('/','deb'),
  exact: true,
},
{
  path: '/blog',
  component: ComponentCreator('/blog','c19'),
  exact: true,
},
{
  path: '/blog/hello-world',
  component: ComponentCreator('/blog/hello-world','0d1'),
  exact: true,
},
{
  path: '/blog/hola',
  component: ComponentCreator('/blog/hola','ef7'),
  exact: true,
},
{
  path: '/blog/tags',
  component: ComponentCreator('/blog/tags','4f3'),
  exact: true,
},
{
  path: '/blog/tags/docusaurus',
  component: ComponentCreator('/blog/tags/docusaurus','aa1'),
  exact: true,
},
{
  path: '/blog/tags/facebook',
  component: ComponentCreator('/blog/tags/facebook','24f'),
  exact: true,
},
{
  path: '/blog/tags/hello',
  component: ComponentCreator('/blog/tags/hello','b80'),
  exact: true,
},
{
  path: '/blog/tags/hola',
  component: ComponentCreator('/blog/tags/hola','1b4'),
  exact: true,
},
{
  path: '/blog/welcome',
  component: ComponentCreator('/blog/welcome','cc0'),
  exact: true,
},
{
  path: '/markdown-page',
  component: ComponentCreator('/markdown-page','be1'),
  exact: true,
},
{
  path: '/docs',
  component: ComponentCreator('/docs','23d'),
  
  routes: [
{
  path: '/docs/intro',
  component: ComponentCreator('/docs/intro','e84'),
  exact: true,
},
{
  path: '/docs/tutorial-basics/complete-account-profile',
  component: ComponentCreator('/docs/tutorial-basics/complete-account-profile','b8e'),
  exact: true,
},
{
  path: '/docs/tutorial-basics/congratulations',
  component: ComponentCreator('/docs/tutorial-basics/congratulations','7ef'),
  exact: true,
},
{
  path: '/docs/tutorial-basics/create-a-blog-post',
  component: ComponentCreator('/docs/tutorial-basics/create-a-blog-post','2c8'),
  exact: true,
},
{
  path: '/docs/tutorial-basics/create-a-document',
  component: ComponentCreator('/docs/tutorial-basics/create-a-document','f0d'),
  exact: true,
},
{
  path: '/docs/tutorial-basics/create-a-organization',
  component: ComponentCreator('/docs/tutorial-basics/create-a-organization','d86'),
  exact: true,
},
{
  path: '/docs/tutorial-basics/create-an-account',
  component: ComponentCreator('/docs/tutorial-basics/create-an-account','cef'),
  exact: true,
},
{
  path: '/docs/tutorial-basics/deploy-your-site',
  component: ComponentCreator('/docs/tutorial-basics/deploy-your-site','508'),
  exact: true,
},
{
  path: '/docs/tutorial-basics/markdown-features',
  component: ComponentCreator('/docs/tutorial-basics/markdown-features','f90'),
  exact: true,
},
{
  path: '/docs/tutorial-extras/manage-docs-versions',
  component: ComponentCreator('/docs/tutorial-extras/manage-docs-versions','d64'),
  exact: true,
},
{
  path: '/docs/tutorial-extras/translate-your-site',
  component: ComponentCreator('/docs/tutorial-extras/translate-your-site','16a'),
  exact: true,
},
]
},
{
  path: '*',
  component: ComponentCreator('*')
}
];
