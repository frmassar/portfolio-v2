
import React from 'react'
import { useSpring, animated } from 'react-spring'
import '../css/App.css'

export default function Sep() {
    var i = 1;
    const props = useSpring({
        from: { left: '0%', top: '0%', width: '0%', height: '0%', background: 'lightgreen' },
        to: async next => {
        while (i>0) {
            await next({ left: '0%', top: '0%', width: '100%', height: '100%', background: 'lightblue' })
            await next({ height: '50%', background: 'lightgreen' })
            await next({ width: '50%', left: '50%', background: 'lightgoldenrodyellow' })
            await next({ top: '0%', height: '100%', background: 'lightpink' })
            await next({ top: '50%', height: '50%', background: 'lightsalmon' })
            await next({ width: '100%', left: '0%', background: 'lightcoral' })
            await next({ width: '50%', background: 'lightseagreen' })
            await next({ top: '0%', height: '100%', background: 'lightskyblue' })
            await next({ width: '100%', background: 'lightslategrey' })
            await next({ top: '50%', height: '50%', background: 'lightsalmon' })
            console.log(i)
            i--
        }
        },
        })
        return <div className="routeu"><animated.div className="script-box" style={props} /> </div>
}
