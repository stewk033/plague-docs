const { Schema, model } = require('mongoose');

const AdultSchema = new Schema (
    {
        firstName: {
            type: String,
            unique: true,
            required: 'Please enter your first name',
            trim: true
        },
        lastName: {
            type: String,
            unique: true,
            required: 'Please enter your last name',
            trim: true
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
        }
    },
    {
        toJSON: {
            virtuals: true,
            getters: true
        },
        id: false
    }
);

const Adult = model('Adult', AdultSchema);

module.exports = Adult;