function texto(id, texto) {
  document.getElementById(id).innerHTML = texto
}

texto('titulo', 'Baleias')

texto('frase-inicial', 'As baleias mais lindas do mundo.')

texto('titulo-especies', 'Algumas Espécies:')

texto('animal1', 'Baleia jubarte')

texto('animal2', 'Baleia azul')

texto('animal3', 'Baleia orca')

texto('animal4', 'Baleia franca-austral')

texto(
  'sobre-a-especie',
  'O termo baleia é usado para referir-se, preferencialmente, aos animais da subordem Mysticeti, masalguns autores utilizam o termo também em referência a grandes mamíferos da subordem Odontoceti. Na subordem Mysticeti, temos o que chamamos de baleias-verdadeiras ou baleias-de-barbatana. Já na Odontoceti, temos os golfinhos e o quechamamos de baleias com dentes. Dentre as baleias-de-barbatana, destaca-se a baleia-azul, o maior animal que existe em nosso planeta. Já entre as baleias com dentes, temos o cachalote. É importante frisar que alguns autores não consideram indivíduos da subordem Odontoceti como baleias'
)

function imgSrc(imgid, source) {
  document.getElementById(imgid).src = source
}

imgSrc('imagem1', 'img/baleia-jubarte.jpg')
imgSrc('imagem2', 'img/baleia-azul.jpg')
imgSrc('imagem3', 'img/orca.jpg')
imgSrc('imagem4', 'img/baleia-franca-austral.jpg')
