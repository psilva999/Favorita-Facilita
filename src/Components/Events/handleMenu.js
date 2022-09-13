export function handleMenu() {
  const toggleMenu = document.querySelector(".toggle-menu"),
        menu = document.querySelector('.menu'),

        line1 = document.querySelector(".toggle-menu div:nth-child(1)"),
        line3 = document.querySelector(".toggle-menu div:nth-child(3)")

  let tempo = 3

  if (menu.classList.contains('active')) {
    let retiraMenu = setInterval(displayNoneMenu, 100)

    function displayNoneMenu() {
      tempo--
      menu.style.animation = 'hide-menu .3s linear forwards'
      line1.style.animation = 'show-lines .2s linear forwards'
      line3.style.animation = 'show-lines .2s linear forwards'

      if (tempo === 0) {
        menu.classList.remove("active")
        toggleMenu.classList.remove("closed")

        menu.style.animation = 'none'
        clearInterval(retiraMenu)
      }
    }
  }

  else {
    menu.classList.add("active")
    toggleMenu.classList.add("closed")

    line1.style.animation = 'hide-lines .2s linear forwards'
    line3.style.animation = 'hide-lines .2s linear forwards'

    menu.style.animation = 'show-menu .3s linear forwards'
  }
}

export function closeMenuFromOutside(e) {
  const menu = document.querySelector('.menu'),
        toggleMenu = document.querySelector(".toggle-menu"),

        line1 = document.querySelector(".toggle-menu div:nth-child(1)"),
        line3 = document.querySelector(".toggle-menu div:nth-child(3)")

  if (window.matchMedia("(max-width:1088px)").matches && menu.classList.contains("active")) {
    let tempo = 3

    if (e.target.id !== 'toggle-menu' && e.target.id !== 'line' && e.target.id !== 'menu') {
      menu.style.animation = 'hide-menu .3s forwards'
      
      line1.style.animation = 'show-lines .2s linear forwards'
      line3.style.animation = 'show-lines .2s linear forwards'

      let retiraMenu = setInterval(timeMenu, 100)
      function timeMenu() {
        tempo--

        if (tempo === 0) {
          menu.classList.remove('active')
          toggleMenu.classList.remove('closed')

          clearInterval(retiraMenu)
        }

      }
    }

  }
}

export function resizeWindow() {
  const toggleMenu = document.querySelector(".toggle-menu"),
        menu = document.querySelector(".menu"),

        line1 = document.querySelector(".toggle-menu div:nth-child(1)"),
        line3 = document.querySelector(".toggle-menu div:nth-child(3)")

  if (window.matchMedia("(min-width:1088px)").matches) {
    menu.classList.remove("active")
    toggleMenu.classList.remove('closed')

    line1.style.animation = 'none'
    line3.style.animation = 'none'

    menu.style.animation = 'none'
  }
}
