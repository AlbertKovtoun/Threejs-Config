import * as THREE from "three/webgpu"

import { Inspector } from "three/addons/inspector/Inspector"

import { texture, uv, vec4 } from "three/tsl"

import { Loaders } from "./Loaders"
import { Sizes } from "./Sizes"
import { Camera } from "./Camera"
import { Renderer } from "./Renderer"
import { PostProcessing } from "./PostProcessing"
import { GUI } from "./GUI"

export const canvas = document.querySelector("canvas.webgl")

export const scene = new THREE.Scene()
scene.backgroundNode = vec4(0, 0, 0, 1)

export const loaders = new Loaders()

export const sizes = new Sizes()

export const camera = new Camera()

const mesh = new THREE.Mesh(
  new THREE.SphereGeometry(1, 64, 64),
  new THREE.MeshBasicNodeMaterial({}),
)
scene.add(mesh)

mesh.material.colorNode = texture(
  loaders.textureLoader.load("/images/duck.jpg"),
  uv().mul(10).fract(),
)

export const renderer = new Renderer()
renderer.renderer.inspector = new Inspector()

export const postProcessing = new PostProcessing()

await renderer.renderer.init()

export const gui = new GUI()

const tick = () => {
  camera.controls.update()

  postProcessing.postProcessing.render()

  window.requestAnimationFrame(tick)
}

tick()
