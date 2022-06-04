const router = require("express").Router();
const {
    getAllThoughts,
    createThought,
    getThoughtById,
    updateThought,
    deleteThought,
    createReaction, 
    deleteReaction,
} = require("../../controllers/thought-controller");

router. 
route("./")
.get(getAllThoughts)
.post(createThought)

router
.route(":id")
.get(getThoughtById)
.put(updateThought)
.delete(deleteThought);


router
.route("/:thought/reactions")
.post(createReaction)
.delete(deleteReaction)


module.exports = route;