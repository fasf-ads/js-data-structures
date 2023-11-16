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
Roteiro

08:00 as 08:15 - Introdução as tecnologias(JavaScript, Node, Grunt, Phantomjs, Jasmine).

08:15 as 08:45 - Apresentação da dinâmica, do problema e discursão sobre formas de implementação (Planing).

08:45 as 08:50 - Preparando para começar.

08:50 as 09:40 - RandoriKata(1).

09:40 as 09:50 - Discursão(Estamos no caminho certo?).

09:50 as 10:40 - RandoriKata(2).

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
Problema proposto
Regras do jogo de xadrez  [Reparem que eu disse REGRAS (Por hora não nos preocuparemos com interface ou forma de comunicação muiltiplayes etc.)]


 - Setup do Taboleiro (quantidade de lugares, 8 x 8)

 - Pecas devem ter possíveis lugares iniciais

 - Setup inicial das pecas:

	32 peças
		
		16 peças pretas  
		  - 8 piões
		  - 2 bispos
		  - 2 torres
		  - 2 cavalos
		  - 1 rei
		  - 1 rainha		

		16 peças brancas  
		  - 8 piões
		  - 2 bispos
		  - 2 torres
		  - 2 cavalos
		  - 1 rei
		  - 1 rainha
		
	
 - Peças posicionadas corretamente inicia jogo

 - Seleção de quem começa.

 - Movimentos de peças.

	Movimentos do peão
		
		Quantidade de casas (1 / primeira jogada 2)
		
		Movimento(Reto / não permite retorno) 

		Captura(Diagonal)	

	Movimentos do Bispo
		
		Quantidade de casas (Relativo)
		
		Movimento(Diagonal)

		Captura(Diagonal)	

	Movimentos do Cavalo
		
		Quantidade de casas (3)
		
		Movimento(Em L)

		Captura(Em L (Ultima casa))	

	Movimentos do Rainha
		
		Quantidade de casas (Relativo)
		
		Movimento(Livre)

		Captura(Livre)

	Movimentos do Torre
		
		Quantidade de casas (Relativo)
		
		Movimento(Reto)

		Captura(Reto)	
	
	Movimentos do Rei
		
		Quantidade de casas (1)
		
		Movimento(Livre)

		Captura(Livre)	


 - Movimentos possíveis, no momento.

	Caso em cheque.
	
	Caso com bloqueio.
	
	Caso vá para cair em cheque...
  

 - Movimentos especiais.

	Promoção do Peao
	
	Roque
	
	En Passant
	

 - Apos jogada única, finaliza rodada.

 - Fim de Jogo
	
	Vitoria do jogador

	Empate

	Abandono	
 
