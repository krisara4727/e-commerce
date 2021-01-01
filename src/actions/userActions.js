import { USER_SIGNIN_REQUEST, USER_SIGNIN_SUCCESS, USER_SIGNIN_FAIL, USER_SIGNOUT, USER_REGISTER_REQUEST, USER_REGISTER_SUCCESS, USER_REGISTER_FAIL, USER_DETAILS_REQUEST, USER_DETAILS_SUCCESS, USER_DETAILS_FAIL, USER_UPDATE_REQUEST, USER_UPDATE_SUCCESS, USER_UPDATE_FAIL } from "../constants/userConstants";
import axios from "axios";


export const signInUser = (email,password) => async(dispatch) => {
    dispatch({
        type:USER_SIGNIN_REQUEST,
        payload: {
            email,
            password
        }
    })
    try{
        const {data} = await axios.post('/api/users/signin',{
            email,
            password
        });
        dispatch({
            type: USER_SIGNIN_SUCCESS,
            payload: data
        })
        localStorage.setItem('userInfo',JSON.stringify(data));
    }
    catch(error){
        dispatch({
            type: USER_SIGNIN_FAIL,
            payload: error.response && error.response.data.message ?
            error.response.data.message :
            error.message
        })
    }
}

export const signout = () => (dispatch) => {
    localStorage.removeItem('userInfo');
    localStorage.removeItem('cartItems');
    localStorage.removeItem('shippingAddress');
    dispatch({
        type: USER_SIGNOUT,
    })
}
export const registerUser = (name,email,password) => async(dispatch) => {
    dispatch({
        type:USER_REGISTER_REQUEST,
        payload: {
            name,
            email,
            password
        }
    })
    try{
        const {data} = await axios.post('/api/users/register',{
            name,
            email,
            password
        });
        dispatch({ type: USER_REGISTER_SUCCESS,payload: data});
        dispatch({type: USER_SIGNIN_SUCCESS,payload:data});
        localStorage.setItem('userInfo',JSON.stringify(data));
    }
    catch(error){
        dispatch({
            type: USER_REGISTER_FAIL,
            payload: error.response && error.response.data.message ?
            error.response.data.message :
            error.message
        })
    }
}

export const detailsUser = (userId) => async (dispatch, getState) => {
    dispatch({ type: USER_DETAILS_REQUEST, payload: userId });
    const {
      userSignin: { userInfo },
    } = getState();
    try {
      const { data } = await axios.get(`/api/users/${userId}`, {
        headers: { Authorization: `Bearer ${userInfo.token}` },
      });
      dispatch({ type: USER_DETAILS_SUCCESS, payload: data });
    } catch (error) {
      const message =
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message;
      dispatch({ type: USER_DETAILS_FAIL, payload: message });
    }
  };

export const updateUser = (user) => async(dispatch,getState) => {
    dispatch({
        type:USER_UPDATE_REQUEST,
        payload:user
    });
    try{
        const {userSignin:{userInfo}} = getState();
        const {data} = await axios.put(`/api/users/profile`,user,{
            headers:{
                Authorization:`Bearer ${userInfo.token}`
            }
        })
        dispatch({type:USER_UPDATE_SUCCESS,payload:data});
        dispatch({ type: USER_SIGNIN_SUCCESS, payload: data });
        localStorage.setItem('userInfo', JSON.stringify(data));
    }catch(error){
        const message =
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message;
      dispatch({ type: USER_UPDATE_FAIL, payload: message });
    }
}