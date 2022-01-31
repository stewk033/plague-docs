const { Schema, model } = require('mongoose');
const dateFormat = require('../utils/dateFormat');

const CardSchema = new Schema (
    {
        Patient: {
            type: Schema.Types.ObjectId,
            ref: 'Adult'
        },
        VaccinationType: {
            type: String,
            required: true,
            enum: ['Pfizer-BioNTech', 'Moderna', 'Oxford-AstraZeneca', 'Johnson $ Johnson Janssen', 'Novavax'],
            default: 'Other'
        },
        VaccinationDate: {
            type: String,
            required: 'Please enter the date of this vaccination'
        },
        FacilityLocation: {
            type: String,
            required: 'Please enter the location this vaccination was received',
            trim: true
        },
        LotNum: {
            type: Number,
            required: 'Please enter the corresponding Lot Number of this vaccination',
            trim: true
        },
        CertNum: {
            type: Number,
            required: 'Please enter the corresponding Certification Number of this vaccination',
            trim: true
        },
        Dose: {
            type: String,
            required: 'Please select Dose or Booster',
            enum: ['Dose 1', 'Dose 2', 'Booster', 'Other Dose'],
            default: 'Other Dose'
        }
    },
    {
        toJSON: {
            virtuals: true
        },
        id: false
    }
);

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
        familyRef: {
            type: String,
            unique: false,
            required: 'Please enter the associated family (parent) last name',
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
        children: [
            {
            type: Schema.Types.ObjectId,
            ref: 'Child'
            }
        ],
        VaccinationCards: [CardSchema]
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


const Adult = model('Adult', AdultSchema);

module.exports = { Adult };