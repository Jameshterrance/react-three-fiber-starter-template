import * as THREE from 'three'
// import vertexShader from './vertexShader'
// import fragmentShader from './fragmentShader'
import React, { Suspense } from 'react'
import img from '../../assets/globeuv.jpg'
import { OrbitControls, shaderMaterial, useTexture } from '@react-three/drei'
import { ShaderMaterial } from 'three'
import glsl from 'babel-plugin-glsl/macro'

const GlobeShaderMaterial = shaderMaterial(
    // Uniform
    {
        // uColor: new THREE.Color(0.0, 0.0, 1.0)
    },
    // Vertex Shader
    glsl`
        void main() {
            gl_Position = vec4(1, 0, 0, 1);
    }
    `,
    // Fragment Shader
    glsl`
        void main(){
            gl_FragColor = vec4(1, 0, 0, 1);
        }
    `
)

const Globe = () => {
    const texture = useTexture(img)
    return (
        <Suspense fallback={null}>
            <OrbitControls />
            <group>
                <mesh>
                    <sphereGeometry args={[5, 64, 64]} />
                    <GlobeShaderMaterial />
                </mesh>
            </group>
        </Suspense>
    )
}

export default Globe