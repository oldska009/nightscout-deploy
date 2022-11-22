import { model, Schema, Document } from "mongoose";

export interface IEntriesSchema extends Document {
  id: string;
  date: number;
  dateString: string;
  rssi: number;
  device: string;
  direction: string;
  rawbg: number;
  sgv: number;
  type: string;
  utcOffset: number;
  sysTime: string;
}

const entriesSchema: Schema = new Schema({
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

export default model<IEntriesSchema>("Entries", entriesSchema);
