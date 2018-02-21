import mongoose, {
    Schema
} from 'mongoose';

/**
 * Create database scheme for tasks
 */

const TaskScheme = new Schema({
    text: {
        type: String,
        required: 'What is the task?'
    },
    complete: {
        type: Boolean,
        default: false
    }
});

export default mongoose.model('Task', TaskScheme);