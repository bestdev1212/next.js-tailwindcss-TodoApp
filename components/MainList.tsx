import { useMutation, useQuery } from "@apollo/client"
import { count } from "console"
import { FunctionComponent, MutableRefObject, RefObject, useEffect, useState } from "react"
import { addMutation, deleteMutation, getQuery, updateMutation } from "../apollo/query_mutations"
import { IAddTodosResult, IDeleteTodosResult, IGetTodosResult, ITodo, IUpdateTodosResult } from "../type"
import Todoitem from "./Todoitem"


const MainList: FunctionComponent<{
    addTodo: MutableRefObject<Function | null>,
    countRef: MutableRefObject<Function | null>,
    clearRef: MutableRefObject<Function | null>,
    filterVal: String
}> = ({ addTodo, countRef, filterVal, clearRef }) => {
    const [addTodoItem] = useMutation<IAddTodosResult>(addMutation)
    const [updateItem] = useMutation<IUpdateTodosResult>(updateMutation)
    const [deleteItem] = useMutation<IDeleteTodosResult>(deleteMutation)

    const { loading, error, data, refetch } = useQuery<IGetTodosResult>(getQuery, {
        onCompleted(data) {
            setTodos(data.get_todos)
            if (countRef.current)
                countRef.current(data.get_todos?.filter(v => !v.completed).length)
        },
    });

    const [todos, setTodos] = useState<ITodo[] | undefined>([])

    const pushNew = (name: String, completed: boolean) => {
        addTodoItem({
            variables: {
                name: name,
                completed: completed
            }
        }).then(res => { 
            if (countRef.current && res?.data?.add_todo)
                countRef.current(res?.data?.add_todo.filter(v => !v.completed).length)
            setTodos(res?.data?.add_todo) 
            
        });
        
    }

    const update = (id: number, status: boolean) => {
        updateItem({
            variables: {
                id: id,
                completed: status
            }
        }).then(res => { setTodos(res?.data?.update_todo_status) });

    }

    const _delete = (id: number) => {
        deleteItem({
            variables: {
                id: id,
            }
        }).then(res => { 
            if (countRef.current && res?.data?.delete_todo)
                countRef.current(res?.data?.delete_todo.filter(v => !v.completed).length)
            setTodos(res?.data?.delete_todo) 
        });
     
    }

    const _clear = () => {
        deleteItem({
            variables: {
                id: -1,
            }
        }).then(res => { 
            if (countRef.current && res?.data?.delete_todo)
                countRef.current(res?.data?.delete_todo.filter(v => !v.completed).length)
            setTodos(res?.data?.delete_todo) 
        });
       
    }

    useEffect(() => {
        addTodo.current = pushNew
        clearRef.current = _clear
    }, [])

    let _todos = todos;
    if (filterVal == 'Completed') {
        _todos = (todos?.filter((v) => v.completed))
    } else if (filterVal == 'Active') {
        _todos = (todos?.filter((v) => !v.completed))
    }
    return (
        <div>
            {_todos && (
                _todos?.map(todo => (
                    <Todoitem key={todo.id} item={todo} commType={true} update={update} _delete={_delete} />
                ))
            )}
        </div>
    )
}

export default MainList