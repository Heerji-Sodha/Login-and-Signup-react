import React from 'react'
import { connect } from 'react-redux'
import { Logout } from '../../Store/Action/Action'
import firebase from '../../config/Firebase/Firebase'
import Googlemap from '../../components/googleMap/Map'
import Drawer from '../../components/Drawer/Drawer'
import CardExample from '../../components/Card/Card'
class Home extends React.Component {
    constructor() {
        super()
        this.state = {
            array: [],
            user: ''
        }


    }

    // componentDidMount(){
    //     let array = []
    // firebase.firestore().collection('allUsers').get().then(res=>{
    //     console.log('component',res)
    //     res.forEach(UserDetails=>{
    //         let UserData= UserDetails.data()
    //         array.push(UserData)
    //         this.setState({array})
    //     })
    // })
    // }


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


    render() {
        console.log("Home====>", this.state.user)
        // let data = this.state.array
        return (
            <div>

                <Drawer title="FEED" />/
<CardExample />


                {/* <Navbar data={this.state.user} /> */}
                {/* {data.map((val,i)=> <h1 key={i} ><img src={val.profile}/><br /> {val.email}  </h1>)} */}
                {/* <Googlemap /> */}

            </div>
        )
    }
}


export default Home
