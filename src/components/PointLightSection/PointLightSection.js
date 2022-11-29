import { useCamera, useHelper } from "@react-three/drei";
import { useFrame, useThree } from "@react-three/fiber";
import React, { useEffect, useRef } from "react";

import { Camera, MathUtils, PointLightHelper } from "three";
import { BackLight, FillLight, KeyLight } from "../Effects&Objects/Lights";




const PointLightSection = React.forwardRef((props, ref) => {

  useEffect(() => {
    const { array } = ref.current.attributes.position
    for (let i = 0; i < array.length; i += 3) {
      const x = array[i]
      const y = array[i + 1]
      const z = array[i + 2]

      array[i + 2] = z + Math.random()
    }
  }, [])


  // const mouse = {
  //   x: undefined,
  //   y: undefined
  // }

  // addEventListener('mousemove', (e) => {
  //   mouse.x = (e.clientX / innerWidth) * 2 - 1
  //   mouse.y = (e.clientY / innerHeight) * 2 + 1


  //   console.log(mouse)
  // })


  return (
    <group position={[472, -540, -20]}>
      {/* <BackLight />
      <FillLight />
      <KeyLight /> */}
      {/* <mesh rotation={[MathUtils.degToRad(30), MathUtils.degToRad(45), 0]} ref={ref}>
        <boxGeometry args={[3, 3, 3]} />
        <meshStandardMaterial castShadow={true} recieveShadow={true} />
      </mesh> */}
      <mesh>
        <planeGeometry args={[20, 8, 15, 15]} ref={ref} />
        <meshPhongMaterial wireframe={false} color={'#202A44'} flatShading={true} />
      </mesh>
    </group>

  );

});

export default PointLightSection;
