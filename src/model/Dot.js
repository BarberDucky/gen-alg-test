import {finishDot} from '../index'

export default class Dot {
    constructor(parent1, parent2) {
        this.position = {
            x: 190,
            y: 350
        }
        this.fitness = 0
        this.moves = []
        if (parent1 === undefined) {
            for (let i = 0; i < 1000; i++) {
                this.moves[i] = {
                    x: Math.floor((Math.random() * 100)) % 3 - 1,
                    y: Math.floor((Math.random() * 100)) % 3 - 1
                }
            }
        } else {
            this.inherit(parent1, parent2)
        }
    }

    move(step) {
        if (step < 1000) {
            const newX = this.moves[step].x
            const newY = this.moves[step].y

            this.position.x += newX * 2
            this.position.y += newY * 2

            this.fitness = this.getFitness()

            return {
                x: this.position.x,
                y: this.position.y
            }
        } else {
            return null
        }
    }

    getFitness() {
        const distance = Math.sqrt(Math.pow(this.position.x - finishDot.x, 2) + Math.pow(this.position.y - finishDot.y, 2))
        if (distance === 0) {
            return 500
        } else {
            return 400 - distance
        }
    }

    inherit(parent1, parent2) {
        let range = this.getParentRange()
        this.moves.splice(range.start, range.count)
    }

    getParentRange() {
        return {
            start: Math.floor(Math.random() * 750),
            count: Math.floor(Math.random() * 250),
        }
    }
}