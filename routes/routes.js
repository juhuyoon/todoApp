const router = require('express').Router();


router.get('/', (req, res) => {
    res.send('Hello World!');
});


router.get('/login', (req, res) => {
    res.send('Hello Login!');
});

router.get('/post', (req, res) => {
    res.send('Hello post!');
})

module.exports = router;