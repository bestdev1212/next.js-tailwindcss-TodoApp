import { useRef, useState } from 'react'
import { useQuery, useMutation } from '@apollo/client'


import { IGetTodosResult } from '../type'
import Todoitem from '../components/Todoitem'
import { getQuery, addMutation } from '../apollo/query_mutations'
import ColorButton from '../components/ColorButton'
import Input from '../components/Input'
import HeaderBar from '../components/HeaderBar'
import MainContent from '../components/MainContent'

const Home = () => {

    const pushNew = useRef<Function | null>(null)

    return (
        <div className=" relative dark:bg-[#161622] bg-white w-full h-screen dark:text-white text-gray-700">
            <div className=" bg-white bg-cover w-full h-2/6 bg-contained bg-[url('/images/bg-mobile-light.jpg')] lg:bg-[url('/images/bg-desktop-light.jpg')]  dark:bg-[url('/images/bg-mobile-dark.jpg')] dark:lg:bg-[url('/images/bg-desktop-dark.jpg')]">
            </div>
            <div className=" ">
                <div className="  w-4/5 mt-[-170px] md:w-2/3 xl:w-1/3 mx-auto md:mt-[-200px]">
                    <HeaderBar />
                    <Input
                        addTodo={pushNew}
                    />
                    <MainContent
                        addTodo={pushNew}
                    />
                </div>
            </div>
        </div>
    )
}

export default Home