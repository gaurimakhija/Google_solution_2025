// src/three/Scene.jsx
import React from "react";
import Model from "./Model";

const Scene = () => {
    return (
        <group>
            <Model position={[-4, 0, 0]} scale={1.5} />
            <Model position={[0, 0, 0]} scale={1.5} />
            <Model position={[4, 0, 0]} scale={1.5} />
        </group>
    );
};

export default Scene;
