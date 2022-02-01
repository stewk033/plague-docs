const { Schema, model, Types } = require('mongoose');
const dateFormat = require('../utils/dateFormat');

const ChildSchema = new Schema (
    {
        childFirst: {
            type: String,
            required: 'Please enter the first name of your child',
            trim: true
        },
        childLast: {
            type: String,
            required: 'Please enter the last name of your child',
            trim: true
        },
        gender: {
            type: String,
            required: 'Please select gender of child',
            enum: ['M', 'F', 'X']
        },
        parentGuardian: [
            {
                type: Schema.Types.ObjectId,
                ref: 'Adult'
            }
        ],
        phoneNumber: {
            type: String,
            require: true,
            match: [/^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/, 'Please enter associated family phone number']
        },
        birthDate: {
            type: Date,
            require: 'Please enter patient date of birth'
        },
        createdAt: {
            type: Date,
            immutable: true,
            get: (createdAtVal) => dateFormat(createdAtVal)
        },
        updatedAt: {
            type: Date,
            default: Date.now,
            get: (updatedAtVal) => dateFormat(updatedAtVal)
        },
        // _id values referencing Card models
        childvaxcards: [
            {
                type: Schema.Types.ObjectId,
                ref: 'Childvaxcard'
            }
        ]
    },
    {
        timestamps: true,
        toJSON: {
            virtuals: true,
            getters: true
        },
        id: false
    }
);

// ChildSchema.virtual('vaccinationCount').get(function() {
//     return this.childvaxcards.length;
// });

const Child = model('Child', ChildSchema);

module.exports = Child;