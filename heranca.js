class Animals{
    constructor(name,age,specie){
        this.name = name
        this.age = age
        this.specie = specie
    }
    eat(){

    }
    sleep(){

    }
    makeNoise(){

    }
}
class Mammals extends Animals{
    constructor(name,age,specie,fur,gestation){
        super(name,age,specie)
        this.fur = fur
        this.gestation = gestation
    }

}
class Birds extends Animals{
    constructor(name,age,specie,fly,egg){
        super(name,age,specie)
        this.fly = fly
        this.egg = egg
    }
}

class Dog extends( Animals, Mammals){
    constructor(name, age, specie, fur, gestation, agressive, size){
        super(name, age, specie, fur,gestation)
        this.agressive = agressive
        this.size = size
    }

}


const ruffles = new Dog('ruffles', 1, 'bulldog', true, 9, false, 'Medium')

console.log(ruffles)