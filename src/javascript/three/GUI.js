import { postProcessing, renderer } from "./Experience"

export class GUI {
  constructor() {
    this.gui = renderer.renderer.inspector.createParameters("Parameters")

    // this.gui
    //   .add(postProcessing.uThickness, "value", 0, 5, 0.01)
    //   .name("Outline Thickness")
  }
}
