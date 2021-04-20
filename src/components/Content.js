import {Switch,Route} from 'react-router-dom'
import {Home} from './Home'
import {About} from './About'
import {Contact} from './Contact'

export function Content(props) {
    return (
        <Switch>
            <Route path="/contact">
                <Contact />
            </Route>
            <Route path="/about">
                <About />
            </Route>
            <Route path="/">
                <Home />
            </Route>
        </Switch>
    )
}

export default Content