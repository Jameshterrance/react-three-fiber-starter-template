import React, { useEffect, useMemo, useRef, useState } from "react";
import { Canvas, useFrame, extend, useThree } from "@react-three/fiber";
import { Box, OrbitControls, Ring, Stars } from "@react-three/drei";
import { EffectComposer } from "three/examples/jsm/postprocessing/EffectComposer";
import { RenderPass } from "three/examples/jsm/postprocessing/RenderPass";
import { UnrealBloomPass } from "three/examples/jsm/postprocessing/UnrealBloomPass";
import "./styles.css";
import { gsap } from "gsap/all";
import FeaturedProjects from "./components/FeaturedProjects/FeaturedProjects";
import SolarSystem from "./components/SkillObject/SolarSystem";
import ContactPage from "./components/ContactPage/ContactPage";
import ContactPageTest from "./components/ContactPage/ContactPageTest";
import AboutSection from "./components/AboutSection/AboutSection";
import { MathUtils } from "three";
extend({ EffectComposer, RenderPass, UnrealBloomPass });
const KaiLandingAI = () => {
  const scene = useRef();

  useFrame(() => {
    scene.current.position.y = Math.sin(45);
  });
  return (
    <group ref={scene} position={[0, 0, 0]}>
      <mesh scale={2}>
        <ringGeometry args={[3, 4, 120, 30]} />
        <meshBasicMaterial color={"#fff"} />
      </mesh>
    </group>
  );
};

export default function App() {
  const abstergoRef = useRef();

  function Rig() {
    const { camera } = useThree();

    useEffect(() => {
      camera.position.z = 45;
      // camera.position.y = 0;

      const timeline = gsap.timeline({
        ease: "expo.in",
        scrollTrigger: {
          trigger: ".home_container",
          start: "top top",
          end: "+=6000",
          scrub: 3,
          pin: true,
        },
      });

      timeline
        .to(camera.position, {
          y: -80,
          duration: 2,
          immediateRender: false,
        })
        // .to(camera.position, {
        //   x: 100,
        //   // duration: 2,
        //   immediateRender: false,
        // })
        // .to(camera.position, {
        //   x: 200,
        //   // duration: 2,
        //   immediateRender: false,
        // })
        // .to(camera.position, {
        //   x: 300,
        //   // duration: 2,
        //   immediateRender: false,
        // })
        .to(camera.position, {
          x: 400,
          duration: 2,
          immediateRender: false,
        })
        .to(camera.position, {
          y: -200,
          duration: 2,
          immediateRender: false,
        })
        .to(camera.position, {
          y: -400,
          duration: 2,
          immediateRender: false,
        })
        .to(camera.position, {
          x: 490,
          duration: 2,
          immediateRender: false,
        })
        .to(camera.position, {
          y: -385,
          duration: 2,
          immediateRender: false,
        })
        // .to(camera.position, {
        //   z: 12,
        //   duration: 2,
        //   immediateRender: false,
        // })
        .to(camera.position, {
          x: 472,
          y: -382,
          z: -15,
          duration: 4,
          immediateRender: false,
        })
        .to(camera.position, {
          y: -460,
          duration: 4,
          immediateRender: false,
        });
    }, []);

    return camera.position;
  }

  return (
    <div className="home_container">
      <Canvas style={{ width: "100vw", height: "100vh" }}>
        <directionalLight intensity={0.5} />
        <Stars
          radius={500}
          depth={50}
          count={10000}
          factor={6}
          saturation={0}
          fade
          speed={1}
        />
        <ambientLight />
        {/* <OrbitControls /> */}
        <Rig />
        {/* section 1 */}
        <KaiLandingAI />
        {/* section 2 */}
        <FeaturedProjects />

        {/* section 3 */}
        {/* <SolarSystem ref={SolarRef} /> */}

        {/* section 4 */}

        <ContactPage />

        <AboutSection ref={(el) => (abstergoRef.current = el)} />
      </Canvas>
    </div>
  );
}
