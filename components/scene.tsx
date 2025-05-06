"use client"

import { useRef, useEffect } from "react"
import { useFrame } from "@react-three/fiber"
import { Float, Text3D, useGLTF } from "@react-three/drei"
import type { Group, Mesh, MeshStandardMaterial } from "three"
import { useThree } from "@react-three/fiber"

export default function Scene() {
  const group = useRef<Group>(null)
  const { size } = useThree()
  const isMobile = size.width < 768

  // Ref for the brain model
  const brain = useRef<Mesh>(null)

  // Reference to Duck model (as a placeholder for a brain or other AI-related 3D model)
  const { nodes, materials } = useGLTF("/assets/3d/duck.glb") as unknown as {
    nodes: { [key: string]: Mesh }
    materials: { [key: string]: MeshStandardMaterial }
  }

  useFrame((state) => {
    if (brain.current) {
      brain.current.rotation.y = state.clock.getElapsedTime() * 0.2
    }

    if (group.current) {
      // Subtle floating animation for the whole scene
      group.current.position.y = Math.sin(state.clock.getElapsedTime() * 0.5) * 0.1
    }
  })

  // Adjust positions based on screen size
  useEffect(() => {
    if (group.current) {
      if (isMobile) {
        group.current.scale.set(0.5, 0.5, 0.5)
        group.current.position.set(0, -1, 0)
      } else {
        group.current.scale.set(0.8, 0.8, 0.8)
        group.current.position.set(0, -1, 0)
      }
    }
  }, [isMobile])

  // AIVA blue color from the logo
  const aivaBlue = "#0088cc"

  return (
    <group ref={group}>
      {/* Main 3D Text - Positioned to avoid overlapping with the overlay text */}
      <Float floatIntensity={1} rotationIntensity={0.2} speed={2}>
        <Text3D
          font="/fonts/Geist_Bold.json"
          size={isMobile ? 0.8 : 1.2}
          height={0.2}
          curveSegments={12}
          bevelEnabled
          bevelThickness={0.02}
          bevelSize={0.02}
          bevelOffset={0}
          bevelSegments={5}
          position={[isMobile ? -3 : -4.5, 3, -2]}
        >
          AIVA
          <meshStandardMaterial color="#000000" />
        </Text3D>
      </Float>

      <Float floatIntensity={1} rotationIntensity={0.2} speed={1.5}>
        <Text3D
          font="/fonts/Geist_Regular.json"
          size={isMobile ? 0.5 : 0.8}
          height={0.1}
          curveSegments={12}
          bevelEnabled
          bevelThickness={0.01}
          bevelSize={0.01}
          bevelOffset={0}
          bevelSegments={3}
          position={[isMobile ? -2 : -3, 2, -2]}
        >
          Solutions
          <meshStandardMaterial color="#333333" />
        </Text3D>
      </Float>

      {/* 3D Model (using Duck as a placeholder) - Moved to a different position */}
      <Float floatIntensity={2} rotationIntensity={0.8} speed={2.5}>
        <group position={[2, -1, 0]} ref={brain} scale={2}>
          <mesh
            geometry={nodes.LOD3spShape.geometry}
            material={materials.blinn3}
            rotation={[Math.PI / 2, 0, 0]}
            scale={1}
          >
            {/* Override material to match the blue from the logo */}
            <meshStandardMaterial color={aivaBlue} emissive={aivaBlue} emissiveIntensity={0.2} roughness={0.5} />
          </mesh>
        </group>
      </Float>

      {/* Create a hexagonal pattern sphere to match the logo - Repositioned */}
      <group position={[-4, 0, -1]}>
        <HexagonalSphere color={aivaBlue} />
      </group>

      {/* Floating orbs/particles to represent AI/data - Repositioned */}
      <Float floatIntensity={2} speed={1.5}>
        <mesh position={[-3, -2, -1]}>
          <sphereGeometry args={[0.3, 32, 32]} />
          <meshStandardMaterial color={aivaBlue} emissive={aivaBlue} emissiveIntensity={0.5} />
        </mesh>
      </Float>

      <Float floatIntensity={2} speed={2}>
        <mesh position={[4, -1, 0]}>
          <sphereGeometry args={[0.2, 32, 32]} />
          <meshStandardMaterial color={aivaBlue} emissive={aivaBlue} emissiveIntensity={0.5} />
        </mesh>
      </Float>

      <Float floatIntensity={2} speed={2.5}>
        <mesh position={[3, 3, -2]}>
          <sphereGeometry args={[0.25, 32, 32]} />
          <meshStandardMaterial color={aivaBlue} emissive={aivaBlue} emissiveIntensity={0.5} />
        </mesh>
      </Float>

      <Float floatIntensity={2} speed={1.8}>
        <mesh position={[-2, 0, -1]}>
          <sphereGeometry args={[0.15, 32, 32]} />
          <meshStandardMaterial color={aivaBlue} emissive={aivaBlue} emissiveIntensity={0.5} />
        </mesh>
      </Float>

      {/* Scene lighting adjusted for white background */}
      <ambientLight intensity={0.7} />
      <pointLight position={[10, 10, 10]} intensity={1} color="#ffffff" />
      <pointLight position={[-10, -10, -10]} intensity={0.5} color={aivaBlue} />
    </group>
  )
}

// Create a hexagonal pattern sphere to match the logo
function HexagonalSphere({ color = "#0088cc" }) {
  const hexSphereRef = useRef<Group>(null)

  useFrame((state) => {
    if (hexSphereRef.current) {
      hexSphereRef.current.rotation.y = state.clock.getElapsedTime() * 0.1
      hexSphereRef.current.rotation.z = state.clock.getElapsedTime() * 0.05
    }
  })

  return (
    <group ref={hexSphereRef}>
      {/* Create multiple hexagons arranged in a spherical pattern */}
      {Array.from({ length: 20 }).map((_, i) => {
        const phi = Math.acos(-1 + (2 * i) / 20)
        const theta = Math.sqrt(20 * Math.PI) * phi

        const x = 0.8 * Math.cos(theta) * Math.sin(phi)
        const y = 0.8 * Math.sin(theta) * Math.sin(phi)
        const z = 0.8 * Math.cos(phi)

        return (
          <mesh key={i} position={[x, y, z]} rotation={[Math.random(), Math.random(), Math.random()]}>
            <cylinderGeometry args={[0.1, 0.1, 0.05, 6]} />
            <meshStandardMaterial color={color} emissive={color} emissiveIntensity={0.5} />
          </mesh>
        )
      })}
    </group>
  )
}
