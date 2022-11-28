import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";
import cssGLTF from "./css.gltf";

export default function Model(props) {
  const { nodes, materials } = useGLTF(cssGLTF);
  return (
    <group {...props} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Curve.geometry}
        material={materials["Material.001"]}
        position={[-0.05, -0.02, 0]}
        rotation={[1.66, 0, -Math.PI / 9]}
        scale={5}
      />
    </group>
  );
}

useGLTF.preload(cssGLTF);
