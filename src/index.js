import Page from './util/ui'
import Population from './model/Population';

export const finishDot = {
    x: 190,
    y: 40
}

const page = new Page

const ctx = page.ctx
const canvas = page.canvas
const controls = page.controls

const population = new Population(40)
let counter = 0
let generation = 0

const renderGeneration = () => {
    if (counter < 1000) {
        ctx.clearRect(0, 0, canvas.width, canvas.height)

        ctx.beginPath()
        ctx.arc(finishDot.x, finishDot.y, 5, 0, Math.PI * 2, true)
        ctx.fillStyle = 'green'
        ctx.fill()
        ctx.closePath()

        const fittest = population.findFittest()

        let newpos
        population.dots.forEach(dot => {
            
            ctx.beginPath()
            newpos = dot.move(counter)
            ctx.arc(newpos.x, newpos.y, 5, 0, Math.PI * 2, true)
            if (dot === fittest) {
                ctx.fillStyle = 'red'
            } else {
                ctx.fillStyle = 'black'
            }
            ctx.fill()
            ctx.closePath()
        })
        counter++
        controls.steps.innerHTML = `Steps: ${counter}`
        controls.generation.innerHTML = `Generation: ${generation}`

    }  else {
        counter = 0
        population.getNextGen()
        generation++
    }
}
setInterval(renderGeneration, 10)