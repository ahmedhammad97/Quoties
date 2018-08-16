import Api from './Api'

export default {
  search(id, searchRegex){
    return Api().post('search', {searchRegex : searchRegex, id : id});
  },
  trending(id){
    return Api().post('trending', {id : id});
  },
  profile(id, visitorUsename){
    return Api().post('profile', {id : id, visitorUsename : visitorUsename});
  }
}
