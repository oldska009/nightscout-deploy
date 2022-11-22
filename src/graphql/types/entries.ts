import {
  GraphQLID,
  GraphQLInt,
  GraphQLList,
  GraphQLObjectType,
  GraphQLString,
} from "graphql";

import Entries from "../../models/kirill.entries ";

export const entriesType = new GraphQLObjectType({
  name: "Entries",
  description: "This represent an Entries",
  fields: () => ({
    _id: { type: GraphQLID },
    date: { type: GraphQLString },
    dateString: { type: GraphQLString },
    rssi: { type: GraphQLInt },
    device: { type: GraphQLString },
    direction: { type: GraphQLString },
    rawbg: { type: GraphQLInt },
    sgv: { type: GraphQLInt },
    type: { type: GraphQLString },
    utcOffset: { type: GraphQLInt },
    sysTime: { type: GraphQLString },
  }),
});
