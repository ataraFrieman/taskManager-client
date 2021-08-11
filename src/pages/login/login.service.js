import { auth } from '../../config/env/firebase'
import { createStorage, getDataFromStorage } from '../../localStorage/localStorage'

export const authMethods = {
  // firebase helper methods go here... 
  signup: (email, password, setErrors, setToken) => {
    auth.createUserWithEmailAndPassword(email, password)
      .then(res => {
        auth.currentUser.getIdToken(true).then(async (idToken)=> {
          await createStorage('app-token', idToken);
          setToken(getDataFromStorage('app-token'))
          console.log(res)
        }).catch(function (error) {
          console.log(error)
        });

      })
      .catch(err => {
        setErrors(prev => ([...prev, err.message]))
      })
  },

  signin: (email, password, setErrors, setToken) => {
    //change from create users to...
    auth.signInWithEmailAndPassword(email,password) 
      //everything is almost exactly the same as the function above
      .then( async res => {
        auth.currentUser.getIdToken(true).then(async (idToken)=> {
          await createStorage('app-token', idToken);
          setToken(getDataFromStorage('app-token'))
          console.log(res)
        }).catch(function (error) {
          console.log(error)
        });
      })
      .catch(err => {
        setErrors(prev => ([...prev, err.message]))
      })
    },
  signout: (email, password) => {

  },
}