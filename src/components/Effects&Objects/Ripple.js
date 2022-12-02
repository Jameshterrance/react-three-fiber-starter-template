import React, { useEffect, useRef } from 'react'

const Ripple = () => {

    const ref = useRef()

    useEffect(() => {
        const { array } = ref.current.attributes.position
        for (let i = 0; i < array.length; i += 3) {
            const x = array[i]
            const y = array[i + 1]
            const z = array[i + 2]

            array[i + 2] = z + Math.random()
        }
    }, [])
    return (
        <group>
            <directionalLight position={[0, -10, 0]} intensity={'10'} />
            <mesh>
                <sphereGeometry args={[9, 30, 30]} ref={ref} />
                <meshPhongMaterial color={'#f0a2b0'} flatShading={true} />
            </mesh>
        </group>
    )
}

export default Ripple