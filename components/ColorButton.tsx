import { FunctionComponent, useState } from "react"


const ColorButton: FunctionComponent<{ on: boolean, onClicked?: Function|null}> = ({ on, onClicked=null }) => {


    let markClass1 = " bg-white w-full dark:bg-[#25273c] h-full rounded-full";
    let markClass2 = "hidden";
    if (on) {
        markClass1 = " bg-white w-full hidden dark:bg-[#25273c] h-full rounded-full";
        markClass2 = "";
    }

    const clicked = () => {
        if(onClicked){
            onClicked()
        }
    }

    return (
        <button className="" onClick={clicked}>
            <div className=" w-5 h-5 rounded-full bg-gradient-to-br from-blue-300 flex justify-center items-center to-purple-500 focus:select-none" style={{ padding: '1.2px' }}>
                <div className={markClass1}></div>
                <img src="/images/icon-check.svg" className={markClass2} />
            </div>
        </button>
    )
}

export default ColorButton