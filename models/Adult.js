const { Schema, model } = require('mongoose');
const dateFormat = require('../utils/dateFormat');

const AdultSchema = new Schema (
    {
        firstName: {
            type: String,
            unique: false,
            required: 'Please enter your first name',
            trim: true
        },
        lastName: {
            type: String,
            unique: false,
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
            unique: true,
            trim: true,
            // regex for basic email format including @
            match: [/.+\@.+\..+/, 'Please input a valid email address']
        },
        phoneNumber: {
            type: String,
            require: true,
            match: [/^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/, 'Please enter a valid phone number']
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
        // _id values referencing Child models
        children: [
            {
                type: Schema.Types.ObjectId,
                ref: 'Child'
            }
        ],
        // _id values referencing Card models
        vaccinationCards: [
            {
                type: Schema.Types.ObjectId,
                ref: 'Card'
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
    return this.vaccinationCards.length;
});

const Adult = model('Adult', AdultSchema);

module.exports = Adult;