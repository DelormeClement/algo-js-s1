let musique = ["Wejdene", "TimeTime", "Tchoupi", "Inazuma", "snowfall"];

class victime {
    constructor(name, pv) {
        this.name = name
        this.pv = pv
    }
     trajet(musique) {
        var nbrChangementTaxi = 0
        var nbrFeuxRouges = 0
        while (nbrFeuxRouges < 30 && this.pv > 0) {
            nbrFeuxRouges += 1
            var musiqueRandom = musique[Math.floor(Math.random()* musique.length)]
            console.log(musiqueRandom + " est entrain d'être jouer.")
            console.log(this.pv)              
                if (nbrFeuxRouges === 30 ){
                    console.log("Gg " + this.name + " sort enfin de cet enfer.")
                    break
                }
                if (musiqueRandom == "Wejdene") {
                    this.pv -= 1
                    nbrChangementTaxi += 1
                }
                if (this.pv === 0){
                    console.log(this.name + " vient d'exploser.")
                    break
                }
            }
        console.log((nbrChangementTaxi) + " est le nombre de Taxi que " + this.name + " a dû changé")
            }
}

let John = new victime("John", 10)

John.trajet(musique)
