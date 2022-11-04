import { useState } from "react"
import { useTheme } from 'next-themes'


const HeaderBar = () => {

    const [dark, setDark] = useState<boolean>(false)
    const { theme, setTheme } = useTheme()

    const setDarkMode = () => {
        setTheme((dark)? 'dark': 'light')
        setDark(!dark)
    }

    return (
        <div>
            <div className=" flex justify-between items-center mb-2 md:mb-8">
                <div className=" text-white tracking-widest text-4xl font-bold">T O D O</div>

                <button onClick={setDarkMode}>
                    <img src={(dark)? "/images/icon-moon.svg": "/images/icon-sun.svg"} className="w-6 h-6" />
                </button>
            </div>
        </div>
    )
}

export default HeaderBar