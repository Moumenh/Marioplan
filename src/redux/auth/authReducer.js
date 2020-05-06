
const INTIAL_STATE ={
    authError: null
}

export const authReducer = (state=INTIAL_STATE,action) => {
    switch (action.type) {
        case 'LOGIN_ERROR':
            console.log('login error')
            return {
                ...state,
                authError: 'Login failed'
            }
        case 'LOGIN_SUCCESS':
            console.log('login success')
            return {
                ...state,
                authError:null
            }
        case 'SIGNOUT_SUCCESS':
            console.log('signed out')
            return state; // we don't need to modify or remove anything so just return it
            case 'SIGNUP_SUCCESS':
                console.log('signup success')
                return{
                    ...state,
                    authError:null
                }
            case 'SIGNUP_ERROR':
                console.log('SIGNUP_ERROR')
                return{
                    ...state,
                    authError: action.err.message
                }    
        
            default:
            return state;
    }
    
}


