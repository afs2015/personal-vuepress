export default ({ Vue, router, isServer }) => {
  if (isServer) return

  router.afterEach(() => {
    Vue.nextTick(() => {
      document.querySelectorAll('.footer').forEach(el => {
        el.textContent = el.textContent.replace(/©\s*\d{4}/, `© ${new Date().getFullYear()}`)
      })
    })
  })
}
