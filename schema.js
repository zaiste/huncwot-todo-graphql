const typeDefs = `
  type Widget {
    id: Int!
    name: String!
    completed: Boolean!
  }
  type Query {
    widgets: [Widget]
    widgetByName(name: String!): Widget
  }
  type Mutation {
    toggle(taskId: Int!): Widget
  }
`;

module.exports = typeDefs;
