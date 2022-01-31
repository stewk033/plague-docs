const { Child, Adult } = require('../models');

const childController = {

   // get all Children
    getAllChildren(req, res) {
        Child.find({})
            .sort({ _id: -1 })
            .then(dbChildData => res.json(dbChildData))
            .catch(err => {
                console.log(err);
                res.status(400).json(err);
            });
    },

    // get one Child by id
    getChildById({ params }, res) {
        Child.findOne({ _id: params.id })
            .then(dbChildData => {
                if (!dbChildData) {
                    res.status(404).json({ message: 'No Child found with this id!'});
                    return;
                }
            res.json(dbChildData);
        })
        .catch(err => {
            console.group(err);
            res.status(400).json(err);
        })
    },

    // create Child
    addChild({ body }, res) {
        Child.create(body)
            .then(({ _id }) => {
                return Adult.findOneAndUpdate(
                    { _id: body.parentGuardian },
                    { $push: { children: _id } },
                    { new: true, runValidators: true }
                );
            })
            .then(dbChildData => {
                if (!dbChildData) {
                    res.status(404).json({ message: 'No Child found with this id!' });
                    return;
                }
                res.json(dbChildData);
            })
            .catch(err => res.status(400).json(err));
    },

    // update Child by id
    updateChild({ params, body }, res) {
        Child.findOneAndUpdate({ _id: params.id }, body, { new: true })
            .then(dbChildData => {
                if (!dbChildData) {
                    res.status(404).json({ message: 'No Child found with this id!' });
                    return;
                }
                res.json(dbChildData);
            })
            .catch(err => res.status(400).json(err));
    },

    // delete Child
    deleteChild({ params }, res) {
        Child.findOneAndDelete({ _id: params.id })
            .then(dbChildData => {
                if (!dbChildData) {
                    res.status(404).json({ message: 'No Child found with this id!' });
                    return;
                }
                res.json(dbChildData);
            })
        .catch(err => res.status(400).json(err));
    }

};

module.exports = childController;