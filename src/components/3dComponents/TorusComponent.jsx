import React, { useRef, useEffect } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import * as THREE from 'three';

const Torus = () => {
  const meshRef = useRef();
  const { scene } = useThree();

  useEffect(() => {
    const geometry = new THREE.TorusGeometry(1.5, 0.4, 16, 100);

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

    const torus = new THREE.Mesh(geometry, material);
    torus.rotation.x = Math.PI / 8;  // Initial rotation for better visibility
    torus.castShadow = true;
    torus.receiveShadow = true;

    meshRef.current = torus;
    scene.add(torus);

    return () => {
      scene.remove(torus);
      geometry.dispose();
      material.dispose();
    };
  }, [scene]);

  useFrame(() => {
    if (meshRef.current) {
      // Rotate the torus around both its vertical and horizontal axis
      meshRef.current.rotation.y += 0.01;
      meshRef.current.rotation.x += 0.01;
    }
  });

  return null;
};

const TorusComponent = () => {
  return (
    <Canvas style={{ width: '100%', height: '100%' }} camera={{ position: [-1, 3, 5], fov: 50 }} shadows>
      <ambientLight intensity={0.5} />
      <pointLight position={[10, 10, 10]} castShadow intensity={1} shadow-mapSize-width={1024} shadow-mapSize-height={1024} />
      <Torus />
    </Canvas>
  );
};

export default TorusComponent;
