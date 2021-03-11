const mongoose = require('mongoose');

const taskSchema = mongoose.Schema( {
    description: {
        type: String,
        required: true,
        trim: true,
    },
    isDone: {
        type: Boolean,
        required: false,
        default: false
    }
});

taskSchema.pre('save', async function(next) {

    console.log('Pre save task');
    next();
})

const Task = mongoose.model('Task', taskSchema);


module.exports = Task;
