# Roteiro

00:00 as 00:15 - Introdução as tecnologias(JavaScript).

00:15 as 00:45 - Apresentação da dinâmica, do problema e discursão sobre formas de implementação (Planing).

00:45 as 00:50 - Preparando para começar.

00:50 as 01:40 - RandoriKata(1).

01:40 as 01:50 - Discursão(Estamos no caminho certo?).

01:50 as 02:40 - RandoriKata(2).


.....
  - RandoriKata(n).
======
Regras

0 - Não existem estágios nem estudantes todos somos lideres.

1 - Cada par terá 5 minutos de timebox para desenvolver.

2 - No final da timebox, o piloto volta para a platéia, o co-piloto se torna um piloto e uma pessoa da platéia se torna co-piloto.

3- Usaremos um celular para marcar o tempo.

4 - Começar do zero (ou quase só o ambiente já esta configurado).

5 - Usar TDD e BabySteps(O passo seguinte deve sempre ser tão pequena quanto possível. SIM isso mesmo)

6 - Só se escreve código se existe teste falhando.

7 - Todos os presentes acompanham o que está acontecendo, e fazer sugestões.

8 - O piloto deve explicar o que esta sendo feito para todos os ouvintes.

9 - O público deve dar conselhos / sugerir refatorações principalmente em uma momento específico intervalo entre pilotos). A qualquer momento o par no teclado pode pedir para não ser interrompido.



======
Objetivos

Praticar JS, TDD, Refactory, Pair Programing e trabalho em equipe (O problema e só um desafio o objetivo final não e resolve-lo embora isso seja bakana).
======


## Desafio
Este Kata trata da implementação de um jogo de tênis simples.

O sistema de pontuação é bastante simples:

Cada jogador pode ter qualquer um destes pontos em um jogo “amor” “15” “30” “40”
Se você tiver 40 e ganhar o ponto, você ganha o jogo, porém existem regras especiais.
Se ambos tiverem 40 os jogadores são “Vantagem”.
Se o jogo for em Vantagem, o vencedor de um ponto terá vantagem
Se o jogador com vantagem ganhar a bola ele ganha o jogo
Se o jogador sem vantagem vencer, ele estará de volta ao empate.




Um jogo é vencido pelo primeiro jogador que tiver conquistado pelo menos quatro pontos no total e pelo menos dois pontos a mais que o adversário.
A pontuação de cada jogo é descrita de uma maneira peculiar ao tênis: pontuações de zero a três pontos são descritas como “amor”, “15”, “30” e “40”, respectivamente.
Se pelo menos três pontos tiverem sido marcados por cada jogador, e as pontuações forem iguais, a pontuação é “Vantagem”.
Se pelo menos três pontos foram marcados por cada lado e um jogador tem um ponto a mais que seu adversário, o placar do jogo é “vantagem” para o jogador que está na frente.
