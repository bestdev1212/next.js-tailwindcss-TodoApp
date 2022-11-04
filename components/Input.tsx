import { FunctionComponent, MutableRefObject, useState } from "react"
import ColorButton from "./ColorButton"


const Input:FunctionComponent<{addTodo:MutableRefObject<Function|null>}> = ({addTodo}) => {


    const [name, setName] = useState<string>('')
    const [completedNew, setCompletedNew] = useState<boolean>(false)

    const newClicked = () => {
        setCompletedNew(!completedNew)
    }

    const keyPress = (e: any) => {

        if(e.keyCode == 13 && addTodo.current){
            
            addTodo.current(name, completedNew)
            setName('')
            setCompletedNew(false)
        }
    }

    return (
        <div className=" h-16 rounded-xl flex space-x-2 dark:bg-[#25273c] bg-white overflow-hidden px-4">
        <ColorButton
            on = {completedNew}
            onClicked = {newClicked}
        />
        <input className="  focus:outline-none grow px-2 dark:bg-[#25273c] caret-blue-800" onKeyDown={keyPress}  onChange={(e) => setName(e.target.value)} value={name} />
    </div>
    )
}

export default Input