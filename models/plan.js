const mongoose = require("mongoose");

const planSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    users: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "user"
    }]
});

const Plan = mongoose.model("Plan", planSchema);

const validateplan = (plan) =>{
    const schema = joi.object({
        name: joi.string().required()
    })
    return schema.validate(plan)
}

module.exports = { Plan, validateplan };