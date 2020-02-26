var router = require("express").Router();
let Exercise = require("../models/exercise.model");

router.route("/").get((req, res) => {
    Exercise.find()
        .then(exercise => res.json(exercises))
        .catch(err => res.status(400).json("Error: " + err));
});

router.route("/add").post((req, res) => {
    var username = req.body.username
    var description = req.body.description;
    var duration = Number(req.body.username);
    var date = Date.parse(req.body.date);


    var newExercise = new Exercise({
        username,
        description,
        duration,
        date,
    });

    newExercise.save()
        .then(() => res.json("Exercise added"))
        .catch(err => res.status(400).json("Error: " + err));
});

router.route("/id").get((req, res) => {
    Exercise.findById(req.params.id)
        .then(exercise => res.json(exercise))
        .catch(err => res.status(400).json("Error: " + err));
});
router.route("/:id").delete((req, res) => {
    Exercise.findByIdAndDelete(req.params.id)
        .then(() => res.json("Exercise deleted."))
        .catch(err => res.status(400).json("Error: " + err));
});

router.route("/update/:id").post((req, res) => {
    Exercise.findById(req.params.id)
        .then(exercise => {
            exercise.username = req.body.username;
            exercise.description = req.body.description;
            exercise.duration = Number(req.body.duration);
            exercise.date = Date.parse(req.body.date);

            exercise.save()
                .then(() => res.json("Exercise updated!"))
                .catch(err => res.status(400).json("Error: " + err));

        })
        .catch(err => res.status(400).json("Error: " + err));
});
module.exports = router; 