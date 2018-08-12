import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export const store = new Vuex.Store({
    strict: true,
    state: {
      loggedIn : true,
      cookiesAlert : true,
      username : "ahmedhammad97",
      email : "hammad97official@gmail.com",
      fullname : "Ahmed Hammad"
    },
    mutations : {
      login(state){
        state.loggedIn = true;
      },
      logout(state){
        state.loggedIn = false;
      },
      hideCookiesAlert(state){
        state.cookiesAlert = false;
      },
      userdata(state, username, fullname, email){
        state.username = username;
        state.fullname = fullname;
        state.email = email;
      }
    }
})
