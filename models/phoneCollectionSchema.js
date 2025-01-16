const mongoose = require('mongoose');
require('dotenv').config();

const db = mongoose.createConnection(process.env.MONGODB_URL_DB+"devices");

const phoneSchema = new mongoose.Schema({
    brand: {
        type: String,
        required: true,
    },
    image: {
        type: String,
        required: true,
    },
    price: {
        type: String,
        required: false, 
    },
    releaseDate: {
        type: Date,
        required: false,
    },
    network: {
        technology: { type: String, required: false },
        bands: {
            _2g: { type: String, required: false },
            _3g: { type: String, required: false },
            _4g: { type: String, required: false },
            _5g: { type: String, required: false },
        },
        speed: { type: String, required: false }
    },
    launch: {
        announced: { type: Date, required: false },
        status: { type: String, required: false }
    },
    body: {
        dimensions: { type: String, required: false },
        weight: { type: String, required: false },
        build: { type: String, required: false },
        sim: { type: String, required: false }
    },
    display: {
        type: {type: String,required: false},
        size: { type: String, required: false },
        resolution: { type: String, required: false },
        protection: { type: String, required: false } 
    },
    platform: {
        os: { type: String, required: false },
        chipset: { type: String, required: false },
        cpu: { type: String, required: false },
        gpu: { type: String, required: false }
    },
    memory: {
        internal: { type: String, required: false }, 
        external: { type: String, required: false },
        
    },
    camera: {
        main: {
            type: { type: String, required: false }, 
            features: { type: String, required: false },
            video: { type: String, required: false }
        },
        selfie: {
            type: { type: String, required: false }, 
            features: { type: String, required: false },
            video: { type: String, required: false }
        }
    },
    sound: {
        loudspeaker: { type: String, required: false },
        _3_5mm_jack: { type: Boolean, default: false }
    },
    communication: {
        wlan: { type: String, required: false }, 
        bluetooth: { type: String, required: false },
        gps: { type: String, required: false },
        nfc: { type: String, required: false },
        radio: { type: String, required: false },
        usb: { type: String, required: false }
    },
    features: {
        sensors: { type: String, required: false }, 
    },
    battery: {
        type: {
            type: String,
            default: null
        },
        capacity: {
            type: String,
            default: null
        },
        charging: {
            type: String,
            default: null
        }
    },
   misc: { 
    price: { type: String, required: false },
    colors: { type: String, required: false },
    sar: { type: String, required: false },
    models: { type: String, required: false },
},
    specifications: {
        type: [String], 
        required: true
    },
    inStock: {
        type: Boolean,
        default: true,
    }
});

module.exports =  Phone = db.model('devicecollections', phoneSchema);

