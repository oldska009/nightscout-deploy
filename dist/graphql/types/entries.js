"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.entriesType = void 0;
var graphql_1 = require("graphql");
exports.entriesType = new graphql_1.GraphQLObjectType({
    name: "Entries",
    description: "This represent an Entries",
    fields: function () { return ({
        _id: { type: graphql_1.GraphQLID },
        date: { type: graphql_1.GraphQLString },
        dateString: { type: graphql_1.GraphQLString },
        rssi: { type: graphql_1.GraphQLInt },
        device: { type: graphql_1.GraphQLString },
        direction: { type: graphql_1.GraphQLString },
        rawbg: { type: graphql_1.GraphQLInt },
        sgv: { type: graphql_1.GraphQLInt },
        type: { type: graphql_1.GraphQLString },
        utcOffset: { type: graphql_1.GraphQLInt },
        sysTime: { type: graphql_1.GraphQLString },
    }); },
});
