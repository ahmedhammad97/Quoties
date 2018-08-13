import Api from './Api'

export default {
  likeQuote(username, quoteId){
    return Api().post('like', {
      username : username,
      quoteId : quoteId
    });
  },
  deleteQuote(quoteId){
    return Api().delete(`deleteQuote/${quoteId}`);
  }
}
