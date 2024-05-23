// OctahedronComponent.jsx
import React, { useRef, useEffect } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import * as THREE from 'three';

const Octahedron = () => {
  const meshRef = useRef();
  const { scene } = useThree();

  useEffect(() => {
    const geometry = new THREE.OctahedronGeometry(2, 2);
    const colors = [];
    const lightDirection = new THREE.Vector3(10, 10, 10).normalize();

    const positionAttribute = geometry.getAttribute('position');
    const normalAttribute = geometry.getAttribute('normal');

    for (let i = 0; i < positionAttribute.count; i += 3) {
      const normal = new THREE.Vector3(
        normalAttribute.getX(i),
        normalAttribute.getY(i),
        normalAttribute.getZ(i)
      );

      const dotProduct = normal.dot(lightDirection);
      const colorValue = (dotProduct + 1) / 2;
      const color = new THREE.Color(colorValue, colorValue, colorValue);

      for (let j = 0; j < 3; j++) {
        colors.push(color.r, color.g, color.b);
      }
    }

    geometry.setAttribute('color', new THREE.Float32BufferAttribute(colors, 3));
    const material = new THREE.MeshPhongMaterial({ vertexColors: true });

    const mesh = new THREE.Mesh(geometry, material);
    meshRef.current = mesh;
    scene.add(mesh);

    return () => {
      scene.remove(mesh);
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

const OctahedronComponent = () => {
  return (
    <Canvas style={{ width: '100%', height: '100%' }} camera={{ position: [0, 0, 5], fov: 50 }}>
      <ambientLight intensity={0.5} />
      <pointLight position={[10, 10, 10]} />
      <Octahedron />
      <OrbitControls 
        enablePan={false} 
        enableZoom={false} 
        enableDamping 
        dampingFactor={0.2}  
        rotateSpeed={0.25}  
      />
    </Canvas>
  );
};

export default OctahedronComponent;
