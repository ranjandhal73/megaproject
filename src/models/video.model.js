import mongoose, {Schema} from "mongoose";
import mongooseAggregatePaginate from "mongoose-aggregate-paginate-v2";

const videoSchema = new Schema({
    videoFile: {
        type: String, //cloudinary url
        required: true
    },
    thumbnail: {
        type: String,//cloudinary url
        required: true
    },
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    duration: {
        type: Number,//cloudinary url
        required: true
    },
    views: {
        type: Number,//cloudinary url
        default: 0
    },
    isPublished: {
        type: Boolean,//cloudinary url
        default: true
    },
    videoOwner: {
        type: Schema.Types.ObjectId,
        ref: 'User'
    }
},{timestamps: true})

videoSchema.plugin(mongooseAggregatePaginate);

export default Video = mongoose.model('Video', videoSchema)