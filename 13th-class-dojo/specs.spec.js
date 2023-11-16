const { Jogo } = require('./main');
describe("Jogo xadres", function() {

    it("eu deno conseguir initir o jogo", function(){
        let meuJogo = new Jogo();
    });
    it("O jogo deve ter um tabuleiro", function(){
        let meuJogo = new Jogo();
        meuJogo.init();
        expect(meuJogo.tabuleiro.length).toBe(8);        
    });
});
