/*
 * FILE: index.js
 * GET home page.
 */
 
exports.index = function(req, res){
  res.render('index', { title: 'Mi primer página con Node.js para IV' });
};
