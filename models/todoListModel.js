import mongoose, {
    Schema
} from 'mongoose';

const TaskScheme = new Schema({
    id: Number,
    text: String,
    complete: Boolean
});

export default mongoose.model('Task', TaskScheme);