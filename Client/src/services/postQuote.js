import Api from './Api'

export default {
  postQuote(username, quoteBody){
    return Api().post('postQuote', {
      username : username,
      quoteBody : quoteBody
    });
  }
}
