import React, { useRef } from 'react';
import { useFrame } from '@react-three/fiber';

export function Model(props: any) {
  const ref = useRef<any>();
  useFrame((state) => {
    ref.current.rotation.y = Math.sin(state.clock.elapsedTime) * 0.2;
  });
  return (
    <mesh ref={ref} {...props}>
      <boxGeometry args={[1, 1, 1]} />
      <meshStandardMaterial color="hotpink" />
    </mesh>
  );
}