import { Vector } from "./Vector.js";

export class Vector2 extends Vector {
    constructor(x, y) {
        super(x, y);
    }
    dot(vector2) {
        return super.dot(vector2)
    }
    get unit() {
        return new Vector2(
            this.x / this.magnitude,
            this.y / this.magnitude
        ).setMagnitude(1)
    }
}