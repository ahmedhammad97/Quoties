import Api from './Api'

export default {
  likeQuote(id, quoteId){
    return Api().post('like', {
      id : id,
      quoteId : quoteId
    });
  },
  deleteQuote(quoteId){
    return Api().delete(`deleteQuote/${quoteId}`);
  }
}
