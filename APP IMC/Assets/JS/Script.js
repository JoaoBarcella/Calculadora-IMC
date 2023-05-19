

function EscopoFunção(Valor) {

const Form = document.querySelector('#Form')
const BoxResult = document.querySelector('#Box-Resultado')
const ResultadoTxt = document.querySelector('#Resultado')

function DadosApp(EventButton) {
  EventButton.preventDefault()
  const Peso = Form.querySelector('#Peso').value
  const Altura = Form.querySelector('#Altura').value
  const Calculo = Peso / Altura ** Altura
  
 console.log(Calculo);

  function Resultado(Mensagem) {
    const ResultadoBox = document.querySelector('#Resultado')
    ResultadoBox.innerHTML = ''
    const p = document.createElement('p')
    p.innerHTML = ``
     
    //Texto Dos Resultados
    if (Calculo < 18.5) {
      p.innerHTML = `Você Está Abaixo do Peso, Imc:${Calculo.toFixed(1)}`
      BoxResult.style.background = "#50b41b";
    }else if (Calculo > 18.5 && Calculo <= 24.9) {
      p.innerHTML = `Você Está Com Peso Normal, Imc:${Calculo.toFixed(1)}`
      BoxResult.style.background = "#50b41b";
    }else if (Calculo > 24.9 && Calculo <= 29.9) {
      p.innerHTML = `Você Está com sobrepeso, Imc:${Calculo.toFixed(1)}`
      BoxResult.style.background = "#50b41b";
    }else if (Calculo > 29.9 && Calculo <=34.9) {
      p.innerHTML = `Você Está com Obesidade Grau1, Imc:${Calculo.toFixed(1)}`
      BoxResult.style.background = "#50b41b";
    }else if (Calculo > 34.9 && Calculo <=39.9) {
      p.innerHTML = `Você Está com Obesidade Grau2, Imc:${Calculo.toFixed(1)}`
      BoxResult.style.background = "#50b41b";
    }else if (Calculo > 40) {
      p.innerHTML = `Você Está com Obesidade Grau3, Imc:${Calculo.toFixed(1)}`
      BoxResult.style.background = "#50b41b";
    }else{
      BoxResult.style.background = "Red";
      ResultadoTxt.style.color = "White"
      p.innerHTML = `Por Favor, Insira Um Valor Valido!!`
    }
      ResultadoBox.appendChild(p)
  }
  Resultado()
}
Form.addEventListener(
  'submit', DadosApp
);
}
EscopoFunção();
