import Home from './views/Home.js'

const navigateTo = (url) => {
    history.pushState(null, null, url)
    router()
}

const router = async () => {
    const routes = [
        { path: '/', view: () => Home },
        { path: '/blog', view: () => console.log('viewing blogs') },
        { path: '/settings', view: () => console.log('viewing settings') },
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
    const view = new match.route.view()

    document.querySelector('#app').innerHTML = await view.getHtml()
}

window.addEventListener('popstate', router)

document.addEventListener('DOMContentLoaded', () => {
    document.body.addEventListener('click', (e) => {
        if (e.target.matches('[data-link]')) {
            e.preventDefault()
            navigateTo(e.target.href)
        }
    })
})