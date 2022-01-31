const { Childcard, Adult } = require('../models');

const childcardController = {

    // get all Cards
    getAllChildcards(req, res) {
        Childcard.find({})
            .then(dbChildcardData => res.json(dbChildcardData))
            .catch(err => {
                console.log(err);
                res.status(400).json(err);
            })
    },

    // get one Childcard by Id
    getChildcardById({ params }, res) {
        Childcard.findOne({ _id: params.id })
            .then(dbChildcardData => {
                if (!dbChildcardData) {
                    res.status(404).json({ message: 'No Card found with this id! '});
                    return;
                }
                res.json(dbChildcardData);
            })
            .catch(err => {
                console.log(err);
                res.status(400).json(err);
            });
    },

    // create Child Card
    addChildcard({ body }, res) {
        Childcard.create(body)
            .then(({ _id }) => {
                return Adult.findOneAndUpdate(
                    { childId: body.childId },
                    { $push: { vaxCards: _id } },
                    { new: true, runValidators: true }
                );
            })
            .then(dbChildcardData => res.json(dbChildcardData))
            .catch(err => res.status(400).json(err));
    },

    // update Childcard by id
    updateChildcard({ params, body}, res) {
        Childcard.findOneAndUpdate({ _id: params.id }, body, { new: true })
            .then(updatedChildcard => {
                if (!updatedChildcard) {
                    res.status(404).json({ message: 'No Card record found with this id!' });
                    return;
                }
                res.json(updatedChildcard);
            })
            .catch(err => res.status(400).json(err));
    },

    // delete Child Card
    deleteChildcard({ params }, res) {
        Childcard.findOneAndDelete({ _id: params.id })
            .then(deletedChildcard => {
                if (!deletedChildcard) {
                    return res.status(404).json({ message: 'No Card record found with this id!' });
                }
                return Adult.findOneAndUpdate(
                    { childId: body.childId },
                    { $push: { vaxCards: _id } },
                    { new: true, runValidators: true }
                );
            })
            .then(dbChildcardData => {
                if (!dbChildcardData) {
                    res.status(404).json({ message: 'Card has been deleted!' });
                    return;
                }
                res.json(dbChildcardData);
            })
            .catch(err => res.status(400).json(err));
    }

};

module.exports = childcardController;