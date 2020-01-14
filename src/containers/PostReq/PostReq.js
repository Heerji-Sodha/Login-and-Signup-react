import React from 'react'
import { Input, Button, Paper, DropdownPage } from '../../components/index'
import Grid from '@material-ui/core/Grid';
import { Typography } from '@material-ui/core';
import firebase from "../../config/Firebase/Firebase"
import { Link } from "react-router-dom"

export default class PostReq extends React.Component {
    constructor() {
        super()
        this.state = {

        }

    }


    componentDidMount() {
        firebase.auth().onAuthStateChanged(user => {
            if (user) {
                firebase.firestore().collection('allUsers').doc(user.uid).get().then(res => {
                    console.log(res.data())
                    this.setState({
                        user: res.data()
                    })
                })
            }
        })
    }

    Posstdat = () => {
        console.log(this.state)
let data = this.state
        firebase.firestore().collection('UserData').add(data).then(res => {
            console.log(res);

        })


    }

    render() {
        console.log(this.state);
        return (
            <div>

                <div style={{ marginTop: '50px' }}>
                    <Grid justify='center' container spacing={3}>
                        <Grid item xs={12} sm={6} md={6} lg={32}>
                            <Paper>
                                <h4>Post Blood Request</h4>
                                Blood Group:
<DropdownPage onChange={(e) => this.setState({ BloodGroup: e.target.value })} array={[{ name: 'A+' }, { name: 'B+' }, { name: 'AB+' }, { name: 'O' }, { name: 'A-' }, { name: 'AB-' }, { name: 'O-' }]} />

                                No of Units of Requireds:
<DropdownPage onChange={(e) => this.setState({ Units: e.target.value })} array={[{ name: "1" }, { name: '2' }, { name: '3' }, { name: '4' }, { name: '5' }, { name: '6' }, { name: '7' }]} />
                                Urgency:
<DropdownPage onChange={(e) => this.setState({ Urgency: e.target.value })} array={[{ name: "urgent" }, { name: 'Within 5 hours' }, { name: 'Within 12 hours' }, { name: 'Within 24 hours' }, { name: 'Within 2 days' }, { name: 'Within Week' }]} />
                                Counrty:
<DropdownPage onChange={(e) => this.setState({ Country: e.target.value })} array={[{ name: "Pakistan" }, { name: 'India' }, { name: 'Srilanka' }, { name: 'Bangladesh' }, { name: 'USA' }, { name: 'Uk' }]} />
                                State:
                                
<DropdownPage onChange={(e) => this.setState({ State: e.target.value })} array={[{ name: "Sindh" }, { name: 'Panjab' }, { name: 'Balochstan' }, { name: 'KPK' }]} />
                                City
<DropdownPage onChange={(e) => this.setState({ city: e.target.value })} array={[{ name: "Karachi" }, { name: 'HyderAbad' }, { name: 'Sukher' }, { name: 'Mithi' }]} />
                                Hospital:
                                
<DropdownPage onChange={(e) => this.setState({ Hospital: e.target.value })} array={[{ name: "Indus Hospital" }, { name: ' Ziauddin Hospital' }, { name: ' Agha Khan Hospital' }, { name: 'Liaquat National Hospital' },{ name: 'OMI' },{ name: 'Jinnah Hospital'},{ name: 'Holy Family Hospital'} ]} />
                                Relation With Parrents:
                                
<DropdownPage onChange={(e) => this.setState({ Ralaation: e.target.value })} array={[{ name: "Father" }, { name: 'Mother' }, { name: 'Son' }, { name: 'Daughter' },{ name: 'Aunt' },{ name: 'Son' },{ name: 'Uncle' },{ name: 'Nephew' },{ name: 'Niece' },{ name: 'Neighbour' },{ name: 'None' } ]} />
                                Contact :
                                      <Input type="number"  onChange={(e) => this.setState({ number: e.target.value })}/>
                                Additional Instruction:
                                
<Input type="text"  onChange={(e) => this.setState({ discreption: e.target.value })}/>

                                <Button onClick={() => this.Posstdat()} >
                                    Post Data
                                </Button>

                            </Paper>
                        </Grid>
                    </Grid>

                    {/* <div id='snackbar' className={this.props.className}>{this.props.err}</div> */}
                </div>


            </div>
        )
    }
}

// const mapStateToProps = state => {
//     console.log(state)
//     return {
//         err: state.err,
//         className: state.name
//     }
// }

// const mapDispatchToProps = dispatch => {
//     return {
//         SingnUpFunction: (data, path) => dispatch(SingnUpFunction(data, path))
//     }
// }

// export default connect(mapStateToProps, mapDispatchToProps)(Signup)