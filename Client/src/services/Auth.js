import Api from './Api'

export default {
  register(credentials) {
    return Api().post('register', credentials)
  },
  login(credentials) {
    return Api().post('login', credentials)
  },
  facebookAuth(){
    return Api().get('auth/facebook')
  },
  googleAuth(){
    return Api().get('auth/google')
  }
}
