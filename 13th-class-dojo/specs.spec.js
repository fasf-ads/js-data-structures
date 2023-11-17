const { Jogo, Peao, Torre, Cavalo, Bispo, Rainha, Rei} = require('./main');

describe("Jogo xadres", function() {

    it("eu Devo conseguir initir o jogo", function(){
        let meuJogo = new Jogo();
    });
    it("O jogo deve ter um tabuleiro", function(){
        let meuJogo = new Jogo();
        meuJogo.init();
        expect(meuJogo.tabuleiro.length).toBe(8);        
    });
    it("o tabuleiro bidimensional", function(){
        let meuJogo = new Jogo();
        meuJogo.init();
        for(let i = 0; i < meuJogo.tabuleiro.length; i++){
            expect(meuJogo.tabuleiro[i].length).toBe(8);
        }
    });
    
    it("classe peao existe", function() {
        let peao = new Peao()
        expect(peao.posicao_inicial.length).toBe(2);
        expect(peao.posicao_atual.length).toBe(2);
        expect(peao.nome).toBe("");
        expect([0,1]).toContain (peao.cor);
        expect(typeof peao.capturado).toBe("boolean");
    })
    it("classe torre existe", function() {
        let torre = new Torre()
        expect(torre.posicao_inicial.length).toBe(2);
        expect(torre.posicao_atual.length).toBe(2);
        expect(torre.nome).toBe("");
        expect([0,1]).toContain (torre.cor);
        expect(typeof torre.capturado).toBe("boolean");
    })
    it("classe cavalo existe", function() {
        let cavalo = new Cavalo()
        expect(cavalo.posicao_inicial.length).toBe(2);
        expect(cavalo.posicao_atual.length).toBe(2);
        expect(cavalo.nome).toBe("");
        expect([0,1]).toContain (cavalo.cor);
        expect(typeof cavalo.capturado).toBe("boolean");
    })
    it("classe bispo existe", function() {
        let bispo = new Bispo()
        expect(bispo.posicao_inicial.length).toBe(2);
        expect(bispo.posicao_atual.length).toBe(2);
        expect(bispo.nome).toBe("");
        expect([0,1]).toContain (bispo.cor);
        expect(typeof bispo.capturado).toBe("boolean");
    })
    it("classe rainha existe", function() {
        let rainha = new Rainha()
        expect(rainha.posicao_inicial.length).toBe(2);
        expect(rainha.posicao_atual.length).toBe(2);
        expect(rainha.nome).toBe("");
        expect([0,1]).toContain (rainha.cor);
        expect(typeof rainha.capturado).toBe("boolean");
    })
    it("classe rei existe", function() {
        let rei = new Rei()
        expect(rei.posicao_inicial.length).toBe(2);
        expect(rei.posicao_atual.length).toBe(2);
        expect(rei.nome).toBe("");
        expect([0,1]).toContain (rei.cor);
        expect(typeof rei.capturado).toBe("boolean");
    })

    it("movimento valido peao ", function() {
        let peao = new Peao()
        let jogo = new Jogo()
        jogo.init();

        peao.posicao_inicial= [1,7];
        peao.posicao_atual= [1,7];
        peao.nome= "peao";
        peao.cor= 1; 
        peao.capturado= false;
        expect(jogo.movimentoValido(peao, [2,7])).toBe(true);
    })

    it("movimento valido peao ", function() {
        let peao = new Peao()
        let jogo = new Jogo()
        jogo.init()

        peao.posicao_inicial= [1,7];
        peao.posicao_atual= [1,7];
        peao.nome= "peao";
        peao.cor= 1; 
        peao.capturado= false;
        expect(jogo.movimentoValido(peao, [3,7])).toBe(true);
    })

    it("movimento valido peao ", function() {
        let peao = new Peao()
        let jogo = new Jogo()

        peao.posicao_inicial= [1,7];
        peao.posicao_atual= [1,7];
        peao.nome= "peao";
        peao.cor= 1; 
        peao.capturado= false;
        expect(jogo.movimentoValido(peao, [4,7])).toBe(false);
    })
    it("movimento invalido peao ", function() {
        let peao = new Peao()
        let jogo = new Jogo()
        jogo.init();

        peao.posicao_inicial= [2,7];
        peao.posicao_atual= [1,7];
        peao.nome= "peao";
        peao.cor= 1; 
        peao.capturado= false;
        expect(jogo.movimentoValido(peao, [4,7])).toBe(false);
    })
    it("movimento invalido peao - posicao final contem peca ", function() {
        let peao = new Peao()
        let peao2 = new Peao()
        let jogo = new Jogo()
        jogo.init()

        peao.posicao_inicial= [1,7];
        peao.posicao_atual= [2,7];
        peao.nome= "peao";
        peao.cor= 1; 
        peao.capturado= false;
        jogo.tabuleiro[2][7]= peao;
        
        peao2.posicao_inicial= [1,7];
        peao2.posicao_atual= [3,7];
        peao2.nome= "peao";
        peao2.cor= 1; 
        peao2.capturado= false;
        jogo.tabuleiro[3][7]= peao2;
        expect(jogo.movimentoValido(peao, [3,7])).toBe(false);
    })
    it("movimento inicial invalido peao - posicao final contem peca ", function() {
        let peao = new Peao()
        let peao2 = new Peao()
        let jogo = new Jogo()
        jogo.init()

        peao.posicao_inicial= [1,7];
        peao.posicao_atual= [1,7];
        peao.nome= "peao";
        peao.cor= 1; 
        peao.capturado= false;
        jogo.tabuleiro[1][7]= peao;
        
        peao2.posicao_inicial= [1,7];
        peao2.posicao_atual= [3,7];
        peao2.nome= "peao";
        peao2.cor= 1; 
        peao2.capturado= false;
        jogo.tabuleiro[3][7]= peao2;
        expect(jogo.movimentoValido(peao, [3,7])).toBe(false);
    })
    it("movimento inicial vertical valido torre ", function() {
        let torre = new Torre()
        let jogo = new Jogo()
        jogo.init();

        torre.posicao_inicial= [0,7];
        torre.posicao_atual= [0,7];
        torre.nome= "torre";
        torre.cor= 1; 
        torre.capturado= false;
        expect(jogo.movimentoValido(torre, [4,7])).toBe(true);
    })
    it("movimento inicial horizontal valido torre ", function() {
        let torre = new Torre()
        let jogo = new Jogo()
        jogo.init();

        torre.posicao_inicial= [0,7];
        torre.posicao_atual= [0,7];
        torre.nome= "torre";
        torre.cor= 1; 
        torre.capturado= false;
        expect(jogo.movimentoValido(torre, [0, 0])).toBe(true);
    })
    it("movimento inicial vertical invalido - peca no meio  ", function() {
        let torre = new Torre()
        let peao = new Peao()
        let jogo = new Jogo()
        jogo.init();

        peao.posicao_inicial= [0,7];
        peao.posicao_atual= [7,5];
        peao.nome= "peao";
        peao.cor= 1; 
        peao.capturado= false;
        jogo.tabuleiro[7,5]=peao

        torre.posicao_inicial= [0,7];
        torre.posicao_atual= [0,7];
        torre.nome= "torre";
        torre.cor= 1; 
        torre.capturado= false;
        expect(jogo.movimentoValido(torre, [7, 7])).toBe(false);
    })
})