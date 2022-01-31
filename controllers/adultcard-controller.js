const { Adultcard, Adult } = require('../models');

const adultcardController = {

    // get all Adultcards
    getAllAdultcards(req, res) {
        Adultcard.find({})
            .then(dbAdultcardData => res.json(dbAdultcardData))
            .catch(err => {
                console.log(err);
                res.status(400).json(err);
            })
    },

    // get one Adultcard by Id
    getAdultcardById({ params }, res) {
        Adultcard.findOne({ _id: params.id })
            .then(dbAdultcardData => {
                if (!dbAdultcardData) {
                    res.status(404).json({ message: 'No Adultcard found with this id! '});
                    return;
                }
                res.json(dbAdultcardData);
            })
            .catch(err => {
                console.log(err);
                res.status(400).json(err);
            });
    },

    // create Adultcard
    addAdultcard({ body }, res) {
        Adultcard.create(body)
            .then(({ _id }) => {
                return Adult.findOneAndUpdate(
                    { adultId: body.adultId },
                    { $push: { vaxAdultcards: _id } },
                    { new: true, runValidators: true }
                );
            })
            .then(dbAdultcardData => res.json(dbAdultcardData))
            .catch(err => res.status(400).json(err));
    },

    // update Adultcard by id
    updateAdultcard({ params, body}, res) {
        Adultcard.findOneAndUpdate({ _id: params.id }, body, { new: true })
            .then(updatedAdultcard => {
                if (!updatedAdultcard) {
                    res.status(404).json({ message: 'No Adultcard record found with this id!' });
                    return;
                }
                res.json(updatedAdultcard);
            })
            .catch(err => res.status(400).json(err));
    },

    // delete Adultcard
    deleteAdultcard({ params }, res) {
        Adultcard.findOneAndDelete({ _id: params.id })
            .then(deletedAdultcard => {
                if (!deletedAdultcard) {
                    return res.status(404).json({ message: 'No Adultcard record found with this id!' });
                }
                return Adult.findOneAndUpdate(
                    { adultId: body.adultId },
                    { $push: { vaxAdultcards: _id } },
                    { new: true, runValidators: true }
                );
            })
            .then(dbAdultcardData => {
                if (!dbAdultcardData) {
                    res.status(404).json({ message: 'Adultcard has been deleted!' });
                    return;
                }
                res.json(dbAdultcardData);
            })
            .catch(err => res.status(400).json(err));
    }

};

module.exports = adultcardController;