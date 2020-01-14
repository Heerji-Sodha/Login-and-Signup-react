import React, { Component } from 'react';
import { Route, Router, Switch, Redirect } from 'react-router-dom';
import { Login, Home, Signup, history } from '../../containers/index'
import firebase from '../../config/Firebase/Firebase'
import AboutPost from '../../components/aboutPost/AboutPost'
import PostDetails from '../../containers/PostDetails/PostDetails'
function PrivateRoute({ component: Component, authed, ...rest }) {
    return (
        <Route
            {...rest}
            render={(props) => authed === true
                ? <Component {...props} />
                : <Redirect to={{ pathname: '/login', }} />}
        />
    )
}
function PublicRoute({ component: Component, authed, ...rest }) {
    return (
        <Route
            {...rest}
            render={(props) => authed === false
                ? <Component {...props} />
                : <Redirect to='/home' />}
        />
    )
}

class Routers extends Component {
    constructor(props) {
        super(props)
        this.state = {
            authed: false
        }

    }
    componentDidMount() {
        firebase.auth().onAuthStateChanged(user => {
            // handle it
            if (user) {
                this.setState({ authed: true })
            }else{
                this.setState({authed:false})
            }
        });

    }



    render() {
        return (
            <Router history={history}>
                <Switch>
                    <Route exact path="/" component={Login} />
                    <PrivateRoute authed={this.state.authed} path="/home" component={Home} />
                    <PrivateRoute authed={this.state.authed} path="/AboutPost" component={AboutPost} />
                    <PrivateRoute authed={this.state.authed} path="/PostDetails" component={PostDetails} />
                    <PublicRoute authed={this.state.authed} path="/login" component={Login} />
                    <PublicRoute authed={this.state.authed} path="/Signup" component={Signup} />

                    {/* <Route path="*" component={Notfound} /> */}

                </Switch>
            </Router>
        )
    }


}



export default Routers;



