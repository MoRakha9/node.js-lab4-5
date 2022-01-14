// subscribe => POST /plans/subscribe/:plan_id body => userId

const express = require("express");
const { Plan } = require("../models/plan");


const router = express.Router()


router.post("/:id", async(req, res) => {
    let plan = await Plan.findById(req.params.id);

    plan.users.push(req.body.userid);
    await plan.save()
    res.json(plan)

})

module.exports = router












// unsubscribe => the opposite

// {
//     "_id": "61de2ca6862d3424e02f2d16",
//     "name": "Doha Kassem 2",
//     "email": "doha2@gmail.com",
//     "password": "dsdfadsf",
//     "age": 25,
//     "isAdmin": true,
//     "__v": 0
// } {
//     "_id": "61de2daf862d3424e02f2d19",
//     "name": "plan a",
//     "price": 255,
//     "users": [],
//     "__v": 1
// },