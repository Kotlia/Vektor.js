import { Vector } from "../vector/Vector.js";
import { DifferentDimentionError } from "../error/DifferentDimentionError.js";

export class Vector3 extends Vector {
    constructor(x, y, z) {
        super(x, y, z);
    }
    cross(vector3) {
        if (!(vector3 instanceof Vector3)) { throw new DifferentDimentionError(`Different dimetion! ${this.constructor.name} cannot be crossed with ${vector3.constructor.name}`) }
        return new Vector3(
            this.y * vector3.z - this.z * vector3.y,
            -(this.x * vector3.z- this.z * vector3.x),
            this.x * vector3.y - this.y * vector3.x
        )
    }
}