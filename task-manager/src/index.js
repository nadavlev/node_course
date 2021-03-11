const express = require('express');
require('./db/mongoose');
const userRouter = require('./routers/user');
const taskRouter = require('./routers/task');

const app = express();
const port = process.env.PORT || 3000;

// app.use((req, res, next) => {
//     console.log(`req: ${req.method}, path: ${req.path}`);
//     next();
// })

app.use(express.json());
app.use(userRouter);
app.use(taskRouter);


// const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const myFunction = async () => {
    // const password = 'Testing123!';
    // const salt = await bcrypt.genSalt(10)
    // const hashedPassword = await bcrypt.hash(password, salt);
    // console.log(hashedPassword);
    //
    // const isMatch = await bcrypt.compare(password, hashedPassword);
    // console.log(`is Match: ${isMatch}`);
    const token = jwt.sign({_id: "123456"}, "thisismysecrete", {expiresIn: '1 seconds'} );
    console.log(token);
    const data = jwt.verify(token,"thisismysecrete" )
    console.log(data);
}
myFunction();

app.listen(port, () => {
    console.log(`Server listening on ${port}`);
})
