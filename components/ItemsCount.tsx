import { FunctionComponent, MutableRefObject, useEffect, useState } from "react"

const ItemsCount:FunctionComponent<{setCountRef: MutableRefObject<Function|null>}> = ({setCountRef}) => {
    const [count, setCount] = useState<number>(0)

    useEffect(() => {
        setCountRef.current = setCount
    }, [])
    return (
        <div className=" text-gray-400 text-xs font-semibold ">{count} items left</div>
    )
}

export default ItemsCount