import * as THREE from 'three'
import React, { useRef, Suspense } from 'react'
import { shaderMaterial } from '@react-three/drei'
import glsl from 'babel-plugin-glsl/macro'
import { extend, useFrame, useLoader } from '@react-three/fiber'


const WaveShaderMaterial = shaderMaterial(
    // Uniform 
    {
        uTime: 0,
        uColor: new THREE.Color(0.0, 0.0, 0.0),
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
        float noiseAmp = 0.25;
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
    }
    `
);

extend({ WaveShaderMaterial })

export const Boxes = () => {

    const ref = useRef()
    useFrame(({ clock }) => (
        ref.current.uTime = clock.getElapsedTime()
    ))

    return (
        <Suspense fallback={null}>
            <group position={[472, -540, -20]}>
                <pointLight position={[10, 10, 10]} />
                <mesh>
                    <planeGeometry args={[4, 6, 20, 20]} />
                    <waveShaderMaterial uColor={'hotPink'} ref={ref} wireframe={true} />
                </mesh>
            </group>
        </Suspense>
    )
}


