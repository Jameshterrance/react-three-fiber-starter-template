import * as THREE from 'three'
import { useFrame, extend } from "@react-three/fiber";
import React, { useRef, Suspense } from "react";
// import { MathUtils } from "three";
import { BackLight, FillLight, KeyLight } from "../Effects&Objects/Lights";
import glsl from 'babel-plugin-glsl/macro'
import { shaderMaterial } from '@react-three/drei';


const KaiShaderMaterial = shaderMaterial(
    // Uniform
    {
        uTime: 0,
        uColor: new THREE.Color(0.0, 0.0, 1.0),
    },
    // Vertex Shader
    glsl`
    precision mediump float;
    varying vec2 vUv;
    uniform float uTime;

    #pragma glslify: snoise3 = require(glsl-noise/simplex/3d);

    void main() {
        vUv = uv;

        vec3 pos = position;
        float noiseFreq = 2.5;
        float noiseAmp = 1.0;
        vec3 noisePos = vec3(pos.x * noiseFreq + uTime, pos.y, pos.z);
        pos.z += snoise3(noisePos) * noiseAmp;


        gl_Position = projectionMatrix * modelViewMatrix * vec4 
        (pos, 1.0);
    }
    `,
    // Fragment Shader
    glsl`
    precision mediump float;
    uniform vec3 uColor;
    uniform float uTime;
    varying vec2 vUv;

    void main () {
        gl_FragColor = vec4(sin(vUv.x + uTime ) * uColor, 1.0);
    }`
)
extend({ KaiShaderMaterial })

const KaiLandingAI = () => {
    const scene = useRef();
    const ref = useRef()
    // function getRandomColor(items) {
    //     return items[~~(items.length * Math.random())];
    // }


    useFrame((state) => {
        // ref.current.position.y = Math.cos(state.clock.getElapsedTime());
        ref.current.uTime = state.clock.getElapsedTime()
        // console.log(ref.current.material.color)
    })

    return (
        <Suspense fallback={null}>
            <group position={[0, 0, 0]}>
                <FillLight />
                <BackLight />
                <KeyLight />
                <mesh scale={2} >
                    <ringGeometry args={[3, 4, 120, 120]} />
                    <kaiShaderMaterial uColor={"#ff1818"} ref={ref} wireframe={false} />
                </mesh>
            </group>
        </Suspense>
    );
};

export default KaiLandingAI