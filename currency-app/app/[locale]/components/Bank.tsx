import { Canvas, useFrame, useLoader } from "@react-three/fiber";
import { useRef, useState } from "react";
import { Group } from "three";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader.js";

export const Bank: React.FC = () => {
  return (
    <Canvas style={{ height: "100%", width: "100%" }}>
      <Model />
    </Canvas>
  );
};

export const Model: React.FC = () => {
  const myModel = useLoader(GLTFLoader, "/t_concrete_wall_002_4k.gltf");

  const groupRef = useRef<Group>(null);

  const [rotationY, setRotationY] = useState(0); // State to control rotation

  useFrame((_state, delta) => {
    // Smoothly rotate the model
    setRotationY((prevRotationY) => prevRotationY + delta / 5);
  });

  const parentAspect = 1 / 1; // Adjust this aspect ratio as needed

  return (
    <>
      <pointLight position={[-10, -10, -10]} intensity={1000} />
      <pointLight position={[10, 10, 10]} intensity={1000} />
      <group ref={groupRef} rotation-y={rotationY} scale={[parentAspect, 1, 1]}>
        <primitive object={myModel.scene} />
      </group>
    </>
  );
};

export default Bank;
