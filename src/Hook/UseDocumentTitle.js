import {useEffect} from 'react'

function UseDocumentTitle(count) {

    useEffect(() => {
        document.title = `count is ${count}`
    }, [count])
}

export default UseDocumentTitle