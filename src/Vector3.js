import { Vector } from "./Vector.js";

export class Vector3 extends Vector {
    constructor(x, y, z) {
        super(x, y, z);
    }
    dot(vector3) {
        return super.dot(vector3)
    }
    cross(vector3) {
        return new Vector3(
            this.y * vector3.z - this.z * vector3.y,
            -(this.x * vector3.z- this.z * vector3.x),
            this.x * vector3.y - this.y * vector3.x
        )
    }
}