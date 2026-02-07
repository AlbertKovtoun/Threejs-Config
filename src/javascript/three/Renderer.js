import * as THREE from "three/webgpu"
import { canvas, sizes } from "./Experience"

export class Renderer {
  constructor() {
    this.setRenderer()
  }

  setRenderer() {
    this.renderer = new THREE.WebGPURenderer({
      canvas: canvas,
      antialias: true,
    })
    this.renderer.setSize(sizes.width, sizes.height)
    this.renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
  }
}
