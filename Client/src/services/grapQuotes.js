import Api from './Api'

export default {
  search(searchTerm){
    return Api().post('search', {searchTerm : searchTerm});
  },
  trending(){
    return Api().post('trending');
  },
  profile(username){
    return Api().post('profile', {username : username});
  }
}
