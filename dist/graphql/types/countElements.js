"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.countType = void 0;
var graphql_1 = require("graphql");
var kirill_entries_1 = __importDefault(require("../../models/kirill.entries "));
exports.countType = new graphql_1.GraphQLObjectType({
    name: "countElements",
    description: "This represent an count elements",
    fields: function () { return ({
        countElements: {
            type: graphql_1.GraphQLInt,
            resolve: function () {
                return kirill_entries_1.default;
            },
        },
    }); },
});
