const router = require("express").Router();
const Post = require("../models/Post");
const { replaceWordWithEmoji } = require("../lib/emoji");

// router post with emoji converted words
router.post("/post", async (req, res) => {
  try {
    if (req.body.replaceWithEmoji) {
      const body = replaceWordWithEmoji(req.body);
      const newPost = await Post.create(body);
      res.json(newPost);
    } else {
      const newPost = await Post.create(req.body);
      res.json(newPost);
    }
  
  } catch (err) {
    res.status(500).json(err.message);
  }
});

// router get
router.get("/post", async (req, res) => {
  try {
    const postData = await Post.findAll({});
    const posts = postData.map((post) => post.get({ plain: true }));
    res.json(posts);
  } catch (err) {
    res.status(500).json(err.message);
  }
});

module.exports = router;
