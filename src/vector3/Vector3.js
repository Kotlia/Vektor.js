import { Vector } from "../vector/Vector.js";
import { cross } from "./cross.js";

/**
 * @extends Vector
 * Extension of Vector in 3D space.
 * Contains methods only allowed for 3D vectors, such as cross product.
 * @since 1.0
 * @author  Kotlia (Shun Ueda)
 */
export class Vector3 extends Vector {
    /**
     * Create a 2D vector from coordinates
     * @param   { Number }  x
     * @param   { Number }  y
     * @param   { Number }  z
     * @since   1.0
     */
    constructor(x, y, z) {
        super(x, y, z);
    }

    setZ(z)                 { this.z = z; return this }

    /**
     * Cross product
     * @param vector3
     * @returns { Vector3 }
     */
    cross(vector3) { return cross(this, vector3) }

    /**
     * Scalar-triple product
     * Used for obtaining the volume of paralleloid.
     * @param   { Vector3 }  v1
     * @param   { Vector3 }  v2
     * @returns { Number }
     */
    scalarTriple(v1, v2)    { return this.dot(v1.cross(v2)) }

    /**
     * Check if the vectors are coplainer.
     * @param   { Vector3 } v1
     * @param   { Vector3 } v2
     * @returns { boolean }
     */
    isCoplaner(v1, v2)      { return (this.scalarTriple(v1, v2) === 0) }
}