const { Schema, model } = require('mongoose');

const ChildSchema = new Schema (
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
            required: 'Please enter your first name',
            trim: true
        },
        birthDate: {
            type: Date,
            required: true
        },
        email: {
            type: String,
            unique: true,
            trim: true,
            // regex for basic email format including @
            match: [/.+\@.+\..+/, 'Please input a valid email address']
        },
        phoneNumber: {
            type: String,
            match: [/^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/, 'Please enter a valid phone number']
        }
    },
    {
        toJSON: {
            virtuals: true,
            getters: true
        },

    }
);

const Child = model('Child', ChildSchema);

module.exports = Child;