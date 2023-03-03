class Animals{
    constructor(name,age,specie,lifeTime){
        this.name = name
        this.age = age
        this.specie = specie
        this.lifeTime = lifeTime
    }
    eat(){

    }
    sleep(){

    }
    makeNoise(){

    }
}
class Mammals extends Animals{
    constructor(name,age,specie,lifeTime,move){
        super(name,age,specie,lifeTime)
        this.move = move
    }
    hibern(){

    }

}
class Birds extends Animals{
    constructor(name,age,specie,lifeTime,fly,egg){
        super(name,age,specie,lifeTime)
        this.fly = fly
        this.egg = egg
    }
    hunt(){

    }
}
class Fish extends Animals{
    constructor(name,age,specie,lifeTime,bones){
        super(name,age,specie,lifeTime)
        this.bones = bones
    }
    swim(){

    }
}

class Reptile extends Animals{
    constructor(name,age,specie,lifeTime,venon){
        super(name,age,specie,lifeTime)
        this.venon = venon
    }
    regenerate(){

    }
}

const ruffles = new Mammals('ruffles',3,'pug',15,'run')
const mordecai = new Birds('Mordecai', 1, 'mordecai', 5, true, true)
const darwin = new Fish('Darwin', 2, 'goldenFish',10, false)
const snake = new Reptile('croba', 5, 'cascavel', 15, true)

console.log(ruffles, mordecai, darwin, snake)