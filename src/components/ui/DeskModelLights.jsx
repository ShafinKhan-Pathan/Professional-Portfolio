import React from "react";

const DeskModelLights = () => {
  return (
    <>
      {/* <ambientLight intensity={0} color="red" /> */}
      <directionalLight position={[1, 0.5, 0.4]} intensity={5} />
      
    </>
  );
};

export default DeskModelLights;
