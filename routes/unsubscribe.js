const express = require("express");

const { Plan } = require("../models/plan");

const router = express.Router()
router.put("/:id", async(req, res) => {
    let plan = await Plan.findById(req.params.id);
    let unsubscribed = plan.users.filter((uid) => {
        if (uid != req.body.userid) {
            return uid
        }

    })
    plan.users = unsubscribed;
    await plan.save()
    res.json(plan)

})
module.exports = router