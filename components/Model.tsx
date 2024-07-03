import { useFrame } from "@react-three/fiber";
import { useAnimations, useGLTF } from "@react-three/drei";
import { useEffect, useRef, useState } from "react";
import { Group } from "three";

useGLTF.preload("/Robot.glb");

export default function Model() {
  const group = useRef<Group>(null);

  const { scene, animations } = useGLTF("/Robot.glb");
  const { actions } = useAnimations(animations, scene);
  const [isJumpingDown, setIsJumpingDown] = useState(true);

  useEffect(() => {
    if (group.current) {
      group.current.position.y = 5;
      group.current.position.x = 0.2;
      group.current.scale.set(0.5, 0.5, 0.5); // Reduce the size of the robot by scaling it down
    }
    const jumpDownAction = actions["jumpDown"];
    if (jumpDownAction) {
      jumpDownAction.play();
    }
  }, [actions]);

  useFrame((state, delta) => {
    if (isJumpingDown && group.current) {
      if (group.current.position.y > -1.8) {
        group.current.position.y -= delta * 4;
      } else {
        setIsJumpingDown(false);
        if (actions["jumpDown"]) {
          actions["jumpDown"].stop();
        }
        if (actions["Take 01"]) {
          actions["Take 01"].play();
        }
      }
    }
  });

  return (
    <group ref={group}>
      <primitive object={scene} />
    </group>
  );
}