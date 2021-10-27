import AbstractView from './AbstractView'

export default class extends AbstractView {
    constructor() {
        this.setTitle('Home')
    }
    async getHtml() {
        return `
        <h1>
            Welcome to home!
        </h1>
        <p>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Odit assumenda molestiae facere, officia delectus facilis debitis harum eveniet corporis voluptatibus.
        </p>
        <p>
        <a href="/blog" data-link> View Recent Blogs </a>
        </p>
    `
    }
}
