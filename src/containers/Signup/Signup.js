import React from 'react'
import { Input, Button, Paper } from '../../components'
import Grid from '@material-ui/core/Grid';
import { Typography } from '@material-ui/core';
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { SignupFunc } from '../../Store/Action/Action'
import firebase from '../../config/Firebase/Firebase'
import Header from '../../components/Header/Header'
import NativeSelects from '../../components/DropDown/Dropdown'

class Signup extends React.Component {
    constructor() {
        super()
        this.state = {
            fname:'',
            lname:'',
            email: '',
            Bloodgroup:'',
            password: '',
            profile: ''
        }

    }

    getImage = async (e) => {
        let imageName = e.target.files[0].name
        let ref = firebase.storage().ref('/').child(`users/${imageName}`)
        await ref.put(e.target.files[0])
        ref.getDownloadURL().then((url) => {
            console.log(url)
            this.setState({
                profile: url
            })
        })
    }

    Signup = (obj, path) => {
        this.props.SignupFunc(obj, path)
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
                                    Signup Form
                        </Typography>
                                <Input label='First Name' type='text' onChange={(e) => this.setState({ fname: e.target.value })} />
                                <Input label='Last Name' type='text' onChange={(e) => this.setState({ lname: e.target.value })} />
                                <Input label='Email' type='email' onChange={(e) => this.setState({ email: e.target.value })} />
                                {/* <NativeSelects label='Blood Group' onChange={(e) =>this.setState({Bloodgroup:e.target.value})} /> */}
                                <Input label='Password' type='password' onChange={(e) => this.setState({ password: e.target.value })} />
                                {/* <Input type='file' onChange={(e) => this.getImage(e)} /> */}

                                <div style={{ textAlign: 'center' }}>
                                    <Button onClick={() => this.Signup(this.state, this.props.history)}>
                                        Signup Now
                                </Button>

                                {/* <Link to='/Login' >
                                        <h6>Alrady member  Sign in </h6>
                                    </Link> */}

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
        SignupFunc: (obj, path) => dispatch(SignupFunc(obj, path))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Signup)
