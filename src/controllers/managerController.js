const managerModel = require("../models/managerModel")

const managerController = {
    create: async (req, res) => {
        try {
            const manager = await managerModel.create(req.body)
            res.send(manager)
        } catch (error) {
            console.log(error)
        }
    }
}

module.exports = managerController