import Api from './Api'

export default {
  search(id, searchRegex){
    return Api().post('search', {searchRegex : searchRegex, id : id});
  },
  trending(){
    return Api().post('trending');
  },
  profile(id, username){
    return Api().post('profile', {id : id, username : username});
  }
}
