import { auth } from '../../config/env/firebase'
import { createStorage, getDataFromStorage,cleanFromStorage } from '../../localStorage/localStorage'

export const authMethods = {
  // firebase helper methods go here... 
  signup: (inputs, setErrors, setToken) => {
    auth.createUserWithEmailAndPassword(inputs.email, inputs.password)
      .then(res => {
        const user = {
          ...inputs,
          uid: res.user.uid,
          displayName: res.user.displayName
        }
        debugger;
        auth.currentUser.getIdToken(true).then(async (idToken) => {
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
    auth.signInWithEmailAndPassword(email, password)
      //everything is almost exactly the same as the function above
      .then(async res => {
        auth.currentUser.getIdToken(true).then(async (idToken) => {
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
  signout: (setErrors, setToken) => {
    // signOut is a no argument function
    auth.signOut().then(res => {
      //remove the token
      cleanFromStorage('app-token')
      //set the token back to original state
      setToken(null)
    })
      .catch(err => {
        //there shouldn't every be an error from firebase but just in case
        setErrors(prev => ([...prev, err.message]))
        //whether firebase does the trick or not i want my user to do there thing.
        localStorage.removeItem('token')
        setToken(null)
        console.error(err.message)
      })
  },

}