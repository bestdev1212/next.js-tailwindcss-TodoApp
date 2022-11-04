export interface ITodo {
    id: number,
    name: string,
    completed: boolean,
}

export interface IName {
    name: string
}

export interface INameCompleted {
    name: string,
    completed: boolean
}

export interface IId {
    id: number
}

export interface INameId {
    name: string,
    id: number
}

export interface ICompletedId {
    completed: boolean,
    id: number
}

export interface IGetTodosResult{
    get_todos: ITodo[]|undefined
}

export interface IAddTodosResult{
    add_todo: ITodo[]
}

export interface IUpdateTodosResult{
    update_todo_status: ITodo[]
}

export interface IDeleteTodosResult{
    delete_todo: ITodo[]
}