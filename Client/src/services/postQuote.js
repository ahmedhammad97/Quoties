import Api from './Api'

export default {
  postQuote(quoteBody, username, fullname){
    return Api().post('postQuote', {
      username : username,
      quoteBody : quoteBody,
      fullname : fullname
    });
  }
}
