import install from '@/config/install.json'

export default (to, from, next) => {
  if (install.INSTALL) {
    next()
  }
  else {
    next('/signin')
  }
}
