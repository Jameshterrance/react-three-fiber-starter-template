import { useRef } from "react"

export const KeyLight = () => {
    const ref = useRef()
    // useHelper(ref, PointLightHelper, 1) 

    return <pointLight ref={ref} args={[`#FF69B4`, 1]} position={[-3, 3, 3]} />
}

export const FillLight = () => {
    const ref = useRef()
    // useHelper(ref, PointLightHelper, 1)

    return <pointLight ref={ref} args={[`#FF69B4`, 0.15]} position={[3, 1, 3]} />
}

export const BackLight = () => {
    const ref = useRef()
    // useHelper(ref, PointLightHelper, 1)

    return <pointLight ref={ref} args={[`#FF69B4`, 0.15]} position={[3, 3, -3]} />
}
