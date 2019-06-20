//#1
const postQueries = require("../db/queries.posts.js");

module.exports = {


    index(req, res, next){
     
        postQueries.getAllPosts((err, posts) => {
            if(err){
                res.redirect(500, "static/index");
            } else {
                res.render("static/index", {posts});
            }
        })
    },


    create(req, res, next){
        let newPost = {
            title: req.body.title,
            description: req.body.description
        };
        postQueries.addPost(newPost, (err, post) => {
            if(err){
                res.redirect(500, "/");
            } else {
                res.redirect(303, `/`);
            }
        });
    }



}