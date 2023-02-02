var mongoose = require('mongoose')
const { SChema } = mongoose

const nationSchema = new SChema(
    {
        _id: mongoose.Schema.Types.ObjectId,
        name: {
            type: String,
            require: true
        },
    },
    {
        timestamps: true
    }
);


export default mongoose.model('Nation', nationSchema)