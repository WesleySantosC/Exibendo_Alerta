let botao = document.querySelector("button");

botao.addEventListener("click", function() {
  if(botao) {
    alert('Você clicou no botão!');
  } else {
    alert('Houve um erro!');
  }
});
