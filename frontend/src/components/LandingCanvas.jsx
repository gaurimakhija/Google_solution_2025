// src/components/LandingCanvas.jsx
import React from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Environment } from "@react-three/drei";
import Scene from "../three/Scene";

const LandingCanvas = () => {
    return (
        <Canvas camera={{ position: [0, 2, 10], fov: 35 }}>
            <ambientLight intensity={1} />
            <directionalLight position={[5, 5, 5]} intensity={1.5} />
            <Environment preset="sunset" />
            <Scene />
            <OrbitControls enableZoom={false} />
        </Canvas>
    );
};

export default LandingCanvas;
