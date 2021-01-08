import { Vector } from "./Vector.js";

export class Vector2 extends Vector {
    constructor(x, y) {
        super(x, y);
    }
    get unit() {
        return new Vector2(
            this.x / this.magnitude,
            this.y / this.magnitude
        )
    }
}