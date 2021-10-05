function calcularNota() {
    var nota1 = parseInt(document.getElementById("nota1").value);
    var nota2 = parseInt(document.getElementById("nota2").value);
    var nota3 = parseInt(document.getElementById("nota3").value);
    var nota4 = parseInt(document.getElementById("nota4").value);
    var Resultado = document.getElementById("resultado");
    Resultado.innerHTML = "";
  
    var resultado = ((nota1 + nota2 + nota3 + nota4) / 4).toFixed(1);
  
    //if e else são estruturas condicionais para tomada de decisão.
    //se o valor dentro dos parênteses for verificado e estiver correto conforme a definição ou comparação, será executada a função determinada dentro das {chaves}
  
    if (resultado >= 6) {
      Resultado.innerHTML =
        "Aprovado! Você poderá curtir suas férias pois sua média foi: " +
        resultado;
      document.getElementById("resultado").style.color = "#1e2b5b";
    } else {
      Resultado.innerHTML =
        "Ops... você foi reprovado então não poderá curtir suas férias ainda pois sua média anual foi: " +
        resultado;
      document.getElementById("resultado").style.color = "#B40404";
    }
  }
  
  function limparNota() {
    document.getElementById("nota1").value = "";
    document.getElementById("nota2").value = "";
    document.getElementById("nota3").value = "";
    document.getElementById("nota4").value = "";
  }
  
  // O comando console.log ira escrever no terminal tudo que estiver entre as aspas dentro dos parêntes.
  console.log("A nota do primeiro bimestre foi " + nota1);
  console.log("Sua média anual é de  " + resultado);
  
  