export default {
  widgets: [
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '5ed18e4887e8c702603a8823',
                  title: 'Sanity Studio',
                  name: 'sanity-kitchen-sink-studio-q2bjzngn',
                  apiId: '91f26683-6df9-4efd-90c5-a067dbdf4c60'
                },
                {
                  buildHookId: '5ed18e487668340214c1dee7',
                  title: 'Blog Website',
                  name: 'sanity-kitchen-sink-web-ffrkware',
                  apiId: '6423c868-5ee4-4f65-8dc6-ce570794af81'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/javakian/sanity-kitchen-sink',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-kitchen-sink-web-ffrkware.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}
