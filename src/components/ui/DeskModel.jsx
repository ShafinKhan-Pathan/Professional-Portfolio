import React from 'react'
import { useGraph } from '@react-three/fiber'
import { useGLTF } from '@react-three/drei'
import { SkeletonUtils } from 'three-stdlib'

export function DeskModel(props) {
  const { scene } = useGLTF('models/DeskModel.glb')
  const clone = React.useMemo(() => SkeletonUtils.clone(scene), [scene])
  const { nodes, materials } = useGraph(clone)
  return (
    <group {...props} dispose={null}>
      <group scale={0.01}>
        <group scale={100}>
          <mesh geometry={nodes.desk_Material002_0.geometry} material={materials['Material.002']} />
          <mesh geometry={nodes.desk_Material001_0.geometry} material={materials['Material.001']} />
        </group>
        <group position={[-80.368, 411.7, -6.169]} rotation={[0, 0, 0.01]} scale={83.701}>
          <mesh geometry={nodes.Plane006_Material009_0.geometry} material={materials['Material.009']} />
          <mesh geometry={nodes.Plane006_Material010_0.geometry} material={materials['Material.010']} />
        </group>
        <group position={[32.251, 408.209, 356.422]} rotation={[-Math.PI / 2, -0.02, 0.509]} scale={148.044}>
          <mesh geometry={nodes.Cylinder_plastic002_0.geometry} material={materials['plastic.002']} />
          <mesh geometry={nodes.Cylinder_screen002_0.geometry} material={materials['screen.002']} />
        </group>
        <group position={[0, 362.193, -239.549]} scale={100}>
          <mesh geometry={nodes.Plane_Plane001_Material011_0.geometry} material={materials['Material.011']} />
          <mesh geometry={nodes.Plane_Plane001_Material018_0.geometry} material={materials['Material.018']} />
          <mesh geometry={nodes.Plane_Plane001_Material019_0.geometry} material={materials['Material.019']} />
          <mesh geometry={nodes.Plane_Plane001_Material020_0.geometry} material={materials['Material.020']} />
        </group>
        <primitive object={nodes._rootJoint} />
        <primitive object={nodes._rootJoint_1} />
        <group position={[294.767, 0, -77.874]} rotation={[0, -0.666, 0]} scale={31.634}>
          <mesh geometry={nodes.whole_boundary_Plane004_plastic_0.geometry} material={materials.plastic} />
          <mesh geometry={nodes.whole_boundary_Plane004_chair_material_0.geometry} material={materials.chair_material} />
          <mesh geometry={nodes.whole_boundary_Plane004__white_metal_0.geometry} material={materials.white_metal} />
          <mesh geometry={nodes.whole_boundary_Plane004_black_metal_0.geometry} material={materials.black_metal} />
        </group>
        <mesh geometry={nodes.pad_Material_0.geometry} material={materials.Material} position={[45.722, 259.521, 6.488]} rotation={[-Math.PI / 2, 0, 0]} scale={[72.671, 201.143, 100]} />
        <mesh geometry={nodes.Plane_Material003_0.geometry} material={materials['Material.003']} position={[53.324, 259.191, 52.84]} rotation={[Math.PI, 1.509, -Math.PI]} scale={28.78} />
        <mesh geometry={nodes.Plane002_Material004_0.geometry} material={materials['Material.004']} position={[57.151, 259.514, -108.1]} rotation={[0, 1.507, 0]} scale={[24.071, 26.534, 24.071]} />
        <mesh geometry={nodes.Plane001_Material005_0.geometry} material={materials['Material.005']} position={[-87.947, 258.788, 167.134]} rotation={[0, 0.275, 0]} scale={29.205} />
        <mesh geometry={nodes.Plane003_Material005_0.geometry} material={materials['Material.005']} position={[-86.372, 258.788, -192.78]} rotation={[0, -0.265, 0]} scale={29.205} />
        <mesh geometry={nodes.Cube_Material014_0.geometry} material={materials['Material.014']} position={[-143.565, 251.395, 144.563]} rotation={[-Math.PI / 2, 0, 0]} scale={[14.84, 14.84, 10.231]} />
      </group>
    </group>
  )
}

useGLTF.preload('models/DeskModel.glb')
