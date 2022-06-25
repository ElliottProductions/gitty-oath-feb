const { Router } = require('express');
//const jwt = require('jsonwebtoken');
const authenticate = require('../middleware/authenticate');
const Post = require('../models/Post');



module.exports = Router()
  .post('/', authenticate, async (req, res, next) => {
    try {
      const user = await Post.insert(req.body);
      res.json(user);
    } catch (error) {
      next(error);
    }
  });

