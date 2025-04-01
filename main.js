document.getElementById("formNumeros").addEventListener("submit", function(evento) {
    evento.preventDefault();

    const a = Number(document.getElementById("campoA").value);
    const b = Number(document.getElementById("campoB").value);
    const mensagem = document.getElementById("mensagem");

    if (b > a) {
      mensagem.textContent = "B é maior que A";
      mensagem.style.color = "green";
    } 
    else if (a==b){
      mensagem.textContent = "A é igual a B";
      mensagem.style.color = "blue";
    }
    else {
      mensagem.textContent = "A é maior que B";
      mensagem.style.color = "red";
    }
  });