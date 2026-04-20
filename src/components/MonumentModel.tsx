import {
  useGLTF,
  Stage,
  PresentationControls,
  OrbitControls,
  Environment,
  Box,
} from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { Suspense, useState, useEffect } from "react";

function Model({ path }: { path: string }) {
  const { scene } = useGLTF(path);
  return <primitive object={scene} />;
}

// preload model biar lebih stabil
useGLTF.preload("/models/taj_mahal.glb");

function FallbackBox() {
  return (
    <Box args={[1, 1, 1]}>
      <meshStandardMaterial color="#38bdf8" wireframe />
    </Box>
  );
}

export default function MonumentModel({
  modelPath,
  isDark,
}: {
  modelPath: string;
  isDark?: boolean;
}) {
  const [hasError, setHasError] = useState(false);

  useEffect(() => {
    setHasError(false);
  }, [modelPath]);

  return (
    <div
      className={`w-full h-[300px] md:h-[400px] ${
        isDark ? "bg-transparent" : "bg-stone-100"
      } rounded-xl overflow-hidden relative ${
        isDark ? "" : "border border-stone-200"
      }`}
    >
      <Suspense
        fallback={
          <div
            className={`absolute inset-0 flex items-center justify-center ${
              isDark ? "bg-transparent" : "bg-stone-50"
            }`}
          >
            <div className="animate-pulse flex flex-col items-center gap-2">
              <div
                className={`w-12 h-12 rounded-full border-4 ${
                  isDark
                    ? "border-white/10 border-t-sky-500"
                    : "border-stone-200 border-t-stone-800"
                } animate-spin`}
              />
              <p
                className={`text-[10px] uppercase tracking-widest ${
                  isDark ? "text-white/20" : "text-stone-400"
                } font-bold`}
              >
                Loading 3D Model...
              </p>
            </div>
          </div>
        }
      >
        <Canvas
          dpr={[1, 2]}
          camera={{ fov: 45 }}
          shadows
          gl={{ alpha: true, antialias: true }}
        >
          {!isDark && <color attach="background" args={["#fafaf9"]} />}

          <Environment preset="city" />

          <PresentationControls
            speed={1.5}
            global
            zoom={0.5}
            polar={[-0.1, Math.PI / 4]}
          >
            <Stage
              environment="city"
              intensity={0.6}
              shadows="contact"
              adjustCamera
            >
              {/* Model */}
              <Model path={modelPath} />
            </Stage>
          </PresentationControls>

          <OrbitControls makeDefault enableZoom={false} enablePan={false} />
        </Canvas>
      </Suspense>

      {hasError && (
        <div className="absolute inset-0 flex flex-col items-center justify-center bg-black/60 backdrop-blur-sm p-8 text-center">
          <p className="text-sky-400 text-[10px] uppercase tracking-[0.3em] font-bold mb-2">
            Technical Error
          </p>
          <p className="text-white text-sm font-serif italic mb-4">
            Model file not found
          </p>
          <div className="text-[9px] text-white/40 uppercase tracking-widest leading-loose">
            Ensure file exists at:
            <br />
            <span className="text-white/60">/public{modelPath}</span>
          </div>
        </div>
      )}
    </div>
  );
}
