const tl = gsap.timeline({
  defaults: {
    duration: 1,
    ease: 'Power2.easeOut',
  },
})

const burgers = document.querySelector('.burgers')
const mainMenu = document.querySelector('.main-menu')
const mainLinks = document.querySelector('.a1')

burgers.addEventListener('click', actionNavpop)

function actionNavpop(e) {
  if (e.target.classList.contains('active')) {
    mainMenu.classList.remove('active')
    e.target.classList.remove('active')
    gsap.to('.main-menu', { opacity: 0 })
    gsap.to('.burger1', { rotate: 0, y: 0 })
    gsap.to('.burger2', { opacity: 1 })
    gsap.to('.a1', { pointerEvents: 'none' })
    gsap.to('.burgers', { padding: '0rem' })
    gsap.to('.burger3', { rotate: 0, y: 0 })
  } else {
    e.target.classList.add('active')
    mainMenu.classList.add('active')
    gsap.to('.burger1', { rotate: 45, y: 6 })
    gsap.to('.burger2', { opacity: 0 })
    gsap.to('.main-menu', { opacity: 1 })
    gsap.to('.a1', { pointerEvents: 'all' })
    gsap.to('.burgers', { padding: '3rem 0rem' })
    gsap.to('.burger3', { rotate: -45, y: -6 })
  }
}
