import Api from './Api'

export default {
  search(searchTerm){
    return Api().post('search', {searchTerm : searchTerm});
  },
  trending(){
    return Api().post('trending');
  },
  profile(id, username){
    return Api().post('profile', {id : id, username : username});
  }
}
