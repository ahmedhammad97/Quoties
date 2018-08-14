import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export const store = new Vuex.Store({
    strict: true,
    state: {
      loggedIn : false,
      cookiesAlert : true,
      username : "",
      email : "",
      fullname : "",
      id : ""
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
      userdata(state, info){
        state.username = info.username;
        state.fullname = info.fullname;
        state.email = info.email;
        state.id = info.id;
      },
      clearUser(state){
        username = email = fullname = "";
      }
    }
})
