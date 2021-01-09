import { Vector } from "../vector/Vector.js";
import { cross } from "./cross.js";

export class Vector3 extends Vector {
    constructor(x, y, z) {
        super(x, y, z);
    }
    cross(vector3) { return cross(this, vector3) }
}