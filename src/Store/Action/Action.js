import firebase from '../../config/Firebase/Firebase'






const SignupFunc = (data, path) => {
    return async dispatch => {
        await firebase.auth().createUserWithEmailAndPassword(data.email, data.password).then(res => {
            firebase.firestore().collection('allUsers').doc(res.user.uid).set(data).then(()=>{
                dispatch({ type: 'success' })
                path.push('/login')
            })
        }).catch(err => {
            dispatch({ type: 'showErr', payload: err.code })
            setTimeout(() => {
                dispatch({ type: 'hideErr', })
            }, 3000)
        })
    }
}


const LoginFunc = (data) => {
    return async dispatch => {
        await firebase.auth().signInWithEmailAndPassword(data.email, data.password).then(res => {
            dispatch({ type: 'success' })
        }).catch(err => {
            dispatch({ type: 'showErr', payload: err.code })

            setTimeout(() => {
                dispatch({ type: 'hideErr', })
            }, 3000)
        })
    }
}


const Logout = () => {
    alert("working")
    return async dispatch => {
        await firebase.auth().signOut().then(() => {
            console.log('Signed Out');
            dispatch({ type: 'logout' })
            
        }, function (error) {
            console.error('Sign Out Error', error);
        });
    }
}


export {
    SignupFunc,
    LoginFunc,
    Logout
}