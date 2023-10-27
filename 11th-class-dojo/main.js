exports.Jogo = class Jogo {
  constructor(){
    this.jogador1 = {
      pontuacao: "amor"
     };

     this.jogador2 = {
      pontuacao: "amor"
     };

     this.pontuacao = [ "amor", 15, 30, 40];
     
  }
  pontuar(jogador){

     if (this.jogador1.vantagem == 0 && this.jogador2.vantagem == 0){
      this.jogador1.vantagem = undefined; 
      this.jogador2.vantagem = undefined;
  
      return
   }
    if (this.jogador1.pontuacao == 40 
      && this.jogador2.pontuacao == 40 ){
      jogador.vantagem = 0;
    }
    
   

    if(jogador.pontuacao == this.pontuacao[2]) {
      jogador.pontuacao = this.pontuacao[3];
    }
    if(jogador.pontuacao == this.pontuacao[1]) {
      jogador.pontuacao = this.pontuacao[2];
    }
    if(jogador.pontuacao == this.pontuacao[0]) {
      jogador.pontuacao = this.pontuacao[1];
    }

    if (jogador.vantagem == 0){
      this.vencedor = jogador;
    }
    
  }
}

