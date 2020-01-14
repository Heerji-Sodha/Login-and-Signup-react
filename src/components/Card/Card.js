import React from 'react';
import { MDBBtn, MDBCard, MDBCardBody, MDBCardTitle, MDBCardText, MDBCol } from 'mdbreact';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Button from '../Button/Button'
import firebase from '../../config/Firebase/Firebase'
import Input from '../Input/Input'
import loginpic from '../../Images/loginpic.png'
import { Link } from 'react-router-dom'
// import Paper from '../Paper/Paper'


export default class CardExample extends React.Component {
  constructor() {
    super()
    this.state = {
      array: []
    }
  }


  componentDidMount() {
    let array = []
    firebase.firestore().collection('UserData').get().then(res => {
      console.log('component', res)
      res.forEach(UserDetails => {
        let UserData = UserDetails.data()
        array.push(UserData)
        this.setState({ array })
      })
    })
  }

  addComent = () => {
    console.log(this.state)
    let data = this.state
    firebase.firestore().collection('AddComent').add(data).then(res => {
      console.log(res);

    })
  }

  render() {
    return (

      <div>
        <div style={{ marginTop: '30px' }}>
          <Grid justify='center' container spacing={3}>
            <Grid item xs={12} sm={12} md={10} lg={5}>

              {this.state.array.map((val, i) => {
                return <Paper style={{ width: '100%', padding: '20px', marginBottom: '20px' }} >
                  <center><img width='30%' src={loginpic} /></center>
                  <h5 style={{ textAlign: 'justify' , textAlign:'center' }} >
                    <b>{val.Units}</b>unit of  <br />
                    <b>{val.BloodGroup}</b> Blood required. <br />
                    At <b>{val.Hospital}</b> for my
                  <b>{val.Ralaation}</b> <br />
                    Urgency <b>{val.Urgency}</b><br />
                    contact at <b>{val.number}</b> <br />
                    Additional:Instruction<br />
                    <b>{val.discreption}</b><br />
                    <Button>Volunteer</Button>


                    {
                      this.state.commit ?
                        <div style={{ maxWidth: '500px' }}>
                          <Input type="text" onChange={(e) => this.setState({ message: e.target.value })} />
                          <Button color='deep-purple' size='sm' onClick={this.addComent} >Comment</Button>
                        </div>
                        :
                        <Button color='deep-purple' onClick={() => this.setState({ commit: true })} > Comment </Button>
                    }


                    {/* <Link to='PostDetails'> <Button>Comment</Button></Link> */}
                  </h5>
                </Paper>


              })}
            </Grid>
          </Grid>
        </div>
      </div>
    )
  }
}