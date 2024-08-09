import { useEffect, useState } from 'react'
import { Canvas, useThree } from "@react-three/fiber";
import { useGLTF, Environment, OrbitControls } from "@react-three/drei";
import gsap from 'gsap';
import * as THREE from 'three';
import Loader from './loader';


function B2({ isWireframe, isColor }) {
  const { nodes, materials } = useGLTF('b2-test2.glb');
  const wireframeMaterial = new THREE.MeshBasicMaterial({ color: '#FF0000', wireframe: true });
  const [hovered, set] = useState(null);
  

  useEffect(() => {
    const cursor = `<svg width="100" height="100" fill="none" xmlns="http://www.w3.org/2000/svg"><g clip-path="url(#clip0)"><path fill="rgba(255, 255, 255, 0.5)" d="M29.5 54C43.031 54 54 43.031 54 29.5S43.031 5 29.5 5 5 15.969 5 29.5 15.969 54 29.5 54z" stroke="#000"/><g filter="url(#filter0_d)"><path d="M29.5 47C39.165 47 47 39.165 47 29.5S39.165 12 29.5 12 12 19.835 12 29.5 19.835 47 29.5 47z" fill="${hovered}"/></g><path d="M2 2l11 2.947L4.947 13 2 2z" fill="#000"/><text fill="#000" style="#fff-space:pre" font-family="Inter var, sans-serif" font-size="10" letter-spacing="-.01em"><tspan x="35" y="63">${hovered}</tspan></text></g><defs><clipPath id="clip0"><path fill="#fff" d="M0 0h100v100H0z"/></clipPath><filter id="filter0_d" x="6" y="8" width="47" height="47" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB"><feFlood flood-opacity="0" result="BackgroundImageFix"/><feColorMatrix in="SourceAlpha" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"/><feOffset dy="2"/><feGaussianBlur stdDeviation="3"/><feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.15 0"/><feBlend in2="BackgroundImageFix" result="effect1_dropShadow"/><feBlend in="SourceGraphic" in2="effect1_dropShadow" result="shape"/></filter></defs></svg>`
    const auto = `<svg width="100" height="100" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill="rgba(255, 255, 255, 0.5)" d="M29.5 54C43.031 54 54 43.031 54 29.5S43.031 5 29.5 5 5 15.969 5 29.5 15.969 54 29.5 54z" stroke="#000"/><path d="M2 2l11 2.947L4.947 13 2 2z" fill="#000"/></svg>`
    if (hovered) {
      document.body.style.cursor = `url('data:image/svg+xml;base64,${btoa(cursor)}'), auto`
      return () => (document.body.style.cursor = `url('data:image/svg+xml;base64,${btoa(auto)}'), auto`)
    }
  }, [hovered])
  return (
    <group 
      onPointerOver={(e) => (e.stopPropagation(), set(e.object.material.name))}
      onPointerOut={(e) => e.intersections.length === 0 && set(null)}
    >
      <mesh geometry={nodes.Wings.geometry} 
      {...(isColor === 'Wings' ? null : { material : isWireframe ? wireframeMaterial : materials.Wings })}
      material-color={(isColor === 'Wings') ? '#008000' : null } 
      position={[-1.621, 27.208, -45.986]} 
      rotation={[Math.PI / 2, 0, -Math.PI / 2]} 
      />
      <mesh
      geometry={nodes.Cockpit.geometry}
      {...(isColor === 'Cockpit' ? null : { material: isWireframe ? wireframeMaterial : materials.Cockpit })}
      material-color={isColor === 'Cockpit' ? '#008000' : null}
      position={[-1.621, 27.208, -45.986]}
      rotation={[Math.PI / 2, 0, -Math.PI / 2]}
      />
      <group position={[-1.621, 3.347, -128.946]} rotation={[-Math.PI, Math.PI / 3, -Math.PI]} scale={2.5}>
        <mesh geometry={nodes.Mesh044.geometry} 
        material-color={(isColor === 'LandingGear') ? '#008000' : null } 
        // material={isWireframe ? wireframeMaterial : materials.LandingGear}
        {...(isColor === 'LandingGear' ? null : { material: isWireframe ? wireframeMaterial : materials.LandingGear })}
        />
        <mesh geometry={nodes.Mesh044_1.geometry} 
        material-color={(isColor === 'LandingGear') ? '#008000' : null } 
        // material={isWireframe ? wireframeMaterial : materials['LandingGear.001']}
        {...(isColor === 'LandingGear' ? null : { material: isWireframe ? wireframeMaterial : materials['LandingGear.001'] })}
        />
        <mesh geometry={nodes.Mesh044_2.geometry} 
        material-color={(isColor === 'LandingGear') ? '#008000' : null } 
        // material={isWireframe ? wireframeMaterial : materials.LandingTire} 
        {...(isColor === 'LandingGear' ? null : { material: isWireframe ? wireframeMaterial : materials.LandingTire })}
        />
      </group>
      <group position={[58.91, 2.928, -34.554]} rotation={[-Math.PI, Math.PI / 3, -Math.PI]} scale={2.5}>
        <mesh geometry={nodes.Mesh045.geometry} 
        material-color={(isColor === 'LandingGear') ? '#008000' : null } 
        // material={isWireframe ? wireframeMaterial : materials.LandingGear} 
        {...(isColor === 'LandingGear' ? null : { material: isWireframe ? wireframeMaterial : materials.LandingGear })}
        />
        <mesh geometry={nodes.Mesh045_1.geometry} 
        material-color={(isColor === 'LandingGear') ? '#008000' : null } 
        {...(isColor === 'LandingGear' ? null : { material: isWireframe ? wireframeMaterial : materials['LandingGear.001'] })}
        />
        <mesh geometry={nodes.Mesh045_2.geometry} 
        material-color={(isColor === 'LandingGear') ? '#008000' : null } 
        {...(isColor === 'LandingGear' ? null : { material: isWireframe ? wireframeMaterial : materials.LandingTire })}
        />
      </group>
      <group position={[-62.152, 2.928, -34.554]} rotation={[-Math.PI, Math.PI / 3, -Math.PI]} scale={2.5}>
        <mesh geometry={nodes.Mesh046.geometry} 
        material-color={(isColor === 'LandingGear') ? '#008000' : null } 
        {...(isColor === 'LandingGear' ? null : { material: isWireframe ? wireframeMaterial : materials.LandingGear })} 
        />
        <mesh geometry={nodes.Mesh046_1.geometry} 
        material-color={(isColor === 'LandingGear') ? '#008000' : null } 
        {...(isColor === 'LandingGear' ? null : { material: isWireframe ? wireframeMaterial : materials['LandingGear.001'] })}
        />
        <mesh geometry={nodes.Mesh046_2.geometry} 
        material-color={(isColor === 'LandingGear') ? '#008000' : null } 
        {...(isColor === 'LandingGear' ? null : { material: isWireframe ? wireframeMaterial : materials.LandingTire })} 
        />
      </group>
      <mesh geometry={nodes.Landing_Plate.geometry} 
      material-color={(isColor === 'Plate') ? '#008000' : null } 
      {...(isColor === 'Plate' ? null : { material: isWireframe ? wireframeMaterial : materials.Wings })}
      position={[-1.621, 13.912, -98.984]} 
      rotation={[2.793, 0, -Math.PI / 2]} 
      />
      <mesh geometry={nodes['Bomb-Storage'].geometry} 
      material-color={(isColor === 'Plate') ? '#008000' : null } 
      {...(isColor === 'Plate' ? null : { material: isWireframe ? wireframeMaterial : materials.Wings })}
      position={[-1.621, 27.208, -45.986]} 
      rotation={[Math.PI / 2, 0, -Math.PI / 2]} 
      />
      <group position={[-16.829, 24.55, -42.815]} rotation={[-Math.PI / 2, 0, -Math.PI]} scale={0.678}>
        <mesh geometry={nodes.Cylinder001_1.geometry} 
        material-color={(isColor === 'Bomb') ? '#008000' : null } 
        // material={isWireframe ? wireframeMaterial : materials.Bomb} 
        {...(isColor === 'Bomb' ? null : { material: isWireframe ? wireframeMaterial : materials.Bomb })}
        />
        <mesh geometry={nodes.Cylinder001_2.geometry} 
        material-color={(isColor === 'Bomb') ? '#008000' : null } 
        // material={isWireframe ? wireframeMaterial : materials['Material.002']}
        {...(isColor === 'Bomb' ? null : { material: isWireframe ? wireframeMaterial : materials['Material.002'] })}
        />
        <mesh geometry={nodes.Cylinder001_3.geometry} 
        material-color={(isColor === 'Bomb') ? '#008000' : null } 
        // material={isWireframe ? wireframeMaterial : materials['Material.003']} 
        {...(isColor === 'Bomb' ? null : { material: isWireframe ? wireframeMaterial : materials['Material.003'] })}
        />
      </group>
      <mesh geometry={nodes.Cylinder002.geometry} 
      material-color={(isColor === 'Bomb') ? '#008000' : null } 
        // material={isWireframe ? wireframeMaterial : materials.Bomb} 
        {...(isColor === 'Bomb' ? null : { material: isWireframe ? wireframeMaterial : materials.Bomb })}
      position={[-16.888, 24.688, -41.862]} 
      rotation={[-Math.PI / 2, 0, -Math.PI]} 
      scale={0.678} 
      />
      <group position={[-6.072, 24.55, -43.339]} rotation={[-Math.PI / 2, 0, -Math.PI]} scale={0.678}>
        <mesh geometry={nodes.Cylinder008_1.geometry} 
        material-color={(isColor === 'Bomb') ? '#008000' : null } 
        // material={isWireframe ? wireframeMaterial : materials.Bomb} 
        {...(isColor === 'Bomb' ? null : { material: isWireframe ? wireframeMaterial : materials.Bomb })}
        />
        <mesh geometry={nodes.Cylinder008_2.geometry} 
        material-color={(isColor === 'Bomb') ? '#008000' : null } 
        // material={isWireframe ? wireframeMaterial : materials['Material.002']}
        {...(isColor === 'Bomb' ? null : { material: isWireframe ? wireframeMaterial : materials['Material.002'] })}
        />
        <mesh geometry={nodes.Cylinder008_3.geometry} 
        material-color={(isColor === 'Bomb') ? '#008000' : null } 
        // material={isWireframe ? wireframeMaterial : materials['Material.003']} 
        {...(isColor === 'Bomb' ? null : { material: isWireframe ? wireframeMaterial : materials['Material.003'] })}
        />
      </group>
      <mesh geometry={nodes.Cylinder004.geometry} 
      material-color={(isColor === 'Bomb') ? '#008000' : null } 
        // material={isWireframe ? wireframeMaterial : materials.Bomb} 
        {...(isColor === 'Bomb' ? null : { material: isWireframe ? wireframeMaterial : materials.Bomb })}
      position={[-6.13, 24.688, -42.387]} 
      rotation={[-Math.PI / 2, 0, -Math.PI]} 
      scale={0.678} 
      />
      <group position={[-14.142, 29.818, -42.815]} rotation={[-Math.PI / 2, 0, -Math.PI]} scale={0.678}>
        <mesh geometry={nodes.Cylinder010_1.geometry} 
        material-color={(isColor === 'Bomb') ? '#008000' : null } 
        // material={isWireframe ? wireframeMaterial : materials.Bomb} 
        {...(isColor === 'Bomb' ? null : { material: isWireframe ? wireframeMaterial : materials.Bomb })}
        />
        <mesh geometry={nodes.Cylinder010_2.geometry} 
        material-color={(isColor === 'Bomb') ? '#008000' : null } 
        // material={isWireframe ? wireframeMaterial : materials['Material.002']}
        {...(isColor === 'Bomb' ? null : { material: isWireframe ? wireframeMaterial : materials['Material.002'] })}
        />
        <mesh geometry={nodes.Cylinder010_3.geometry} 
        material-color={(isColor === 'Bomb') ? '#008000' : null } 
        // material={isWireframe ? wireframeMaterial : materials['Material.003']} 
        {...(isColor === 'Bomb' ? null : { material: isWireframe ? wireframeMaterial : materials['Material.003'] })}
        />
      </group>

      <mesh geometry={nodes.Cylinder006.geometry} 
      material-color={(isColor === 'Bomb') ? '#008000' : null } 
        // material={isWireframe ? wireframeMaterial : materials.Bomb} 
        {...(isColor === 'Bomb' ? null : { material: isWireframe ? wireframeMaterial : materials.Bomb })}
      position={[-14.201, 29.957, -41.862]} 
      rotation={[-Math.PI / 2, 0, -Math.PI]} 
      scale={0.678} 
      />

      <group position={[-13.721, 19.386, -42.815]} rotation={[-Math.PI / 2, 0, -Math.PI]} scale={0.678}>
        <mesh geometry={nodes.Cylinder012_1.geometry} 
        material-color={(isColor === 'Bomb') ? '#008000' : null } 
        // material={isWireframe ? wireframeMaterial : materials.Bomb} 
        {...(isColor === 'Bomb' ? null : { material: isWireframe ? wireframeMaterial : materials.Bomb })}
        />

        <mesh geometry={nodes.Cylinder012_2.geometry} 
        material-color={(isColor === 'Bomb') ? '#008000' : null } 
        // material={isWireframe ? wireframeMaterial : materials['Material.002']}
        {...(isColor === 'Bomb' ? null : { material: isWireframe ? wireframeMaterial : materials['Material.002'] })}
        />

        <mesh geometry={nodes.Cylinder012_3.geometry} 
        material-color={(isColor === 'Bomb') ? '#008000' : null } 
        // material={isWireframe ? wireframeMaterial : materials['Material.003']} 
        {...(isColor === 'Bomb' ? null : { material: isWireframe ? wireframeMaterial : materials['Material.003'] })}
        />

      </group>
      <mesh geometry={nodes.Cylinder008.geometry} 
      material-color={(isColor === 'Bomb') ? '#008000' : null } 
        // material={isWireframe ? wireframeMaterial : materials.Bomb} 
        {...(isColor === 'Bomb' ? null : { material: isWireframe ? wireframeMaterial : materials.Bomb })}
      position={[-13.779, 19.525, -41.862]} 
      rotation={[-Math.PI / 2, 0, -Math.PI]} 
      scale={0.678} 
      />

      <group position={[-8.39, 30.029, -43.339]} rotation={[-Math.PI / 2, 0, -Math.PI]} scale={0.678}>
        <mesh geometry={nodes.Cylinder014_1.geometry} 
        material-color={(isColor === 'Bomb') ? '#008000' : null } 
        // material={isWireframe ? wireframeMaterial : materials.Bomb} 
        {...(isColor === 'Bomb' ? null : { material: isWireframe ? wireframeMaterial : materials.Bomb })}
        />

        <mesh geometry={nodes.Cylinder014_2.geometry} 
        material-color={(isColor === 'Bomb') ? '#008000' : null } 
        // material={isWireframe ? wireframeMaterial : materials['Material.002']}
        {...(isColor === 'Bomb' ? null : { material: isWireframe ? wireframeMaterial : materials['Material.002'] })}
        />

        <mesh geometry={nodes.Cylinder014_3.geometry} 
        material-color={(isColor === 'Bomb') ? '#008000' : null } 
        // material={isWireframe ? wireframeMaterial : materials['Material.003']} 
        {...(isColor === 'Bomb' ? null : { material: isWireframe ? wireframeMaterial : materials['Material.003'] })}
        />

      </group>
      <mesh geometry={nodes.Cylinder010.geometry} 
      material-color={(isColor === 'Bomb') ? '#008000' : null } 
      // material={isWireframe ? wireframeMaterial : materials.Bomb} 
      {...(isColor === 'Bomb' ? null : { material: isWireframe ? wireframeMaterial : materials.Bomb })}
      position={[-8.448, 30.168, -42.387]} 
      rotation={[-Math.PI / 2, 0, -Math.PI]} 
      scale={0.678} 
      />

      <group position={[-8.031, 19.597, -42.815]} rotation={[-Math.PI / 2, 0, -Math.PI]} scale={0.678}>
        <mesh geometry={nodes.Cylinder016_1.geometry} 
        material-color={(isColor === 'Bomb') ? '#008000' : null } 
        // material={isWireframe ? wireframeMaterial : materials.Bomb} 
        {...(isColor === 'Bomb' ? null : { material: isWireframe ? wireframeMaterial : materials.Bomb })}
        />

        <mesh geometry={nodes.Cylinder016_2.geometry} 
        material-color={(isColor === 'Bomb') ? '#008000' : null } 
        // material={isWireframe ? wireframeMaterial : materials['Material.002']}
        {...(isColor === 'Bomb' ? null : { material: isWireframe ? wireframeMaterial : materials['Material.002'] })}
        />

        <mesh geometry={nodes.Cylinder016_3.geometry} 
        material-color={(isColor === 'Bomb') ? '#008000' : null } 
        // material={isWireframe ? wireframeMaterial : materials['Material.003']} 
        {...(isColor === 'Bomb' ? null : { material: isWireframe ? wireframeMaterial : materials['Material.003'] })}
        />

      </group>
      <mesh geometry={nodes.Cylinder012.geometry} 
      material-color={(isColor === 'Bomb') ? '#008000' : null } 
      // material={isWireframe ? wireframeMaterial : materials.Bomb} 
      {...(isColor === 'Bomb' ? null : { material: isWireframe ? wireframeMaterial : materials.Bomb })}
      position={[-8.089, 19.736, -41.862]} 
      rotation={[-Math.PI / 2, 0, -Math.PI]} 
      scale={0.678} 
      />

      <mesh geometry={nodes.Cylinder013.geometry} 
      material-color={(isColor === 'Bomb') ? '#008000' : null } 
      // material={isWireframe ? wireframeMaterial : materials['Material.004']} 
      {...(isColor === 'Bomb' ? null : { material: isWireframe ? wireframeMaterial : materials['Material.004'] })}
      position={[9.025, 25.243, -56.891]} 
      rotation={[Math.PI / 2, 0.061, 0]} 
      />

      <group position={[3.718, 25.363, -42.815]} rotation={[-Math.PI / 2, 0.061, -Math.PI]} scale={0.678}>
        <mesh geometry={nodes.Cylinder019_1.geometry} 
        material-color={(isColor === 'Bomb') ? '#008000' : null } 
        // material={isWireframe ? wireframeMaterial : materials.Bomb} 
        {...(isColor === 'Bomb' ? null : { material: isWireframe ? wireframeMaterial : materials.Bomb })}
        />

        <mesh geometry={nodes.Cylinder019_2.geometry} 
        material-color={(isColor === 'Bomb') ? '#008000' : null } 
        // material={isWireframe ? wireframeMaterial : materials['Material.002']}
        {...(isColor === 'Bomb' ? null : { material: isWireframe ? wireframeMaterial : materials['Material.002'] })}
        />

        <mesh geometry={nodes.Cylinder019_3.geometry} 
        material-color={(isColor === 'Bomb') ? '#008000' : null } 
        // material={isWireframe ? wireframeMaterial : materials['Material.003']} 
        {...(isColor === 'Bomb' ? null : { material: isWireframe ? wireframeMaterial : materials['Material.003'] })}
        />

      </group>
      <mesh geometry={nodes.Cylinder015.geometry} 
      material-color={(isColor === 'Bomb') ? '#008000' : null } 
      // material={isWireframe ? wireframeMaterial : materials.Bomb} 
      {...(isColor === 'Bomb' ? null : { material: isWireframe ? wireframeMaterial : materials.Bomb })}
      position={[3.668, 25.505, -41.862]} 
      rotation={[-Math.PI / 2, 0.061, -Math.PI]} 
      scale={0.678} 
      />

      <group position={[14.456, 24.709, -43.339]} rotation={[-Math.PI / 2, 0.061, -Math.PI]} scale={0.678}>
        <mesh geometry={nodes.Cylinder021_1.geometry} 
        material-color={(isColor === 'Bomb') ? '#008000' : null } 
        // material={isWireframe ? wireframeMaterial : materials.Bomb} 
        {...(isColor === 'Bomb' ? null : { material: isWireframe ? wireframeMaterial : materials.Bomb })}
        />

        <mesh geometry={nodes.Cylinder021_2.geometry} 
        material-color={(isColor === 'Bomb') ? '#008000' : null } 
        // material={isWireframe ? wireframeMaterial : materials['Material.002']}
        {...(isColor === 'Bomb' ? null : { material: isWireframe ? wireframeMaterial : materials['Material.002'] })}
        />

        <mesh geometry={nodes.Cylinder021_3.geometry} 
        material-color={(isColor === 'Bomb') ? '#008000' : null } 
        // material={isWireframe ? wireframeMaterial : materials['Material.003']} 
        {...(isColor === 'Bomb' ? null : { material: isWireframe ? wireframeMaterial : materials['Material.003'] })}
        />

      </group>
      <mesh geometry={nodes.Cylinder017.geometry} 
      material-color={(isColor === 'Bomb') ? '#008000' : null } 
      // material={isWireframe ? wireframeMaterial : materials.Bomb} 
      {...(isColor === 'Bomb' ? null : { material: isWireframe ? wireframeMaterial : materials.Bomb })}
      position={[14.406, 24.851, -42.387]} 
      rotation={[-Math.PI / 2, 0.061, -Math.PI]} 
      scale={0.678} 
      />

      <group position={[6.72, 30.459, -42.815]} rotation={[-Math.PI / 2, 0.061, -Math.PI]} scale={0.678}>
        <mesh geometry={nodes.Cylinder023_1.geometry} 
        material-color={(isColor === 'Bomb') ? '#008000' : null } 
        // material={isWireframe ? wireframeMaterial : materials.Bomb} 
        {...(isColor === 'Bomb' ? null : { material: isWireframe ? wireframeMaterial : materials.Bomb })}
        />

        <mesh geometry={nodes.Cylinder023_2.geometry} 
        material-color={(isColor === 'Bomb') ? '#008000' : null } 
        // material={isWireframe ? wireframeMaterial : materials['Material.002']}
        {...(isColor === 'Bomb' ? null : { material: isWireframe ? wireframeMaterial : materials['Material.002'] })}
        />

        <mesh geometry={nodes.Cylinder023_3.geometry} 
        material-color={(isColor === 'Bomb') ? '#008000' : null } 
        // material={isWireframe ? wireframeMaterial : materials['Material.003']} 
        {...(isColor === 'Bomb' ? null : { material: isWireframe ? wireframeMaterial : materials['Material.003'] })}
        />

      </group>
      <mesh geometry={nodes.Cylinder019.geometry} 
      material-color={(isColor === 'Bomb') ? '#008000' : null } 
      // material={isWireframe ? wireframeMaterial : materials.Bomb} 
      {...(isColor === 'Bomb' ? null : { material: isWireframe ? wireframeMaterial : materials.Bomb })}
      position={[6.67, 30.601, -41.862]} 
      rotation={[-Math.PI / 2, 0.061, -Math.PI]} 
      scale={0.678} 
      />

      <group position={[6.507, 20.021, -42.815]} rotation={[-Math.PI / 2, 0.061, -Math.PI]} scale={0.678}>
        <mesh geometry={nodes.Cylinder025_1.geometry} 
        material-color={(isColor === 'Bomb') ? '#008000' : null } 
        // material={isWireframe ? wireframeMaterial : materials.Bomb} 
        {...(isColor === 'Bomb' ? null : { material: isWireframe ? wireframeMaterial : materials.Bomb })}
        />

        <mesh geometry={nodes.Cylinder025_2.geometry} 
        material-color={(isColor === 'Bomb') ? '#008000' : null } 
        // material={isWireframe ? wireframeMaterial : materials['Material.002']}
        {...(isColor === 'Bomb' ? null : { material: isWireframe ? wireframeMaterial : materials['Material.002'] })}
        />

        <mesh geometry={nodes.Cylinder025_3.geometry} 
        material-color={(isColor === 'Bomb') ? '#008000' : null } 
        // material={isWireframe ? wireframeMaterial : materials['Material.003']} 
        {...(isColor === 'Bomb' ? null : { material: isWireframe ? wireframeMaterial : materials['Material.003'] })}
        />

      </group>
      <mesh geometry={nodes.Cylinder021.geometry} 
      material-color={(isColor === 'Bomb') ? '#008000' : null } 
      // material={isWireframe ? wireframeMaterial : materials.Bomb} 
      {...(isColor === 'Bomb' ? null : { material: isWireframe ? wireframeMaterial : materials.Bomb })}
      position={[6.457, 20.163, -41.862]} 
      rotation={[-Math.PI / 2, 0.061, -Math.PI]} 
      scale={0.678} 
      />

      <group position={[12.475, 30.319, -43.339]} rotation={[-Math.PI / 2, 0.061, -Math.PI]} scale={0.678}>
        <mesh geometry={nodes.Cylinder027.geometry} 
        material-color={(isColor === 'Bomb') ? '#008000' : null } 
        // material={isWireframe ? wireframeMaterial : materials.Bomb} 
        {...(isColor === 'Bomb' ? null : { material: isWireframe ? wireframeMaterial : materials.Bomb })}
        />

        <mesh geometry={nodes.Cylinder027_1.geometry} 
        material-color={(isColor === 'Bomb') ? '#008000' : null } 
        // material={isWireframe ? wireframeMaterial : materials['Material.002']}
        {...(isColor === 'Bomb' ? null : { material: isWireframe ? wireframeMaterial : materials['Material.002'] })}
        />

        <mesh geometry={nodes.Cylinder027_2.geometry} 
        material-color={(isColor === 'Bomb') ? '#008000' : null } 
        // material={isWireframe ? wireframeMaterial : materials['Material.003']}
        {...(isColor === 'Bomb' ? null : { material: isWireframe ? wireframeMaterial : materials['Material.003'] })}
        />

      </group>
      <mesh geometry={nodes.Cylinder023.geometry} 
      material-color={(isColor === 'Bomb') ? '#008000' : null } 
      // material={isWireframe ? wireframeMaterial : materials.Bomb} 
      {...(isColor === 'Bomb' ? null : { material: isWireframe ? wireframeMaterial : materials.Bomb })}
      position={[12.425, 30.461, -42.387]} 
      rotation={[-Math.PI / 2, 0.061, -Math.PI]} 
      scale={0.678} 
      />

      <group position={[12.199, 19.885, -42.815]} rotation={[-Math.PI / 2, 0.061, -Math.PI]} scale={0.678}>
        <mesh geometry={nodes.Cylinder029.geometry} 
        material-color={(isColor === 'Bomb') ? '#008000' : null } 
        // material={isWireframe ? wireframeMaterial : materials.Bomb}
        {...(isColor === 'Bomb' ? null : { material: isWireframe ? wireframeMaterial : materials.Bomb })}
        />

        <mesh geometry={nodes.Cylinder029_1.geometry} 
        material-color={(isColor === 'Bomb') ? '#008000' : null } 
        // material={isWireframe ? wireframeMaterial : materials['Material.002']}
        {...(isColor === 'Bomb' ? null : { material: isWireframe ? wireframeMaterial : materials['Material.002'] })}
        />

        <mesh geometry={nodes.Cylinder029_2.geometry} 
        material-color={(isColor === 'Bomb') ? '#008000' : null } 
        // material={isWireframe ? wireframeMaterial : materials['Material.003']}
        {...(isColor === 'Bomb' ? null : { material: isWireframe ? wireframeMaterial : materials['Material.003'] })}
        />

      </group>
      <mesh geometry={nodes.Cylinder025.geometry} 
      material-color={(isColor === 'Bomb') ? '#008000' : null } 
      // material={isWireframe ? wireframeMaterial : materials.Bomb}
      {...(isColor === 'Bomb' ? null : { material: isWireframe ? wireframeMaterial : materials.Bomb })}
      position={[12.149, 20.027, -41.862]} 
      rotation={[-Math.PI / 2, 0.061, -Math.PI]} 
      scale={0.678} 
      />

      <mesh geometry={nodes.Cylinder026.geometry} 
      material-color={(isColor === 'Bomb') ? '#008000' : null } 
      // material={isWireframe ? wireframeMaterial : materials['Material.004']}
      {...(isColor === 'Bomb' ? null : { material: isWireframe ? wireframeMaterial : materials['Material.004'] })}
      position={[-11.383, 24.561, -56.891]} 
      rotation={[Math.PI / 2, 0.061, 0]} 
      />

      <mesh geometry={nodes.Left_Engine001.geometry} 
      material-color={(isColor === 'Engine') ? '#008000' : null } 
      // material={isWireframe ? wireframeMaterial : materials.Engine}
      {...(isColor === 'Engine' ? null : { material: isWireframe ? wireframeMaterial : materials.Engine })}
      position={[-1.621, 27.208, -45.986]} 
      rotation={[Math.PI / 2, 0, -Math.PI / 2]} 
      />

      <mesh geometry={nodes.Right_Engine.geometry} 
      material-color={(isColor === 'Engine') ? '#008000' : null } 
      // material={isWireframe ? wireframeMaterial : materials.Engine}
      {...(isColor === 'Engine' ? null : { material: isWireframe ? wireframeMaterial : materials.Engine })}
      position={[-1.621, 27.208, -45.986]} 
      rotation={[Math.PI / 2, 0, -Math.PI / 2]} 
      />
    </group>
  )
}



