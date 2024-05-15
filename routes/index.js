var express = require('express');
var router = express.Router();

const messages = [
  {
    text: "Hi there!",
    user: "Amando",
    added: new Date(),
  },
  {
    text: "Hello World!",
    user: "Charles",
    added: new Date(),
  }
];

/* GET home page. */
router.get('/', function(req, res, next) {
  const title = "Mini Mesageboard";
  res.render('index', { title, messages });
});

router.get('/new', (req, res, next)=>{
  const title = "New Message"
  res.render('form', {title})
})

router.post('/new', (req, res, next)=>{
  const {name, text} = req.body;
  messages.push({text, user: name, added: new Date()});
  res.redirect('/');
})

module.exports = router;
