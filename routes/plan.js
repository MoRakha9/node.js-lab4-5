const express = require("express");
const { Plan, validateplan } = require("../models/plan");

const router = express.Router()

router.get("/", async(req, res) => {
    const plans = await Plan.find()
    res.json(plans)
})

router.get("/:id", async(req, res) => {
    const plan = await Plan.findById(req.params.id);
    res.json(plan)
})

router.post("/", async(req, res) => {
    console.log(req.user);
    if (req.user.isAdmin) {
        const { error } = validateplan(req.body);
        if (error) return res.status(400).json({ message: error.details[0].message });
        const plan = new Plan(req.body);
        const resulto = await plan.save();
        res.json(resulto)

    }
    res.status(401).json({ message: "must be admin" })
});



router.put("/:id", async(req, res) => {
    console.log(req.user);
    if (req.user.isAdmin) {
        const plan = await Plan.findById(req.params.id);
        plan.name = req.body.name
        plan.price = req.body.price
        await plan.save();
        res.json(plan)

    }
    res.status(401).json({ message: "Only admin can do this" })

    await plan.save();
    res.json(plan)
})

router.delete("/:id", async(req, res) => {
    if (req.user.isAdmin) {

        const result = await Plan.findByIdAndDelete(req.params.id);
        res.json(result)

    }
    res.status(401).json({ message: "Only admin can do this" })
})

module.exports = router