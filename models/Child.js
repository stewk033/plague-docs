const { Schema, model, Types } = require('mongoose');
const dateFormat = require('../utils/dateFormat');

const ChildSchema = new Schema (
    {
        firstName: {
            type: String,
            unique: false,
            required: 'Please enter the first name of your child',
            trim: true
        },
        lastName: {
            type: String,
            unique: false,
            required: 'Please enter the last name of your child',
            trim: true
        },
        gender: {
            type: String,
            required: 'Please select gender of child',
            enum: ['M', 'F', 'X']
        },
        parentGuardian: {
            type: 
        },
        phoneNumber: {
            type: String,
            require: true,
            match: [/^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/, 'Please enter associated family phone number']
        },
        // using month, day, year of birth separate to provide for conforming date data
        // using type: Date brings time zone errors 
        // monthOB: {
        //     type: Number,
        //     required: 'Please enter the birth month of the child',
        //     min: 1,
        //     max: 12,
        //     // enum: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
        //     default: 'Month'
        // },
        // dayOB: {
        //     type: Number,
        //     required: 'Please enter the birth day of the child',
        //     min: 1,
        //     max: 31,
        //     default: 'Day'
        // },
        // yearOB: {
        //     type: Number,
        //     required: 'Please enter the birth year of the child',
        //     min: 1900,
        //     max: new Date().getFullYear()
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
        }
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

const Child = model('Child', ChildSchema);

module.exports = Child;