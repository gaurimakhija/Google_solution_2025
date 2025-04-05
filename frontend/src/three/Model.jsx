// src/three/Model.jsx
import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";

const Model = ({ position = [0, 0, 0], scale = 1 }) => {
    const { scene } = useGLTF("/models/sample.glb"); // make sure this path is correct
    const modelRef = useRef();

    return <primitive ref={modelRef} object={scene} position={position} scale={scale} />;
};

export default Model;
