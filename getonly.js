/* Create middleware to only accept get requests */
module.exports = function(request, response, next){
  if (request.method === 'GET') {
    next();
    } else {
      //response.send('Method is not allowed');
      // json response
      response.status(405).json('405 - Method is not allowed');
    }
};
