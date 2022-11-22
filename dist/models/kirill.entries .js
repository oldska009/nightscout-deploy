"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var mongoose_1 = require("mongoose");
var entriesSchema = new mongoose_1.Schema({
    id: {
        type: String,
        required: true,
    },
    date: {
        type: Number,
        required: true,
    },
    dateString: {
        type: String,
    },
    rssi: { type: Number, required: true },
    device: { type: String, required: true },
    direction: { type: String, required: true },
    rawbg: { type: Number, required: true },
    sgv: { type: Number, required: true },
    type: { type: String, required: true },
    utcOffset: { type: Number, required: true },
    sysTime: { type: String, required: true },
});
exports.default = (0, mongoose_1.model)("Entries", entriesSchema);
