const { Adultvaxcard, Adult } = require('../models');

const AdultvaxcardController = {

    // get all Adultvaxcards
    getAllAdultvaxcards(req, res) {
        Adultvaxcard.find({})
            .then(dbAdultvaxcardData => res.json(dbAdultvaxcardData))
            .catch(err => {
                console.log(err);
                res.status(400).json(err);
            })
    },

    // get one Adultvaxcard by Id
    getAdultvaxcardById({ params }, res) {
        Adultvaxcard.findOne({ _id: params.id })
            .then(dbAdultvaxcardData => {
                if (!dbAdultvaxcardData) {
                    res.status(404).json({ message: 'No Adultvaxcard found with this id! '});
                    return;
                }
                res.json(dbAdultvaxcardData);
            })
            .catch(err => {
                console.log(err);
                res.status(400).json(err);
            });
    },

    // create Adultvaxcard
    addAdultvaxcard({ body }, res) {
        Adultvaxcard.create(body)
            .then(({ _id }) => {
                return Adult.findOneAndUpdate(
                    { _id: body.adultId },
                    { $push: { adultvaxcards: _id } },
                    { new: true, runValidators: true }
                );
            })
            .then(dbAdultvaxcardData => res.json(dbAdultvaxcardData))
            .catch(err => res.status(400).json(err));
    },

    // update Adultvaxcard by id
    updateAdultvaxcard({ params, body}, res) {
        Adultvaxcard.findOneAndUpdate({ _id: params.id }, body, { new: true })
            .then(updatedAdultvaxcard => {
                if (!updatedAdultvaxcard) {
                    res.status(404).json({ message: 'No Adultvaxcard record found with this id!' });
                    return;
                }
                res.json(updatedAdultvaxcard);
            })
            .catch(err => res.status(400).json(err));
    },

    // delete Adultvaxcard
    deleteAdultvaxcard({ params }, res) {
        Adultvaxcard.findOneAndDelete({ _id: params.id })
            .then(deletedAdultvaxcard => {
                if (!deletedAdultvaxcard) {
                    return res.status(404).json({ message: 'No Adultvaxcard record found with this id!' });
                }
                return Adult.findOneAndUpdate(
                    { _id: body.adultId },
                    { $pull: { adultvaxcards: _id } },
                    { new: true, runValidators: true }
                );
            })
            .then(dbAdultvaxcardData => {
                if (!dbAdultvaxcardData) {
                    res.status(404).json({ message: 'Adultvaxcard has been deleted!' });
                    return;
                }
                res.json(dbAdultvaxcardData);
            })
            .catch(err => res.status(400).json(err));
    }

};

module.exports = AdultvaxcardController;