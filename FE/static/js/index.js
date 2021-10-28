import Home from './views/Home.js'
import Blog from './views/Blog.js'
import Settings from './views/Settings.js'

const navigateTo = (url) => {
    history.pushState(null, null, url)
    router()
}

const router = async () => {
    const routes = [
        { path: '/', view: () => Home },
        { path: '/blog', view: () => Blog },
        { path: '/settings', view: () => Settings },
    ]
    const potentialMatches = routes.map((route) => {
        return {
            route,
            isMatch: location.pathname === route.path,
        }
    })

    let match = potentialMatches.find(
        (potentialMatch) => potentialMatch.isMatch
    )

    if (!match) {
        match = {
            route: routes[0],
            isMatch: true,
        }
    }

    const view = match.route.view()
    const screeView = new view()
    document.querySelector('#app').innerHTML = await screeView.getHtml()
}

window.addEventListener('popstate', router)

document.addEventListener('DOMContentLoaded', () => {
    const path = location.pathname
    if (path) {
        navigateTo(path)
    }
    document.body.addEventListener('click', (e) => {
        if (e.target.matches('[data-link]')) {
            e.preventDefault()
            navigateTo(e.target.href)
        }
    })
})
