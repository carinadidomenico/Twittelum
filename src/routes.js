import React from 'react'
import {Switch, Route, Redirect} from 'react-router-dom'

//Páginas
import Home from './pages/Home/Home'
import LoginPage from './pages/LoginPage'


function Autenticar () {
    if (localStorage.getItem('TOKEN')) {
        return true
    }
    else {
        return false
    }
}

class PrivateRoute extends React.Component {
    render() {
        
        const Component = this.props.component
        if (Autenticar()) {
             //componente rota tweets
             return <Route render={(props) => <Component {...props}></Component>}></Route>
        }
        else {
            //componente rota login
            return <Redirect to="/login"></Redirect> 
        }
    }
}

const Roteamento = () => {
    return (
        <Switch>
            <PrivateRoute exact path='/' component={Home}></PrivateRoute>
            <Route path='/login' component={LoginPage}></Route>
        </Switch>
    )
}

export default Roteamento;