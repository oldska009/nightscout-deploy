//GraphQL
import {
  GraphQLID,
  GraphQLInt,
  GraphQLList,
  GraphQLNonNull,
  GraphQLObjectType,
  GraphQLString,
  GraphQLFloat,
} from "graphql";
import { entriesType } from "./types/entries";

//Mongoose
import Entries from "../models/kirill.entries ";

const queryType = new GraphQLObjectType({
  name: "Query",
  fields: () => ({
    allData: {
      description: "All data",
      type: new GraphQLList(entriesType),
      resolve: (_, {}) => {
        try {
          let startPeriod = async () => {
            let res = await Entries.find().sort({ date: -1 }).limit(1);
            return res[0];
          };
          return startPeriod().then(({ date }) => {
            const endPeriod = date - 2629743000 * 3;
            const result: any = Entries.find({
              date: {
                $gte: endPeriod,
                $lt: date,
              },
            }).sort({ date: -1 });
            return result;
          });
        } catch (e) {
          return e;
        }
      },
    },
    entries: {
      description: "Data glucose entries",
      type: new GraphQLList(entriesType),
      args: {
        START_DATE: { type: GraphQLString },
      },
      resolve: (_, { START_DATE }) => {
        try {
          let startPeriod = async () => {
            let res = await Entries.find().sort({ date: -1 }).limit(1);
            return res[0];
          };
          return startPeriod().then(({ date }) => {
            const endPeriod = date - 86400000 * 7;
            const result: any = Entries.find({
              date: {
                $gte: endPeriod,
                $lt: date,
              },
            }).sort({ date: -1 });
            return result;
          });
        } catch (e) {
          return e;
        }
      },
    },
    pages: {
      description: "Data glucose entries",
      type: GraphQLInt,
      resolve: () => {
        try {
          const allElements: any = Entries.countDocuments();
          return allElements;
        } catch (e) {
          return e;
        }
      },
    },
    entriesByDate: {
      description: "Get data glucose entries by date",
      type: entriesType,
      args: {
        _id: { type: new GraphQLNonNull(GraphQLID) },
      },
      resolve: (_, { _id }) => {
        try {
          return Entries.findById(_id);
        } catch (e) {
          return e;
        }
      },
    },

    firstDate: {
      description: "Get first date",
      type: new GraphQLList(entriesType),
      args: {
        element: { type: GraphQLString },
      },
      resolve: (_, { element }) => {
        try {
          return Entries.find().sort({ date: -1 }).limit(1);
        } catch (e) {
          return e;
        }
      },
    },
  }),
});
export default queryType;
