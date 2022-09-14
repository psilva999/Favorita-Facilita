export function removeAll() {
  const li = document.querySelectorAll('.menu li')

  li.forEach(e => e.classList.remove('active'))
}

export function essenciais() {
  const li = document.querySelectorAll('.menu li')

  li.forEach(e => e.classList.remove('active'))

  document.querySelector(".menu li:first-child").classList.add("active")
}

export function investServicos() {
  const li = document.querySelectorAll('.menu li')

  li.forEach(e => e.classList.remove('active'))

  document.querySelector(".invest-servicos").classList.add("active")
}

export function codar() {
  const li = document.querySelectorAll('.menu li')

  li.forEach(e => e.classList.remove('active'))

  document.querySelector(".codar").classList.add("active")
}

export function galio() {
  const li = document.querySelectorAll('.menu li')

  li.forEach(e => e.classList.remove('active'))

  document.querySelector(".galio").classList.add("active")
}
