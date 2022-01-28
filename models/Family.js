const { Schema, model } = require('mongoose');

var FamilySchema = new Schema (
    {
        name: {
            type: String,
            required: true
        }
    }
);

const Family = model('Family', FamilySchema);

module.exports = Family;