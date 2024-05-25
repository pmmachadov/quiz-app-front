import React, { useRef, useEffect } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import * as THREE from 'three';

const Dodecahedron = () => {
  const meshRef = useRef();
  const { scene } = useThree();

  useEffect(() => {
    const geometry = new THREE.DodecahedronGeometry(1.5);

    // Utilizamos ShaderMaterial para mantener la coherencia con el shader dinámico
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

    const dodecahedron = new THREE.Mesh(geometry, material);
    dodecahedron.rotation.x = Math.PI / 4; // Initial rotation for better visibility
    dodecahedron.castShadow = true;
    dodecahedron.receiveShadow = true;

    meshRef.current = dodecahedron;
    scene.add(dodecahedron);

    return () => {
      scene.remove(dodecahedron);
      geometry.dispose();
      material.dispose();
    };
  }, [scene]);

  useFrame(() => {
    if (meshRef.current) {
      meshRef.current.rotation.x += 0.005;
      meshRef.current.rotation.y += 0.005;
    }
  });

  return null;
};

const DodecahedronComponent = () => {
  return (
    <Canvas style={{ width: '10em', height: '10em' }} camera={{ position: [0, 0, 5], fov: 50 }} shadows>
      <ambientLight intensity={0.5} />
      <pointLight position={[10, 10, 10]} castShadow intensity={1} shadow-mapSize-width={1024} shadow-mapSize-height={1024} />
      <Dodecahedron />
    </Canvas>
  );
};

export default DodecahedronComponent;
