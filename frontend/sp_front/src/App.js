import './styles.scss';
import Authorization from './components/Authorization.js'
import Menu from './components/Menu.js'
import Persons from './components/Persons.js'
import Cameras from './components/Cameras.js'
import Groups from './components/Groups.js'
import Actions from './components/Actions.js'
import EditCamera from './components/EditCamera.js'
import EditAction from './components/EditAction.js'
import EditRulesForPeople from './components/EditRulesForPeople.js'
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom'

function App() {
    return (
        <Router>
            <Switch>
                <Route path="/" exact component={Authorization} />
                <Route path="/menu" exact component={Menu} />
                <Route path="/persons" component={Persons} />
                <Route path="/cameras" exact component={Cameras} />
                <Route path="/groups" component={Groups} />
                <Route path="/actions" component={Actions} />
                <Route path="/cameras/edit" component={EditCamera} />
                <Route path="/zones_and_rules/edit" component={EditRulesForPeople} />
                <Route path="/table" component={EditAction} />
            </Switch>
        </Router>
    );
}

export default App;
