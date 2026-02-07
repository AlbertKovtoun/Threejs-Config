import * as THREE from "three/webgpu"
import { pass, mrt, output } from "three/tsl"
import { camera, renderer, scene } from "./Experience"

export class PostProcessing {
  constructor() {
    this.scenePass = pass(scene, camera.camera)
    this.scenePass.setMRT(mrt({ output }))

    this.outputPass = this.scenePass.getTextureNode()

    this.postProcessing = new THREE.PostProcessing(renderer.renderer)
    this.postProcessing.outputNode = this.outputPass
  }
}
