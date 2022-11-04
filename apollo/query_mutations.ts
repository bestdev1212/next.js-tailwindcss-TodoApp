import gql from 'graphql-tag'



export const getQuery = gql`
query{
  get_todos{
    id
    name
    completed
  }
}
`

export const addMutation = gql`
mutation add_todo($name: String!, $completed: Boolean!){
  add_todo(name: $name, completed: $completed){
    id
    name
    completed
  }
}
`

export const updateMutation = gql`
mutation update_todo_status($id: Int!, $completed: Boolean!){
  update_todo_status(id: $id, completed: $completed){
    id
    name
    completed
  }
}
`

export const deleteMutation = gql`
mutation delete_todo($id: Int!){
  delete_todo(id: $id){
    id
    name
    completed
  }
}
`

export const clearMutation = gql`
mutation clear($id: Int!){
  clear(id: $id){
    id
    name
    completed
  }
}
`