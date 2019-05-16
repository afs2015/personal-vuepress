module.exports = {
  description: 'Swing dance instructor, performer, and DJ based in Boston, Massachusetts.',
  head: [
    ['meta', { property: 'og:image', content: 'https://www.andrewselzer.com/hero.jpg' }],
    ['meta', { property: 'og:title', content: 'Andrew Selzer' }],  
    ['meta', { property: 'og:url', content: 'https://www.andrewselzer.com/' }],
  ],
  title: 'Andrew Selzer',
  themeConfig: {
    sidebar: 'auto',
    nav: [
      { text: 'Home', link: '/' },
      { text: 'About', link: '/about.html' },
      { text: 'Contact', link: '/contact.html' },
      { text: 'Lessons', link: '/lessons.html' },
      { text: 'Media', link: '/media.html'}
    ]
  },
  serviceWorker: true,
}
