import React, { Suspense } from "react";
import { MathUtils } from "three";
import EarthModel from "../../assets/Models/ContactEarthModel/EarthModel";
const ContactPage = () => {
  return (
    <group
      position={[400, -400, 0]}
      rotation-x={MathUtils.degToRad(Math.PI * 20)}
    >
      <Suspense fallback={null}>
        <EarthModel />
      </Suspense>
    </group>
  );
};

export default ContactPage;
