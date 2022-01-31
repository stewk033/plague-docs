const { Schema, model } = require('mongoose');
const dateFormat = require('../utils/dateFormat');

const CardSchema = new Schema (
    {
        adultPatientId: {
            type: Schema.Types.ObjectId,
            ref: 'Adult'
        },
        childPatientId: {
            type: Schema.Types.ObjectId,
            ref: 'Child'
        },
        vaccinationType: {
            type: String,
            required: true,
            enum: ['Pfizer-BioNTech', 'Moderna', 'Oxford-AstraZeneca', 'Johnson & Johnson Janssen', 'Novavax'],
            default: 'Other'
        },
        vaccinationDate: {
            type: String,
            required: 'Please enter the date of this vaccination'
        },
        facilityLocation: {
            type: String,
            required: 'Please enter the location this vaccination was received',
            trim: true
        },
        lotNum: {
            type: Number,
            required: 'Please enter the corresponding Lot Number of this vaccination',
            trim: true
        },
        certNum: {
            type: Number,
            required: 'Please enter the corresponding Certification Number of this vaccination',
            trim: true
        },
        dose: {
            type: String,
            required: 'Please select Dose or Booster',
            enum: ['Dose 1', 'Dose 2', 'Booster', 'Other Dose'],
            default: 'Other Dose'
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
        toJSON: {
            getters: true
        },
        id: false
    }
);


const Card = model('Card', CardSchema);

module.exports = Card;