let vitoria = 100
let derrota = 5
let nivel;


function saldovitoria(){
    if (vitoria < 10) {
        nivel = "Ferro";
      } else if (vitoria >= 11 && vitoria <= 20) {
        nivel = "Bronze";
      } else if (vitoria >= 21 && vitoria <= 50) {
          nivel = "Prata";
      } else if (vitoria >= 51 && vitoria <= 80) {
          nivel = "Ouro";
      } else if (vitoria >= 81 && vitoria <= 90) {
          nivel = "Diamante";
      } else if (vitoria >= 91 && vitoria <= 100) {
          nivel = "Lendário";
      } else if (vitoria >= 101) {
          nivel = "Imortal";
      }
}
saldovitoria()
console.log("O herói tem o saldo de " + (vitoria-derrota) + " está no nível de " + nivel)
