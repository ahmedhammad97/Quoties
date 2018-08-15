import Api from './Api'

export default {
  login(username, password) {
    return Api().post('login', {
      username : username,
      password : password
    })
  },

  register(username, password, email, fullname) {
    return Api().post('register', {
      username : username,
      password : password,
      email : email,
      fullname : fullname
    })
  },

  
  facebookAuth(){
    return Api().get('auth/facebook')
  },

  googleAuth(){
    return Api().get('auth/google')
  }
}
