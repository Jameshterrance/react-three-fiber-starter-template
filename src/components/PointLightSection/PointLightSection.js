import React from "react";

const PointLightSection = () => {
  return (
    <group>
      <mesh>
        <boxGeometry args={[3, 3, 3]} />
        <meshBasicMAterial color={"red"} />
      </mesh>
    </group>
  );
};

export default PointLightSection;
