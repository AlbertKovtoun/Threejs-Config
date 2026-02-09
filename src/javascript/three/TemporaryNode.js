import { TempNode } from "three/webgpu"
import { nodeObject } from "three/tsl"

class TemporaryNode extends TempNode {
  static get type() {
    return "TemporaryNode"
  }

  constructor(textureNode) {
    super("vec4")
    this.textureNode = textureNode
  }

  setup() {
    let diffuseBuffer = this.textureNode

    return diffuseBuffer
  }
}

export default TemporaryNode

export const temporary = (outputColor) => {
  return nodeObject(new TemporaryNode(outputColor))
}
