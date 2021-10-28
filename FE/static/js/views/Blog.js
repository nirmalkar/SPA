import AbstractView from './AbstractView.js'

export default class extends AbstractView {
    constructor() {
        super()
        this.setTitle('Blog')
    }
    async getHtml() {
        return `
                <h1>
                    Welcome to Blog!
                </h1>
                <p>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Odit assumenda molestiae facere, officia delectus facilis debitis harum eveniet corporis voluptatibus.
                </p>
                <p>
                    <a href="/" data-link> View Home </a>
                </p>
            `
    }
}
