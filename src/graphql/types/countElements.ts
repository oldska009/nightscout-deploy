import {
  GraphQLID,
  GraphQLInt,
  GraphQLList,
  GraphQLObjectType,
  GraphQLString,
} from "graphql";

import Entries from "../../models/kirill.entries ";

export const countType = new GraphQLObjectType({
  name: "countElements",
  description: "This represent an count elements",
  fields: () => ({
    countElements: {
      type: GraphQLInt,
      resolve() {
        return Entries;
      },
    },
  }),
});
