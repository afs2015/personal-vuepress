module.exports = {
  description: 'Swing dance instructor, performer, and DJ based in Boston, Massachusetts.',
  head: [
    ['link', { rel: 'icon', href: '/favicon.ico' }],
    ['script', { type: 'application/ld+json' }, JSON.stringify({
      '@context': 'https://schema.org',
      '@type': 'Person',
      name: 'Andrew Selzer',
      url: 'https://www.andrewselzer.com/',
      image: 'https://www.andrewselzer.com/hero.jpg',
      jobTitle: ['Swing Dance Instructor', 'Performer', 'DJ'],
      description: 'Swing dance instructor, performer, and DJ based in Boston, Massachusetts.',
      telephone: '+1-949-463-6069',
      address: {
        '@type': 'PostalAddress',
        addressLocality: 'Boston',
        addressRegion: 'MA',
        addressCountry: 'US'
      },
      worksFor: {
        '@type': 'Organization',
        name: 'Boston Lindy Hop',
        url: 'https://bostonlindyhop.com'
      }
    })]
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
