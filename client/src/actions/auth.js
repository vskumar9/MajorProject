import * as api from '../api'
import { setCurrentUser } from './currentUser'


// export const loadUser = () => async (dispath)=>{
//     const localUser = JSON.parse(localStorage.getItem("user_info"))
//     if(localUser){
//         dispath({type: 'AUTH', data: localUser})
//     }
// }

export const signupGoogle = (accessToken, navigate) => async (dispatch)=>{
    try{
        // signup user
        const {data} = await api.signUpGoogle(accessToken)
        dispatch({type : 'AUTH', data})
        dispatch(setCurrentUser( JSON.parse(localStorage.getItem('Profile')) ))
        navigate("/")
    }catch(err){
        console.log(err)
        alert("User already exist!")
    }
}

export const signup = (authData, navigate) => async (dispatch) => {
    try {
        const { data } = await api.signUp(authData)
        dispatch({ type: 'AUTH', data})
        dispatch(setCurrentUser( JSON.parse(localStorage.getItem('Profile')) ))
        navigate('/')
    } catch (error) {
        console.log(error)
        alert("User already exist!")
    }
}


export const signinGoogle = (accessToken, navigate) => async (dispatch)=>{
    try{
        // login user
        const {data} = await api.signInGoogle(accessToken)

        dispatch({type : 'AUTH', data})
        dispatch(setCurrentUser( JSON.parse(localStorage.getItem('Profile')) ))
        navigate("/")
    }catch(err){
        console.log(err)
        alert("User not already exist!")
    }
}

export const login = (authData, navigate) => async (dispatch) => {
    try {
        const { data } = await api.logIn(authData)
        dispatch({ type: 'AUTH', data})
        dispatch(setCurrentUser( JSON.parse(localStorage.getItem('Profile')) ))
        navigate('/')
    } catch (error) {
        console.log(error)
        alert("User not already exist!")
    }
}
