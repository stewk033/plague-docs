const { Card, Child, Adult } = require('../models');

const cardController = {

    // get all Cards
    getAllCards(req, res) {
        Card.find({})
            .then(dbCardData => res.json(dbCardData))
            .catch(err => {
                console.log(err);
                res.status(400).json(err);
            })
    },

    // get one Card by Id
    getCardById({ params }, res) {
        Card.findOne({ _id: params.id })
            .then(dbCardData => {
                if (!dbCardData) {
                    res.status(404).json({ message: 'No Card found with this id! '});
                    return;
                }
                res.json(dbCardData);
            })
            .catch(err => {
                console.log(err);
                res.status(400).json(err);
            });
    },

    // create Adult Card
    addAdultCard({ body }, res) {
        Card.create(body)
            .then(({ _id }) => {
                return Adult.findOneAndUpdate(
                    { adultId: body.adultId },
                    { $push: { vaxCards: _id } },
                    { new: true, runValidators: true }
                );
            })
            .then(dbCardData => res.json(dbCardData))
            .catch(err => res.status(400).json(err));
    },

    // create Child Card
    addChildCard({ body }, res) {
        Card.create(body)
            .then(({ _id }) => {
                return Child.findOneAndUpdate(
                    { childId: body.childId },
                    { $push: { vaxCards: _id } },
                    { new: true, runValidators: true }
                );
            })
            .then(dbCardData => res.json(dbCardData))
            .catch(err => res.status(400).json(err));
    },

    // update Card by id
    updateCard({ params, body}, res) {
        Card.findOneAndUpdate({ _id: params.id }, body, { new: true })
            .then(updatedCard => {
                if (!updatedCard) {
                    res.status(404).json({ message: 'No Card record found with this id!' });
                    return;
                }
                res.json(updatedCard);
            })
            .catch(err => res.status(400).json(err));
    },

    // delete Adult Card
    deleteAdultCard({ params }, res) {
        Card.findOneAndDelete({ _id: params.id })
            .then(deletedCard => {
                if (!deletedCard) {
                    return res.status(404).json({ message: 'No Card record found with this id!' });
                }
                return Adult.findOneAndUpdate(
                    { adultId: body.adultId },
                    { $push: { vaxCards: _id } },
                    { new: true, runValidators: true }
                );
            })
            .then(dbCardData => {
                if (!dbCardData) {
                    res.status(404).json({ message: 'Card has been deleted!' });
                    return;
                }
                res.json(dbCardData);
            })
            .catch(err => res.status(400).json(err));
    },

    // delete Child Card
    deleteChildCard({ params }, res) {
        Card.findOneAndDelete({ _id: params.id })
            .then(deletedCard => {
                if (!deletedCard) {
                    return res.status(404).json({ message: 'No Card record found with this id!' });
                }
                return Child.findOneAndUpdate(
                    { childId: body.childId },
                    { $push: { vaxCards: _id } },
                    { new: true, runValidators: true }
                );
            })
            .then(dbCardData => {
                if (!dbCardData) {
                    res.status(404).json({ message: 'Card has been deleted!' });
                    return;
                }
                res.json(dbCardData);
            })
            .catch(err => res.status(400).json(err));
    }

};

module.exports = cardController;