import * as data from './store'
import { ITodo, IName, IId, INameId, ICompletedId, INameCompleted } from '../type';

export const resolvers = {
  Query: {
    get_todos(){
      return data.todos;
    }
  },
  Mutation: {
    add_todo(_: any, item: INameCompleted) {
      console.log(_, item)
      const items = data.addItem(item.name, item.completed)
      return items
    },

    delete_todo(_:any, item: IId){
      const items = data.deleteItem(item.id)
      return items
    },

    update_todo(_:any, args: INameId){
      console.log(args)
      const items = data.updateItem(args.id, args.name)
      return items
    },

    update_todo_status(_:any, args: ICompletedId){
      console.log(args)
      const items = data.updateItemStatus(args.id, args.completed)
      return items
    }
    
  }
}
