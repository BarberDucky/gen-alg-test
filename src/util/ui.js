export default class Page {
    constructor() {
        const mainDiv = document.createElement('div')
        mainDiv.className = 'mainDiv'
        document.body.appendChild(mainDiv)

        const playground = document.createElement('div')
        playground.className = 'playground'
        mainDiv.appendChild(playground)

        this.canvas = document.createElement('canvas')
        this.canvas.height = 395
        this.canvas.width = 395
        playground.appendChild(this.canvas)
        this.ctx = this.canvas.getContext('2d')

        this.controls = document.createElement('div')
        this.controls.className = 'controls'
            const steps = document.createElement('span')
            steps.innerHTML = 'Steps: 0'
            this.controls.steps = steps
            this.controls.appendChild(steps)

            const generation = document.createElement('span')
            generation.innerHTML = 'Generation: 0'
            this.controls.generation = generation
            this.controls.appendChild(generation)

        /*
            const fittest = document.createElement('span')
            fittest.innerHTML = 'Fittest: 0'
            this.controls.fittest = fittest
            this.controls.appendChild(fittest)
        */
        mainDiv.appendChild(this.controls)
    }
}