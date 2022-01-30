const { Schema, model, Types } = require('mongoose');
const dateFormat = require('../utils/dateFormat');
const currentYearFormat = require('../utils/currentYearFormat');

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
        familyRef: {
            type: String,
            unique: false,
            required: 'Please enter the associated family name of the child',
            trim: true
        },
        phoneNumberRef: {
            type: String,
            require: true,
            match: [/^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/, 'Please enter associated family phone number']
        },
        // using month, day, year of birth separate to provide for conforming date data
        // using type: Date brings time zone errors 
        monthOB: {
            type: Number,
            required: 'Please select the birth month of the child',
            min: 1,
            max: 12,
            // enum: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
            default: 'Month'
        },
        dayOB: {
            type: Number,
            required: 'Please select the birth day of the child',
            min: 1,
            max: 31,
            default: 'Day'
        },
        yearOB: {
            type: Number,
            required: 'Please select the birth year of the child',
            min: 1900,
            max: { 
                type: Date, 
                default: Date.now,
                get: (currentYearVal) => currentYearFormat(currentYearVal)
            }
        },
        parent: [
            {
                type: Schema.Types.ObjectId,
                ref: 'Adult'
            }
        ],
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