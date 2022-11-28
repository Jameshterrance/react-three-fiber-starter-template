import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";
import htmlGLTF from "./html.gltf";

export default function Model(props) {
  const { nodes, materials } = useGLTF(htmlGLTF);
  return (
    <group {...props} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Curve001.geometry}
        material={materials["Material.002"]}
        position={[0, -0.03, -0.01]}
        rotation={[1.75, 0, -Math.PI / 9]}
        scale={700}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Curve003.geometry}
        material={materials["Material.005"]}
        position={[0.02, -0.01, 0]}
        rotation={[1.75, 0, -Math.PI / 9]}
        scale={700}
      />
    </group>
  );
}

useGLTF.preload(htmlGLTF);
