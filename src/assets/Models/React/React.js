import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";
import reactGLTF from "./react.gltf";

export default function Model(props) {
  const { nodes, materials } = useGLTF(reactGLTF);
  return (
    <group {...props} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Sphere.geometry}
        material={materials["Material.001"]}
        position={[0, 0.01, -0.19]}
        scale={0.5}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Torus002.geometry}
        material={materials["Material.001"]}
        position={[0, 0.01, -0.19]}
        rotation={[-Math.PI / 2, 1.04, -1.98]}
        scale={2.7}
      />
    </group>
  );
}

useGLTF.preload(reactGLTF);
