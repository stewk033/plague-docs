const { Schema, model, Types } = require('mongoose');

var FamilySchema = new Schema (
    {
        name: {
            type: String,
            required: true
        }
    },
    adultId: [

    ],
    childrenId: [

    ]
);

const Family = model('Family', FamilySchema);

count in household

module.exports = Family;