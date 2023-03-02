class animal{

    constructor(peso, raca, nome){
        this.peso = peso
        this.raca = raca
        this.nome = nome


    }
}

class galinha extends animal{
    constructor(peso, raca, nome){
        this.peso;
        this.raca;
        this.nome;
        super(peso,this.peso)
        super(raca, this.raca)
        super(nome, this.nome)
    }
    ciscar(){

    }
    botarOvo(){

    }
}

const popo = new galinha(1,'aves', 'gisele' )

console.log(popo)