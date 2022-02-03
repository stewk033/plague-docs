const { Childvaxcard, Child } = require('../models');

const ChildvaxcardController = {

    // get all Cards
    getAllChildvaxcards(req, res) {
        Childvaxcard.find({})
            .populate({ path: 'childId', select: '-__v' })
            .select('-__v')
            .then(dbChildvaxcardData => res.json(dbChildvaxcardData))
            .catch(err => {
                console.log(err);
                res.status(400).json(err);
            })
    },

    // get one Childvaxcard by Id
    getChildvaxcardById({ params }, res) {
        Childvaxcard.findOne({ _id: params.id })
            .populate({ path: 'childId', select: '-__v' })
            .select('-__v')
            .then(dbChildvaxcardData => {
                if (!dbChildvaxcardData) {
                    res.status(404).json({ message: 'No Card found with this id! '});
                    return;
                }
                res.json(dbChildvaxcardData);
            })
            .catch(err => {
                console.log(err);
                res.status(400).json(err);
            });
    },

    // create Childvaxcard
    addChildvaxcard({ body }, res) {
        Childvaxcard.create(body)
            .then(({ _id }) => {
                return Child.findOneAndUpdate(
                    { _id: body.childId },
                    { $push: { childvaxcards: _id } },
                    { new: true, runValidators: true }
                );
            })
            .then(dbChildvaxcardData => res.json(dbChildvaxcardData))
            .catch(err => res.status(400).json(err));
    },

    // update Childvaxcard by id
    updateChildvaxcard({ params, body}, res) {
        Childvaxcard.findOneAndUpdate({ _id: params.id }, body, { new: true })
            .then(updatedChildvaxcard => {
                if (!updatedChildvaxcard) {
                    res.status(404).json({ message: 'No Card record found with this id!' });
                    return;
                }
                res.json(updatedChildvaxcard);
            })
            .catch(err => res.status(400).json(err));
    },

    // delete Childvaxcard
    deleteChildvaxcard({ params }, res) {
        Childvaxcard.findOneAndDelete({ _id: params.id })
            .then(deletedChildvaxcard => {
                if (!deletedChildvaxcard) {
                    return res.status(404).json({ message: 'No Childvaxcard record found with this id!' });
                }
                return Child.findOneAndUpdate(
                    { _id: params.childIdId },
                    { $pull: { childvaxcards: params.id } },
                    { new: true }
                );
            })
            .then(dbChildvaxcardData => {
                if (!dbChildvaxcardData) {
                    res.status(404).json({ message: 'Childvaxcard has been deleted!' });
                    return;
                }
                res.json(dbChildvaxcardData);
            })
            .catch(err => res.json(err));
    }
};

module.exports = ChildvaxcardController;