import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";
import jsGLTF from "./javascript.gltf";

export default function Model(props) {
  const { nodes, materials } = useGLTF(jsGLTF);
  return (
    <group {...props} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Curve002.geometry}
        material={materials["Material.001"]}
        position={[-0.04, -0.02, -0.03]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={700}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Curve004.geometry}
        material={materials["Material.001"]}
        position={[0.06, 0.01, -0.03]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={700}
      />
    </group>
  );
}

useGLTF.preload(jsGLTF);
