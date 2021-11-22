let apresentacaoPessoal = document.getElementById('apresentacao')
apresentacaoPessoal.innerHTML =
  'Oi, me chamo Talita Duarte, tenho 38 anos, sou baiana, natural de Itabun/BA, esposa, mãe e com espírito inquieto.'

const generomusica = document.querySelector('#genero-musica')
generomusica.innerHTML = 'Gênero: R&B/Soul, Pop'

const listamusica = document.querySelector('#lista-musica')

const musica1 = document.createElement('li')
const linkMusica1 = document.createElement('a')
linkMusica1.innerText = 'Trevo'
linkMusica1.setAttribute('href', 'https://www.youtube.com/watch?v=F1yNwxLW1Cw')
linkMusica1.setAttribute('target', '_blank')
musica1.appendChild(linkMusica1)

const musica2 = document.createElement('li')
const linkMusica2 = document.createElement('a')
linkMusica2.innerText = 'Porque Eu Te Amo'
linkMusica2.setAttribute('href', 'https://www.youtube.com/watch?v=dRofHCEMNEs')
linkMusica2.setAttribute('target', '_blank')
musica2.appendChild(linkMusica2)

const musica3 = document.createElement('li')
const linkMusica3 = document.createElement('a')
linkMusica3.innerText = 'Pupila'
linkMusica3.setAttribute('href', 'https://www.youtube.com/watch?v=9Sk7RQtSl5g')
linkMusica3.setAttribute('target', '_blank')
musica3.appendChild(linkMusica3)

listamusica.appendChild(musica1)
listamusica.appendChild(musica2)
listamusica.appendChild(musica3)

const foto1 = document.querySelector('#foto1')
foto1.setAttribute('src', 'img/anavitoria1.jpg')
foto1.style.width = '225px'
foto1.style.height = '225px'

const foto2 = document.querySelector('#foto2')
foto2.setAttribute('src', 'img/anavitoria2.jpg')
foto2.style.width = '225px'
foto2.style.height = '225px'

const foto3 = document.querySelector('#foto3')
foto3.setAttribute('src', 'img/anavitoria3.jpg')
foto3.style.width = '225px'
foto3.style.height = '225px'

const foto4 = document.querySelector('#foto4')
foto4.setAttribute('src', 'img/anavitoria4.jpg')
foto4.style.width = '225px'
foto4.style.height = '225px'
