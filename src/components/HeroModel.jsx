// import { OrbitControls } from '@react-three/drei'
import { OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import React from "react";
import { useMediaQuery } from "react-responsive";
import { DeskModel } from "./DeskModel";
import DeskModelLights from "./DeskModelLights";

const HeroModel = () => {
  const isLaptop = useMediaQuery({ query: "(max-width:1350px)" });
  const isTablet = useMediaQuery({ query: "(max-width: 1024px)" });
  const isMobile = useMediaQuery({ query: "(max-width: 768px)" });
  const isSmallMobile = useMediaQuery({ query: "(max-width:480px)" });
  let modelScale = 0.9;
  if (isLaptop) {
    modelScale = 0.8;
  }
  if (isTablet) {
    modelScale = 0.7;
  }
  if (isMobile) {
    modelScale = 1.1;
  }
  if (isSmallMobile) {
    modelScale = 0.9;
  }
  return (
    // In three js everything belongs with canvas and on that we need to setup the camera
    // position: [x-axis, y-axis, z-axis(to pull back little bit)], fov()field of view : 45 (it allows us to nicely frame into the camera)
    <Canvas id="canvas" camera={{ position: [0, 0, 10], fov: 45 }}>
      {/* Setting up the light to show the model where we use ambientLight from three that gives us the intensity of the light and color of the light */}
      {/* <ambientLight intensity={0.2} color="#1a1a40" /> */}
      {/* We are also setting up the directionalLight at the position of x-axis, y-axis and z-axis with the intensity of 5 
      NOTE the more directionalLight intensity you add the more brighter you will see in context to shining not by color*/}
      {/* <directionalLight position={[5, 5, 5]} intensity={5} /> */}
      {/* OrbitControls unlock the move around like rotation, up's and down's of our 3d Model */}
      <OrbitControls
        // enablePan={false} it is used to prevent the 3d model from panning
        enablePan={false}
        // Enable zoom only we are on desktop devices. For this we have downloaded npm i react-responsive library and useMediaQuery({query:'(max-width:1024)'})
        enableZoom={!isTablet}
        // Max distance we can zoom out
        maxDistance={20}
        // Min distance we can zoom in
        minDistance={5}
        // This maxPolarAngle and minPolarAngle allows to control where in the screen we can move. For example we can move upto this point up we cannot see the full scene it will allow only up until Math.PI value
        // maxPolarAngle={Math.PI / 1}
        // minPolarAngle={Math.PI / 2}
      />
      {/* To show something in the page we need to use mesh even after applying lights such as ambientLight & directionalLight you want be able to see anything the reason is we did not setup our mesh and material. The given below is the example of a boxGeometry*/}

      {/* <mesh> */}
      {/* args ={[6,10,10]} it shows how wide and big we want. here the value 6 is to pull back which is z-axis, then height and then width */}
      {/* <boxGeometry args={[1, 1, 1]} /> */}
      {/* After this we can give some material and color for thay by default it's white color */}
      {/* <meshStandardMaterial color="blue" /> */}
      {/* </mesh> */}

      <DeskModelLights />
      {/* We use DeskModel that we created from gltfjsx package in the group. Why in the group because it allows properties such as scale position rotation and many more */}
      <group
        scale={modelScale}
        position={[0, -3, 0]}
        rotation={[0, Math.PI / -3, 0]}
      >
        <DeskModel />
      </group>
    </Canvas>
  );
};

export default HeroModel;
