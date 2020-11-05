const express = require('express');
const router = express.Router();

/* GET posts index /posts */
router.get('/', (req, res, next) => {
    res.send("It's Working!!!");
  });

/* GET posts new /posts/new */
router.get('/new', (req, res, next) => {
  res.send("New Route it's Working!!!");
});

/* POST posts create /posts */
router.post('/', (req, res, next) => {
  res.send("CREATE It's Working!!!");
});

/* GET posts show /posts/:id */
router.get('/:id', (req, res, next) => {
  res.send("SHOW It's Working!!!");
});

/* GET posts edit /posts/:id/edit */
router.get('/:id/edit', (req, res, next) => {
  res.send("EDIT It's Working!!!");
});

/* PUT posts update /posts/:id */
router.put('/:id', (req, res, next) => {
  res.send("PUT It's Working!!!");
});

/* DELETE posts destroy /posts/:id */
router.delete('/:id', (req, res, next) => {
  res.send("DELETE It's Working!!!");
});
  
  module.exports = router;
  