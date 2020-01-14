import React from 'react'
import { Paper, Input, Button } from '../../components'
import Grid from '@material-ui/core/Grid';
import { Typography } from '@material-ui/core';
import { connect } from 'react-redux'
import './Login.css'
import { LoginFunc } from '../../Store/Action/Action'
import { Link } from 'react-router-dom'
import Header from '../../components/Header/Header'
import firebase from '../../config/Firebase/Firebase'
class Login extends React.Component {
    constructor() {
        super()
        this.state = {
            email: '',
            password: '',
        }
    }


    componentDidMount() {
        firebase.auth().onAuthStateChanged(user => {
            // handle it
            if (user) {
                this.props.history.push('/home')
            }
        });

    }

    Login = (obj, path) => {
        this.props.LoginFunc(obj, path)
    }
    render() {
        return (
            <div>
                <Header />
                <div style={{ marginTop: '50px' }}>
                    <Grid justify='center' container spacing={3}>
                        <Grid item xs={12} sm={12} md={10} lg={5}>
                            <Paper>
                                <Typography variant="h4" align='center' >
                                    Login Form
                            </Typography>

                                <Input  label='Enter Your Email' type='email' onChange={(e) => this.setState({ email: e.target.value })} />
                                <Input  label='Enter Your Password' type='password' onChange={(e) => this.setState({ password: e.target.value })} />
                                <div style={{ textAlign: 'center' }}>
                                    <Button onClick={() => this.Login(this.state, this.props.history)}>
                                        Login Now
                                    </Button>
                                    <Link to='/Signup' >
                                        <h6>Create new Account?</h6>
                                    </Link>
                                </div>
                            </Paper>
                        </Grid>
                    </Grid>

                    <div id='snackbar' className={this.props.className}>{this.props.err}</div>
                </div>


            </div>
        )
    }
}

const mapStateToProps = state => {
    console.log(state)
    return {
        err: state.err,
        className: state.name
    }
}

const mapDispatchToProps = dispatch => {
    return {
        LoginFunc: (obj, path) => dispatch(LoginFunc(obj, path))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Login)
