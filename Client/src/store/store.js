import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export const store = new Vuex.Store({
    strict: true,

    state: {
      loggedIn : document.cookie,
      cookiesAlert : true,
      username : "",
      email : "",
      fullname : "",
      id : ""
    },

    mutations : {
      checkLoginState(state){
        state.loggedIn = document.cookie?true:false;
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
