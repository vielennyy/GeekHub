import express from "express"

const userRouter = express.Router()

userRouter.post('/register/:lenaTestParam', (req, res) => {
    // res.status(404);
    // res.send('Hello register');
    // res.download('./app_express.js', 'island.jpg');
    // res.redirect('http://google.com');
    // res.set('Content-type', 'text/plain');
    // res.cookie('sashaCokie', 'jdkl', {});
    res.status(404).end()
});

userRouter.post('/login', (req, res) => {
    res.send('Hello login');
});

export {userRouter}

// console.log('Query: ', req.query);
// console.log('Psrams: ', req.params);
// console.log('Body: ', req.body);