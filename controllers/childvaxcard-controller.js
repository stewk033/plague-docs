const { Childvaxcard, Adult } = require('../models');

const ChildvaxcardController = {

    // get all Cards
    getAllChildvaxcards(req, res) {
        Childvaxcard.find({})
            .then(dbChildvaxcardData => res.json(dbChildvaxcardData))
            .catch(err => {
                console.log(err);
                res.status(400).json(err);
            })
    },

    // get one Childvaxcard by Id
    getChildvaxcardById({ params }, res) {
        Childvaxcard.findOne({ _id: params.id })
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

    // create Child Card
    addChildvaxcard({ body }, res) {
        Childvaxcard.create(body)
            .then(({ _id }) => {
                return Adult.findOneAndUpdate(
                    { childId: body.childId },
                    { $push: { vaxCards: _id } },
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

    // delete Child Card
    deleteChildvaxcard({ params }, res) {
        Childvaxcard.findOneAndDelete({ _id: params.id })
            .then(deletedChildvaxcard => {
                if (!deletedChildvaxcard) {
                    return res.status(404).json({ message: 'No Card record found with this id!' });
                }
                return Adult.findOneAndUpdate(
                    { childId: body.childId },
                    { $push: { vaxCards: _id } },
                    { new: true, runValidators: true }
                );
            })
            .then(dbChildvaxcardData => {
                if (!dbChildvaxcardData) {
                    res.status(404).json({ message: 'Card has been deleted!' });
                    return;
                }
                res.json(dbChildvaxcardData);
            })
            .catch(err => res.status(400).json(err));
    }

};

module.exports = ChildvaxcardController;