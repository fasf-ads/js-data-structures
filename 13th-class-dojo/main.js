exports.Jogo = class Jogo {
    init() {
        this.tabuleiro = [];
        for(let i = 0; i < 8; i++){
            this.tabuleiro[i] = [];
            for(let k = 0; k < 8; k++){
                this.tabuleiro[i][k] = null;
            };
        };
        
    };
    movimentoValido(peca, pos){
        if(peca.nome === "peao"){
            if(peca.posicao_atual[0] === peca.posicao_inicial[0] && peca.posicao_atual[1] === peca.posicao_inicial[1]){
                if(pos[1] === peca.posicao_atual[1]){
                    if(pos[0] === peca.posicao_atual[0]+1 || pos[0] === peca.posicao_atual[0]+2){
                        if (this.tabuleiro[pos[0]][pos[1]] === null) {
                            return true;
                        }
                    }
                }
            } else {
                if(pos[1] === peca.posicao_atual[1]){
                    if(pos[0] === peca.posicao_atual[0]+1){
                        if (this.tabuleiro[pos[0],pos[1]] === null) {
                        return true;
                        }
                        
                    }
                }
            }
        }
        if(peca.nome === "torre"){
            if(pos[1] === peca.posicao_atual[1]){
                if(pos[0] >= 0 && pos[0] <= 7) {
                    for(let i=peca.posicao_atual[0]+1; i <= 7; i++){
                        if (this.tabuleiro[i][pos[1]] !== null) {
                            console.log(this.tabuleiro[i,pos[1]]);
                            return false;
                        }
                    }
                    return true;
                }
            } else {
                if(pos[0] === peca.posicao_atual[0]){
                    if(pos[1] >= 0 && pos[1] <= 7) {
                        return true;
                    }
                } 
            }

            
        }
        return false
    }
};
exports.Peao = class Peao{
   constructor(){
        this.posicao_inicial= [null,null];
        this.posicao_atual= [null,null];
        this.nome= "";
        this.cor= 1; 
        this.capturado= false;
    
    }
}
exports.Torre = class Torre{
    constructor(){ 
         this.posicao_inicial= [null,null];
         this.posicao_atual= [null,null];
         this.nome= "";
         this.cor= 1; 
         this.capturado= false;
     
     }
 }
 exports.Cavalo = class Cavalo{
    constructor(){ 
         this.posicao_inicial= [null,null];
         this.posicao_atual= [null,null];
         this.nome= "";
         this.cor= 1; 
         this.capturado= false;
     
     }
 }
 exports.Bispo = class Bispo{
    constructor(){ 
         this.posicao_inicial= [null,null];
         this.posicao_atual= [null,null];
         this.nome= "";
         this.cor= 1; 
         this.capturado= false;
     
     }
 }
 exports.Rainha = class Rainha{
    constructor(){ 
         this.posicao_inicial= [null,null];
         this.posicao_atual= [null,null];
         this.nome= "";
         this.cor= 1; 
         this.capturado= false;
     
     }
 }
 exports.Rei = class Rei{
    constructor(){ 
         this.posicao_inicial= [null,null];
         this.posicao_atual= [null,null];
         this.nome= "";
         this.cor= 1; 
         this.capturado= false;
     
     }
 }
 
