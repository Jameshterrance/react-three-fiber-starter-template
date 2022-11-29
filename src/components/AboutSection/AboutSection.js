import { Cloud } from "@react-three/drei";
import React, { Suspense } from "react";
import { BackLight, FillLight, KeyLight } from "../Effects&Objects/Lights";

const AboutSection = React.forwardRef((props, ref) => {
  return (
    <group position={[472, -460, -45]}>
      {/* <pointLight position={[15, 15, 15]} intensity={1} /> */}
      <Suspense fallback={null}>
        {/* <hemisphereLight intensity={0.5} position={[5, 10, 50]} /> */}

        <FillLight />
        <BackLight />
        <KeyLight />
        <mesh scale={1} position={[0, 0, 0]} ref={ref}>
          <ringGeometry args={[2, 4, 1]} />
          <meshStandardMaterial color="white" roughness={0} />

        </mesh>
        <Cloud
          opacity={0.2}
          speed={0.4} // Rotation speed
          width={15} // Width of the full cloud
          depth={0.5} // Z-dir depth
          segments={10}
          color={"#3b0954"}
          args={[3, 2]}
          scale={5}
        />
      </Suspense>
    </group>
  );
});

export default AboutSection;
