import React, { useEffect, useState } from 'react'

function HookMouse() {
    const [x, setX] = useState(0)
    const [y, setY] = useState(0)

    const logmouse = (e) => {
        console.log('events')
        setX(e.clientY)
        setY(e.clientY)
    }
    useEffect(() => {
        console.log('useEffect  hook')
        window.addEventListener('mousemove', logmouse)
    }, [])

    return (
        <div>
            hook X-{x} Y-{y}
        </div>
    )
}

export default HookMouse