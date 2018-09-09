import Dot from './Dot'

export default class Population {
    constructor (num) {
        this.dots = []
        for (let i = 0; i < num; i++) {
            this.dots.push(new Dot)
        }
        this.generation = 0
        this.fittest = find.findFittest
    }

    getNextGen() {
        this.findFittest()
        this.dots = this.dots.map((dot, index) => {
            if (index < 10) {
                dot.position = {
                    x: 190,
                    y: 350
                }
                return dot
            } else {
                const parent1 = Math.floor((Math.random() * 100)) % 10
                const parent2 = Math.floor((Math.random() * 100)) % 10
                const newDot = new Dot(this.dots[parent1], this.dots[parent2])
                return newDot
            }
        })
    }

    findFittest() {
        this.dots.forEach(dot => dot.getFitness)
        this.dots.sort((a, b) => b.fitness - a.fitness)
        return this.dots[0]
    }
}