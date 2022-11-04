import { gql } from '@apollo/client'

export const typeDefs = gql`


  type todo {
    id: Int!
    name: String!
    completed: Boolean!
  }

  type Query {
    get_todos: [todo]

  }

  type Mutation {
    add_todo(name: String!, completed: Boolean!): [todo]
    delete_todo(id: Int!): [todo]
    clear_completed(id: Int!): [todo]
    update_todo(id: Int!, name: String!): [todo]
    update_todo_status(id: Int!, completed: Boolean!): [todo]
  }
  schema {
    query: Query
    mutation: Mutation
  }
  
`
