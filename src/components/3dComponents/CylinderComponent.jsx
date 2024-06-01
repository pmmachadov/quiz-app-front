import React, { useRef, useEffect } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import * as THREE from 'three';

const Cylinder = () => {
  const meshRef = useRef();
  const { scene } = useThree();

  useEffect(() => {
    const geometry = new THREE.CylinderGeometry(1.5, 1.5, 1, 32);

    const material = new THREE.ShaderMaterial({
      uniforms: {
        time: { value: 0 },
        color1: { value: new THREE.Color(0x888888) },
        color2: { value: new THREE.Color(0xcccccc) },
      },
      vertexShader: `
        varying vec3 vUv;

        void main() {
          vUv = position;
          gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
        }
      `,
      fragmentShader: `
        uniform float time;
        uniform vec3 color1;
        uniform vec3 color2;
        varying vec3 vUv;

        void main() {
          float strength = (sin(time + vUv.y * 2.0) + 1.0) / 2.0;
          gl_FragColor = vec4(mix(color1, color2, strength), 1.0);
        }
      `
    });

    const cylinder = new THREE.Mesh(geometry, material);
    cylinder.rotation.x = Math.PI / 7;  // Initial rotation for better visibility
    cylinder.castShadow = true;
    cylinder.receiveShadow = true;

    meshRef.current = cylinder;
    scene.add(cylinder);

    return () => {
      scene.remove(cylinder);
      geometry.dispose();
      material.dispose();
    };
  }, [scene]);

  useFrame(() => {
    if (meshRef.current) {
      // Increase the rotation rate for more noticeable effect
      meshRef.current.rotation.x += 0.01;  // Incrementar la rotación en X
      meshRef.current.rotation.y += 0.02;  // Incrementar la rotación en Y
    }
  });

  return null;
};

const CylinderComponent = () => {
  return (
    <Canvas style={{ width: '10em', height: '10em' }} camera={{ position: [-1, 3, 5], fov: 50 }} shadows>
      <ambientLight intensity={0.5} />
      <pointLight position={[10, 10, 10]} castShadow intensity= {1} shadow-mapSize-width={1024} shadow-mapSize-height={1024} />
      <Cylinder />
    </Canvas>
  );
};

export default CylinderComponent;
