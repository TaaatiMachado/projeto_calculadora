//objeto calculadora
            let calculadora = {};
            calculadora.display = document.querySelector("#display");

            let botao1 = document.querySelector("#num1");
            let botao2 = document.querySelector("#num2");
            let botao3 = document.querySelector("#num3");
            let botao4 = document.querySelector("#num4");
            let botao5 = document.querySelector("#num5");
            let botao6 = document.querySelector("#num6");
            let botao7 = document.querySelector("#num7");
            let botao8 = document.querySelector("#num8");
            let botao9 = document.querySelector("#num9");
            let botao0 = document.querySelector("#num0");
            let botaoSoma = document.querySelector("#soma");
            let botaoSub = document.querySelector("#sub");
            let botaoDivs = document.querySelector("#divs");
            let botaoMulti = document.querySelector("#multi");
            let botaoIgual = document.querySelector("#igual");
            let botaoClear = document.querySelector("#clear");


            let acumulador = "";
            
            botao1.onclick = function() {
                calculadora.display.innerText += 1;
            }

            botao2.onclick = function() {
                calculadora.display.innerText += 2;
            }

            botao3.onclick = function() {
                calculadora.display.innerText += 3;
            }

            botao4.onclick = function() {
                calculadora.display.innerText += 4;
            }

            botao5.onclick = function() {
                calculadora.display.innerText += 5;
            }

            botao6.onclick = function() {
                calculadora.display.innerText += 6;
            }

            botao7.onclick = function() {
                calculadora.display.innerText += 7;
            }

            botao8.onclick = function() {
                calculadora.display.innerText += 8;
            }

            botao9.onclick = function() {
                calculadora.display.innerText += 9;
            }

            botao0.onclick = function() {
                calculadora.display.innerText += 0;
            }


            botaoSoma.onclick = function() {
                acumulador += calculadora.display.innerText;
                acumulador += " + ";
                calculadora.display.innerText = "";
            }
            
            
            botaoSub.onclick = function() {
                acumulador += calculadora.display.innerText;
                acumulador += " - ";
                calculadora.display.innerText = "";
            }

            botaoDivs.onclick = function() {
                acumulador += calculadora.display.innerText;
                acumulador += " / ";
                calculadora.display.innerText = "";
            }

            botaoMulti.onclick = function() {
                acumulador += calculadora.display.innerText;
                acumulador += " * ";
                calculadora.display.innerText = "";
            }

            botaoIgual.onclick = function() {
                //TODO: checar se existe conteúdo dentro do display

                //colocando conteúdo do display no acumulador
                acumulador += calculadora.display.innerText;
                //resolvendo conta (conteúdo acumulador)
                let resultado = eval(acumulador);
                //colocando no display o conteúdo do acumulador
                calculadora.display.innerText = resultado;
                // limpando o acumulador
                acumulador = "";

            }

            botaoClear.onclick= function() {
                acumulador = ""
                calculadora.display.innerText = "";
            }
