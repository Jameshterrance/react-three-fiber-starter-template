import React from "react";

const FeaturedProjects = () => {
  const fakeArr = [{}, {}, {}, {}, {}];

  const ProjectPlane = (props) => {
    return (
      <mesh position={props.position}>
        <planeGeometry args={[80, 45, 10, 10]} />
        <meshStandardMaterial />
      </mesh>
    );
  };

  return (
    <group position={[0, -80, 0]}>
      {fakeArr.map((item, index) => (
        <ProjectPlane position={[index * 100, 0, 0]} />
      ))}
    </group>
  );
};

export default FeaturedProjects;
