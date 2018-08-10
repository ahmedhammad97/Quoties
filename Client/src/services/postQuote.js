import Api from './Api'

export default {
  postQuote(username, quoteBody){
    return Api().post('search', {
      username : username,
      quoteBody : quoteBody
    });
  }
