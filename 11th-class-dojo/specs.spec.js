const { Jogo } = require('./main');
describe("Jogo de tenis", function() {

    it("eu deno conseguir initir o jogo", function(){
        let meuJogo = new Jogo();
    });

    it("O jogo deve ter 2 jogadores", function(){
        let meuJogo = new Jogo();
        expect(meuJogo.jogador1).not.toBe(null);
        expect(meuJogo.jogador1).not.toBe(undefined);
    });

    it("se ambos os jogadores esto no love", function(){
        let meuJogo = new Jogo();
        expect(meuJogo.jogador1.pontuacao).toBe("amor");
        expect(meuJogo.jogador2.pontuacao).toBe("amor");
    });

    it("se a vetor pontuacao existe", function(){
        let meuJogo = new Jogo();
        let arr = ["amor", 15, 30, 40];
        expect(meuJogo.pontuacao).not.toBe(null);
        expect(meuJogo.pontuacao).not.toBe(undefined);
        expect(meuJogo.pontuacao.toString()).toBe(arr.toString());
    });

    it("quando o jogador1 fizer ponto ele passa para 15", function(){
        
        let meuJogo = new Jogo();
        let jogador1 = meuJogo.jogador1;
        expect(meuJogo.jogador1.pontuacao).toBe("amor");
        meuJogo.pontuar(jogador1)
        expect(meuJogo.jogador1.pontuacao).toBe(15);
    });
    it("quando o jogador1 fizer ponto ele passa para 30", function(){
        
        let meuJogo = new Jogo();
        let jogador1 = meuJogo.jogador1;
        meuJogo.pontuar(jogador1)
        meuJogo.pontuar(jogador1)
        expect(meuJogo.jogador1.pontuacao).toBe(30);
    });
    it("quando o jogador1 fizer ponto ele passa para 40", function(){
        let meuJogo = new Jogo();
        let jogador1 = meuJogo.jogador1;
        meuJogo.pontuar(jogador1);
        meuJogo.pontuar(jogador1);
        meuJogo.pontuar(jogador1);
        expect(meuJogo.jogador1.pontuacao).toBe(40);
    });

    it("quando o jogador1 fizer ponto ele passa para a ter uma vantagem", function(){
        let meuJogo = new Jogo();
        let jogador1 = meuJogo.jogador1;
        let jogador2 = meuJogo.jogador2;
        meuJogo.pontuar(jogador1);
        meuJogo.pontuar(jogador1);
        meuJogo.pontuar(jogador1);
        meuJogo.pontuar(jogador1);
        
        meuJogo.pontuar(jogador2);
        meuJogo.pontuar(jogador2);
        meuJogo.pontuar(jogador2);
        meuJogo.pontuar(jogador2);

        expect(jogador1.pontuacao).toBe(40);
        expect(jogador2.pontuacao).toBe(40);

        meuJogo.pontuar(jogador1)
        expect(meuJogo.jogador1.vantagem).toBe(0);
    });
    it("se jogador1 tiver vantagem e pontuar ele vence", function(){
        let meuJogo = new Jogo();
        let jogador1 = meuJogo.jogador1;
        let jogador2 = meuJogo.jogador2;
        meuJogo.pontuar(jogador1);
        meuJogo.pontuar(jogador1);
        meuJogo.pontuar(jogador1);
        meuJogo.pontuar(jogador1);
        
        meuJogo.pontuar(jogador2);
        meuJogo.pontuar(jogador2);
        meuJogo.pontuar(jogador2);
        meuJogo.pontuar(jogador2);

        expect(jogador1.pontuacao).toBe(40);
        expect(jogador2.pontuacao).toBe(40);

        meuJogo.pontuar(jogador1)
        expect(meuJogo.jogador1.vantagem).toBe(0);
        meuJogo.pontuar(jogador1)
        expect(meuJogo.vencedor).toBe(jogador1);
    });

    it("se os jogdores empaterem em vantagem, os dois perdem a vantgem", function(){
        let meuJogo = new Jogo();
        let jogador1 = meuJogo.jogador1;
        let jogador2 = meuJogo.jogador2;
        meuJogo.pontuar(jogador1);
        meuJogo.pontuar(jogador1);
        meuJogo.pontuar(jogador1);
        meuJogo.pontuar(jogador1);
        
        meuJogo.pontuar(jogador2);
        meuJogo.pontuar(jogador2);
        meuJogo.pontuar(jogador2);
        meuJogo.pontuar(jogador2);

        meuJogo.pontuar(jogador1);
        expect(meuJogo.jogador1.vantagem).toBe(0)
        meuJogo.pontuar(jogador2);    

        expect(jogador1.pontuacao).toBe(40);
        expect(jogador2.pontuacao).toBe(40);
        expect(jogador1.vantagem).toBe(undefined);
        expect(jogador2.vantagem).toBe(undefined);
    });

    it("se o jogador2 pontuar depois de ter vantagem ele ganha o jogo", function(){
        let meuJogo = new Jogo();
        let jogador1 = meuJogo.jogador1;
        let jogador2 = meuJogo.jogador2;
        meuJogo.pontuar(jogador1);
        meuJogo.pontuar(jogador1);
        meuJogo.pontuar(jogador1);
        meuJogo.pontuar(jogador1);
        
        meuJogo.pontuar(jogador2);
        meuJogo.pontuar(jogador2);
        meuJogo.pontuar(jogador2);
        meuJogo.pontuar(jogador2);

        meuJogo.pontuar(jogador1);
        expect(meuJogo.jogador1.vantagem).toBe(0)
        meuJogo.pontuar(jogador2);    

        expect(jogador1.pontuacao).toBe(40);
        expect(jogador2.pontuacao).toBe(40);
        expect(jogador1.vantagem).toBe(undefined);
        expect(jogador2.vantagem).toBe(undefined);

        meuJogo.pontuar(jogador2);
        expect(meuJogo.vencedor).toBe(jogador2);
    });

});