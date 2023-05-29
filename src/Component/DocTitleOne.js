import React, { useState } from 'react'
import UseDocumentTitle from '../Hook/UseDocumentTitle'

function DocTitleOne() {
    const [count, setcount] = useState(0)

    UseDocumentTitle(count)
    return (
        <div>
            <button onClick={() => { setcount(count + 1) }}>click -{count}</button>
        </div>
    )
}

export default DocTitleOne