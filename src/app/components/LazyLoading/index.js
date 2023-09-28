'use client'
import dynamic from 'next/dynamic'
import {useState} from 'react'

const ComponentA = dynamic(() => import('@/app/components/LazyLoading/ComponentA'))
const ComponentB = dynamic(() => import('@/app/components/LazyLoading/ComponentB'))
const ComponentC = dynamic(() => import('@/app/components/LazyLoading/ComponentC'), {ssr: false})

export default function LazyLoading() {
    const [showMore, setShowMore] = useState(false)



    return (
        <div>
            {/* Load immediately, but in a separate client bundle */}
            <ComponentA />

            {/* Load on demand, only when/if the condition is met */}
            {showMore && <ComponentB />}
            <button onClick={() => setShowMore(!showMore)}>Toggle</button>

            {/* Load only on the client side */}
            <ComponentC />
        </div>
    )
}