// src/components/GalleryItem.jsx
import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, useTexture } from "@react-three/drei";

const ImagePlane = ({ url }) => {
    const texture = useTexture(url);
    return (
        <mesh>
            <planeGeometry args={[3, 4]} />
            <meshBasicMaterial map={texture} />
        </mesh>
    );
};

const GalleryItem = ({ url }) => {
    return (
        <div className="w-[300px] h-[400px]">
            <Canvas camera={{ position: [15, 15, 15] }}>
                <Suspense fallback={null}>
                    <ImagePlane url={url} />
                    <OrbitControls enableZoom={false} enablePan={false} />
                </Suspense>
            </Canvas>
        </div>
    );
};

export default GalleryItem;
