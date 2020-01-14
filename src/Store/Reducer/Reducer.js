const intail_state = {
    Signup: false,
    Login: false,
    name: 'snackbar',
    err: ''

}
const Reducer = (state = intail_state, action) => {
    switch (action.type) {
        case "success": return state

    case 'sucess': return state

        case 'showErr':
            state.err = action.payload
            state.name = 'show'
            return { ...state, name: state.name, err: state.err.concat() }


        case 'hideErr':
            state.err = ''
            state.name = 'snackbar'
            return { ...state, name: state.name, err: state.err.concat() }

            case 'Logout': return state
        
        default: return state
    }
}

export default Reducer