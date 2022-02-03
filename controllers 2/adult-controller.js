const { Adult } = require('../models');

const adultController = {

    // get all adults
    getAllAdults(req, res) {
        Adult.find({})
            .populate({ path: 'children', select: '-__v -childvaxcards' })
            .select('-__v')
            .then(dbAdultData => res.json(dbAdultData))
            .catch(err => {
                console.log(err);
                res.status(400).json(err);
            })
    },

    // get one adult by Id
    getAdultById({ params }, res) {
        Adult.findOne({ _id: params.id })
            .populate({ path: 'children', select: '-__v -childvaxcards' })
            .select('-__v')
            .then(dbAdultData => {
                if (!dbAdultData) {
                    res.status(404).json({ message: 'No Adult found with this id! '});
                    return;
                }
                res.json(dbAdultData);
            })
            .catch(err => {
                console.log(err);
                res.status(400).json(err);
            });
    },

    // create adult
    addAdult({ body }, res) {
        Adult.create(body)
            .then(dbAdultData => res.json(dbAdultData))
            .catch(err => res.status(400).json(err));
    },

    // update adult by id
    updateAdult({ params, body}, res) {
        Adult.findOneAndUpdate({ _id: params.id }, body, { new: true })
            .then(dbAdultData => {
                if (!dbAdultData) {
                    res.status(404).json({ message: 'No Adult record found with this id!' });
                    return;
                }
                res.json(dbAdultData);
            })
            .catch(err => res.status(400).json(err));
    },

    // delete Adult
    deleteAdult({ params }, res) {
        Adult.findOneAndDelete({ _id: params.id })
            .then(dbAdultData => {
                if (!dbAdultData) {
                    res.status(404).json({ message: 'No Adult record found with this id!' });
                    return;
                }
                res.json(dbAdultData);
            })
            .catch(err => res.status(400).json(err));
    }

};

module.exports = adultController;