const AnimatedCamera = ({ targetPosition }) => {
  const { camera, gl } = useThree();

  useEffect(() => {
    gsap.to(camera.position, {
      x: targetPosition[0],
      y: targetPosition[1],
      z: targetPosition[2],
      duration: 3, // Duration of the animation in seconds
      ease: 'power2.inOut',
      onUpdate: () => {
        camera.updateProjectionMatrix(); // Update the projection matrix
        gl.render(gl.scene, camera); // Re-render the scene
      },
    });
  }, [targetPosition, camera, gl]);

  return null;
};



function AircraftPartDetails({ onSelectPart, onToggleWireframe,onColorPart }) {
  const parts = [
    { name: 'Default', position: [10, 60, -250], wireframe: false },
    { name: 'Cockpit', position: [10, 60, -250], wireframe: true },
    { name: 'Wings', position: [70, 200, -300], wireframe: true },
    { name: 'Engine', position: [150, 180, 10], wireframe: true },
    { name: 'Bomb', position: [10, 170, 240], wireframe: true },
    { name: 'LandingGear', position: [10, -20, -250], wireframe: true }
  ];

  const handleChange = (event) => {
    const selectedPart = parts.find(part => part.name === event.target.value);
    if (selectedPart) {
      onSelectPart(selectedPart.position);
      onToggleWireframe(selectedPart.wireframe);
      onColorPart(selectedPart.name);
    }
  };

  return (
    <div className="partDetails">
      <label className='partLabel' htmlFor="part">Select the part you want to get information</label>
      <select id="part" onChange={handleChange}>
        {parts.map(part => (
          <option key={part.name} value={part.name}>{part.name}</option>
        ))}
      </select>
    </div>
  );
}



function App() {
  const [position, setPosition] = useState([10, 60, -250]);
  const [isWireframe, setIsWireframe] = useState(false);
  const [isColor, setIsColor] = useState('Default');


  return (
    <>
      {/* <Loader /> */}
      <Canvas
        shadows
        camera={{
          position,
          fov: 75,
          near: 0.1,
          far: 1000,
          aspect: window.innerWidth / window.innerHeight,
        }}
      >
        <ambientLight intensity={0.7} />
        <AnimatedCamera targetPosition={position} />
        <B2 rotation={-90} isWireframe={isWireframe} isColor={isColor} />
        <Environment preset="warehouse" background backgroundBlurriness={0.1} />
        <OrbitControls
          minPolarAngle={0}
          maxPolarAngle={Math.PI}
          enableZoom
          enablePan={false}
          maxDistance={500}
        />
      </Canvas>
      <AircraftPartDetails onSelectPart={setPosition} onToggleWireframe={setIsWireframe} onColorPart={setIsColor} />
    </>
  );
}

export default App
