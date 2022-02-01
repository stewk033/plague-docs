const { Schema, model, Types } = require('mongoose');
const dateFormat = require('../utils/dateFormat');

const AdultSchema = new Schema (
    {
        adultFirst: {
            type: String,
            required: 'Please enter your first name',
            trim: true
        },
        adultLast: {
            type: String,
            required: 'Please enter your last name',
            trim: true
        },        
        gender: {
            type: String,
            required: 'Please select your gender',
            enum: ['M', 'F', 'X']
        },
        email: {
            type: String,
            required: true,
            trim: true,
            // regex for basic email format including @
            match: [/.+\@.+\..+/, 'Please input a valid email address']
        },
        phoneNumber: {
            type: String,
            match: [/^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/, 'Please enter a valid phone number']
        },
        birthDate: {
            type: Date,
            require: 'Please enter patient date of birth'
        },
        createdAt: {
            type: Date,
            default: Date.now,
            immutable: true,
            get: (createdAtVal) => dateFormat(createdAtVal)
        },
        updatedAt: {
            type: Date,
            default: Date.now,
            get: (updatedAtVal) => dateFormat(updatedAtVal)
        },
        // _id values referencing Child models
        children: [
            {
                type: Schema.Types.ObjectId,
                ref: 'Child'
            }
        ],
        // _id values referencing Card models
        adultvaxcards: [
            {
                type: Schema.Types.ObjectId,
                ref: 'Adultvaxcard'
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

AdultSchema.virtual('childrenCount').get(function() {
    return this.children.length;
});

AdultSchema.virtual('vaccinationCount').get(function() {
    return this.adultvaxcards.length;
});

const Adult = model('Adult', AdultSchema);

module.exports = Adult;