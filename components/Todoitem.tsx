import { FunctionComponent } from "react"
import { ITodo } from "../type"
import { TfiClose } from 'react-icons/tfi'
import ColorButton from "./ColorButton";
import { useState } from 'react'


const Todoitem: FunctionComponent<{ item: ITodo, commType: boolean, update: Function, _delete: Function }> = ({ item, commType, update, _delete }) => {

    const [active, setActive] = useState<boolean>(item.completed)

    let nameClass = " grow   overflow-hidden text-gray-500 dark:text-gray-300";

    if (active) {

        nameClass = " grow line-through  overflow-hidden text-gray-400 dark:text-gray-500";
    }

    const onClicked = () => {
        update(item.id, !active)
        setActive(!active)
    }

    return (
        <div className=" h-16 group  dark:bg-[#25273c] items-center flex space-x-4 bg-white overflow-hidden px-4  border-b dark:border-[#383a4f]  border-gray-200">
            <ColorButton
                on={active}
                onClicked={onClicked}
            />
            <div className={nameClass} >
                {item.name}
            </div>
            <TfiClose className="hidden w-4 h-4 group-hover:block hover:text-blue-500" onClick={(e) => { _delete(item.id) }} />
        </div>
    )
}

export default Todoitem