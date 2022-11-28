import {
  Cloud,
  OrbitControls,
  Sparkles,
  Text,
  Text3D,
  useGLTF,
} from "@react-three/drei";
import { useFrame, useLoader } from "@react-three/fiber";
import React, { useRef, Suspense } from "react";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { TextureLoader } from "three/src/loaders/TextureLoader";
import Javascript3d from "../../assets/Models/Javascript/Javascript";
import React3d from "../../assets/Models/React/React";
import Html3d from "../../assets/Models/Html/Html";
import Css3d from "../../assets/Models/CSS/Css";

// function Model(props) {
//   const gltf = useLoader(
//     GLTFLoader,
//     "../../assets/Models/Javascript/javascript.gltf"
//   );
//   return (
//     <Suspense fallback={null}>
//       <primitive object={gltf.scene} />
//     </Suspense>
//   );
// }

const SolarSystem = React.forwardRef((props, ref) => {
  //   const sphereMap = useLoader(TextureLoader, "./assets/html-logo.png");
  const sphereRef = useRef(null);
  const sphereRef1 = useRef(null);
  const sphereRef2 = useRef(null);
  const sphereRef3 = useRef(null);

  const skills = [
    { name: "HTML5" },
    { name: "CSS3" },
    { name: "React" },
    { name: "TailwindCSS" },
    { name: "Firebase" },
    { name: "Sass" },
    { name: "React Query" },
    { name: "Axios" },
    { name: "ThreeJS" },
  ];

  useFrame((state) => {
    if (!sphereRef.current) {
      return;
    }

    sphereRef.current.rotation.y += Math.sin(30) * 0.01;
    sphereRef.current.rotation.x += Math.cos(60) * 0.01;
    // sphereRef.current.rotation.z -= 0.001;

    sphereRef1.current.rotation.y += Math.sin(30) * 0.008;
    sphereRef1.current.rotation.x += Math.cos(60) * 0.008;
    // // sphereRef1.current.rotation.z -= 0.001;

    sphereRef2.current.rotation.y += Math.sin(45) * 0.006;
    sphereRef2.current.rotation.x += Math.cos(45) * 0.006;
    // // sphereRef2.current.rotation.z -= 0.001;

    sphereRef3.current.rotation.y += Math.sin(30) * 0.004;
    sphereRef3.current.rotation.x += Math.cos(60) * 0.004;
    sphereRef3.current.rotation.z -= 0.001;
  });

  const SolarGlobe = (props) => {
    const CustomModelComponent = () => {
      return React.createElement(props.model3d);
    };

    return (
      <group position={props.position}>
        {/* <points visible={props.visible}>
          <sphereGeometry args={[3, 32, 32]} />
          <pointsMaterial size={0.03} />
        </points> */}
        {props.skill === "ThreeJS" && <Javascript3d />}
        {props.skill === "React" && <React3d />}
        {props.skill === "HTML5" && <Html3d />}
        {props.skill === "CSS3" && <Css3d />}

        {/* {props.skill === "HTML5" && <Javascript3d />} */}
      </group>
    );
  };

  const FakeGlobe = (props) => {
    return (
      <group>
        <points
          visible={true}
          position={props.position}
          rotation={props.rotation}
        >
          <sphereGeometry args={[8, 64, 64]} />
          <pointsMaterial size={0.03} />
          {/* <meshStandardMaterial color="lightGreen" /> */}
        </points>
        <Text
          fontSize={2.5}
          maxWidth={200}
          lineHeight={1}
          letterSpacing={0.02}
          textAlign={"left"}
          font="https://fonts.gstatic.com/s/raleway/v14/1PtrgYS_SKggPNwK4vaqI.woff"
          anchorX="center"
          anchorY="middle"
          // fillOpacity={0}
          // strokeWidth={"2.5%"}
          // strokeColor="#ffffff"
          fontWeight="bold"
        >
          Javascript
        </Text>
      </group>
    );
  };
  return (
    <Suspense fallback={null}>
      <group ref={ref} position={[400, -200, 0]}>
        <group position={[0, 0, 0]}>
          {/* <Cloud
            position={[-10, 10, 0]}
            opacity={0.01}
            speed={0.1} // Rotation speed
            width={30} // Width of the full cloud
            depth={0.05} // Z-dir depth
            segments={50} // Number of particles
          />
          <Cloud
            position={[10, 10, 0]}
            opacity={0.01}
            speed={0.1} // Rotation speed
            width={30} // Width of the full cloud
            depth={0.05} // Z-dir depth
            segments={50} // Number of particles
          />
          <Cloud
            position={[-10, -10, 0]}
            opacity={0.01}
            speed={0.1} // Rotation speed
            width={30} // Width of the full cloud
            depth={0.05} // Z-dir depth
            segments={50} // Number of particles
          />
          <Cloud
            position={[10, -10, 0]}
            opacity={0.01}
            speed={0.1} // Rotation speed
            width={30} // Width of the full cloud
            depth={0.05} // Z-dir depth
            segments={50} // Number of particles
          /> */}
        </group>

        <group>
          <FakeGlobe />
        </group>
        <group position={[0, 0, 0]} ref={sphereRef}>
          <SolarGlobe visible={false} />
          {/* <SolarGlobe position={[20, 10, -20]} skill="HTML5" /> */}
          <SolarGlobe position={[15, 15, 0]} skill="HTML5" />
        </group>
        <group position={[0, 0, 0]} ref={sphereRef1}>
          <SolarGlobe visible={false} />
          <SolarGlobe position={[-15, -15, 0]} skill="CSS3" />
        </group>
        <group position={[0, 0, 0]} ref={sphereRef2}>
          <SolarGlobe visible={false} />
          <SolarGlobe position={[15, -15, 0]} skill="React" />
        </group>
        <group position={[0, 0, 0]} ref={sphereRef3}>
          <SolarGlobe visible={false} />
          <SolarGlobe position={[-15, 15, 0]} skill="ThreeJS" />
        </group>
      </group>
    </Suspense>
  );
});

export default SolarSystem;
