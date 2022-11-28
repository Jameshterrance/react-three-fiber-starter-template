import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";
import sceneGLB from "./globe.glb";

export default function Model(props) {
  const { nodes, materials } = useGLTF(sceneGLB);
  return (
    <group {...props} dispose={null}>
      <group rotation={[-Math.PI / 2, 0, 0]}>
        <group position={[-6367, -6367, -6367]}>
          <lineSegments
            geometry={nodes.Object_3.geometry}
            material={materials["Scene_-_Root"]}
          />
          <lineSegments
            geometry={nodes.Object_4.geometry}
            material={materials["Scene_-_Root"]}
          />
          <lineSegments
            geometry={nodes.Object_5.geometry}
            material={materials["Scene_-_Root"]}
          />
          <lineSegments
            geometry={nodes.Object_7.geometry}
            material={materials["Scene_-_Root"]}
          />
          <lineSegments
            geometry={nodes.Object_10.geometry}
            material={materials["Scene_-_Root"]}
          />
          <lineSegments
            geometry={nodes.Object_11.geometry}
            material={materials["Scene_-_Root"]}
          />
          <lineSegments
            geometry={nodes.Object_12.geometry}
            material={materials["Scene_-_Root"]}
          />
          <lineSegments
            geometry={nodes.Object_13.geometry}
            material={materials["Scene_-_Root"]}
          />
          <lineSegments
            geometry={nodes.Object_14.geometry}
            material={materials["Scene_-_Root"]}
          />
          <lineSegments
            geometry={nodes.Object_15.geometry}
            material={materials["Scene_-_Root"]}
          />
          <lineSegments
            geometry={nodes.Object_16.geometry}
            material={materials["Scene_-_Root"]}
          />
          <lineSegments
            geometry={nodes.Object_17.geometry}
            material={materials["Scene_-_Root"]}
          />
          <lineSegments
            geometry={nodes.Object_18.geometry}
            material={materials["Scene_-_Root"]}
          />
          <lineSegments
            geometry={nodes.Object_19.geometry}
            material={materials["Scene_-_Root"]}
          />
          <lineSegments
            geometry={nodes.Object_20.geometry}
            material={materials["Scene_-_Root"]}
          />
          <lineSegments
            geometry={nodes.Object_21.geometry}
            material={materials["Scene_-_Root"]}
          />
          <lineSegments
            geometry={nodes.Object_22.geometry}
            material={materials["Scene_-_Root"]}
          />
          <lineSegments
            geometry={nodes.Object_23.geometry}
            material={materials["Scene_-_Root"]}
          />
          <lineSegments
            geometry={nodes.Object_24.geometry}
            material={materials["Scene_-_Root"]}
          />
          <lineSegments
            geometry={nodes.Object_25.geometry}
            material={materials["Scene_-_Root"]}
          />
          <lineSegments
            geometry={nodes.Object_26.geometry}
            material={materials["Scene_-_Root"]}
          />
          <lineSegments
            geometry={nodes.Object_27.geometry}
            material={materials["Scene_-_Root"]}
          />
          <lineSegments
            geometry={nodes.Object_28.geometry}
            material={materials["Scene_-_Root"]}
          />
          <lineSegments
            geometry={nodes.Object_31.geometry}
            material={materials["Scene_-_Root"]}
          />
          <lineSegments
            geometry={nodes.Object_33.geometry}
            material={materials["Scene_-_Root"]}
          />
        </group>
      </group>
    </group>
  );
}

useGLTF.preload(sceneGLB);
