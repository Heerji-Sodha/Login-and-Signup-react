import React from 'react';
import { MDBBtn, MDBCard, MDBCardBody, MDBCardTitle, MDBCardText, MDBCol } from 'mdbreact';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import firebase from '../../config/Firebase/Firebase'
import {Input,Button} from '../../components/index'
// import Paper from '../Paper/Paper'


export default class PostDetails extends React.Component {
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


  render() {
    return (

      <div>
        <div style={{ marginTop: '30px' }}>
          <Grid justify='center' container spacing={3}>
            <Grid item xs={12} sm={12} md={10} lg={5}>

              {this.state.array.map((val, i) => {
                return <Paper style={{ width: '100%', padding: '20px',marginBottom:'20px' }} >

                  <h5 style={{ textAlign: 'justify' }} >
                    Units require<b>{val.Units}</b>  <br />


                    BloodGroup <b>{val.BloodGroup}</b> <br />
                    Location: <b>{val.city}</b> <b>{val.State}</b> <b>{val.Country}</b><br />
                 Hospital: <b>{val.Hospital}</b> <br />
                    Urgency: <b>{val.Urgency}</b><br />
                    Relaction with patient:<b>{val.Ralaation}</b><br />
                    contact No <b>{val.number}</b> <br />
                    Additional:Instruction<br />
                    <b>{val.discreption}</b><br />
                    
                  </h5>
                </Paper>




              })}
              <Paper>
              <h2>Volinter</h2>


              </Paper>


<Paper>
    <h2>Commit</h2>
</Paper>
            </Grid>
          </Grid>
        </div>
      </div>
    )
  }
}