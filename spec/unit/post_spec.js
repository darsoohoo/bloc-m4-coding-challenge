const sequelize = require("../../src/db/models/index").sequelize;
const Post = require("../../src/db/models").Post;

describe("Post", () => {


    describe("#create()", () => {

        it("should create a post with a title and description", (done) => {

          Post.create({
            title: "Really Nice Title",
            description: "This is a really cool description."
          })
          .then((post) => {
   
            expect(post.title).toBe("Really Nice Title");
            expect(post.description).toBe("This is a really cool description.");
            done();
   
          })
          .catch((err) => {
            console.log(err);
            done();
          });
        });
   
    });


});