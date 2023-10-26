const { Jogo } = require('./main');
describe('Jogo de Tenis', function() {
    it('deve começar sem jogadores', function() {
        var jogo = new Jogo();
        expect(jogo.jogador1).toBe(null);
        expect(jogo.jogador2).toBe(null);
    });
});
