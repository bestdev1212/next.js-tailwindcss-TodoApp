import { FunctionComponent, MutableRefObject, RefObject, useRef, useState } from "react"
import { IGetTodosResult, ITodo } from "../type"
import ItemsCount from "./ItemsCount"
import MainList from "./MainList"
import Todoitem from "./Todoitem"


const MainContent:FunctionComponent<{addTodo: MutableRefObject<Function|null>}> = ({addTodo}) => {
    const setCountRef = useRef<Function|null>(null)
    const clearRef = useRef<Function|null>(null)
    const [filterval, setFilterval] = useState<string>('All')

    

    return (
        <div>
            <div className=" mt-4 rounded-x rounded-xl dark:bg-[#25273c] bg-white overflow-hidden  shadow-lg">
                <MainList 
                    addTodo = {addTodo}
                    countRef = {setCountRef}
                    filterVal = {filterval}
                    clearRef = {clearRef}
                />



                <div className=" h-14 dark:bg-[#25273c]  items-center flex justify-between space-x-4 bg-white overflow-hidden px-4 py-4 ">
                    <ItemsCount setCountRef={setCountRef} />
                    <div className=" text-gray-400 text-sm font-semibold hidden md:flex items-center space-x-3">
                        <div className={(filterval == 'All')?"text-blue-600 hover:cursor-pointer select-none":" hover:text-blue-600 hover:cursor-pointer select-none"}  onClick={e => {setFilterval('All')}}>All</div>
                        <div className={(filterval == 'Active')?"text-blue-600 hover:cursor-pointer select-none":" hover:text-blue-600 hover:cursor-pointer select-none"} onClick={e => {setFilterval('Active')}}>Active</div>
                        <div className={(filterval == 'Completed')?"text-blue-600 hover:cursor-pointer select-none":" hover:text-blue-600 hover:cursor-pointer select-none"} onClick={e => {setFilterval('Completed')}}>Completed</div>
                    </div>
                    <div className=" text-gray-400 text-sm font-semibold flex items-center space-x-3">
                        <div className=" hover:text-blue-600 hover:cursor-pointer select-none" onClick={e => {if(clearRef.current) clearRef.current()}}>Clear Completed</div>
                    </div>
                </div>
            </div>
            <div className="  dark:bg-[#25273c] text-gray-400 text-sm font-semibold flex md:hidden justify-between mt-8 h-16 rounded-xl shadow-lg px-4 items-center space-x-3">
                <div className={(filterval == 'All')?"text-blue-600 hover:cursor-pointer select-none":" hover:text-blue-600 hover:cursor-pointer select-none"} onClick={e => {setFilterval('All')}}>All</div>
                <div className={(filterval == 'Active')?"text-blue-600 hover:cursor-pointer select-none":" hover:text-blue-600 hover:cursor-pointer select-none"} onClick={e => {setFilterval('Active')}}>Active</div>
                <div className={(filterval == 'Completed')?"text-blue-600 hover:cursor-pointer select-none":" hover:text-blue-600 hover:cursor-pointer select-none"} onClick={e => {setFilterval('Completed')}}>Completed</div>
            </div>
            <div className=" text-gray-400 text-xs mt-12 mb-2 font-semibold text-center">Drag and drop to recorder list</div>
            <div className="invisible"> placeholder </div>
        </div>
    )
}

export default MainContent