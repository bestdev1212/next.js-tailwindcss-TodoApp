import { ITodo } from "../type";
let index:number = 3
export let todos: ITodo[] = [{
    id: 0,
    name: "first task",
    completed: false,
},
{
  id: 1,
  name: "second task",
  completed: true,
},
{
  id: 2,
  name: "third task",
  completed: false,
}
];

export const addItem = (name: string, completed: boolean) => {
    index++;
    
  todos = todos.concat([{id: index, name:name, completed: completed}]);
  return todos;
};

export const deleteItem = (id: number) => {
  if(id == -1){
    todos = todos.filter((todo) => !todo.completed);
  }else{
    todos = todos.filter((todo) => todo.id != id);
  }
  return todos;
};

export const updateItem = (id: number, name: string) => {
    // todos = todos.filter(item => ((id == item.id)? {...item, ...{name}}: item))
    console.log(id, name)
    let _items:ITodo[]= []
    for(let i=0; i<todos.length; i++){
      let item = todos[i]
      if(item.id == id){
        item.name = name        
      }
      _items.push(item)
    }
    todos =_items
    return todos
}

export const updateItemStatus = (id: number, completed: boolean) => {
  // todos = todos.filter(item => ((id == item.id)? {...item, ...{name}}: item))
  let _items:ITodo[]= []
    for(let i=0; i<todos.length; i++){
      let item = todos[i]
      if(item.id == id){
        item.completed = completed        
      }
      _items.push(item)
    }
    todos =_items
    return todos
}

