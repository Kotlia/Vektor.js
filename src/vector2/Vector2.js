import { Vector } from "../vector/Vector.js";

/**
 * @extends Vector
 * Extension of Vector in 2D space.
 * @since 1.0
 * @author  Kotlia (Shun Ueda)
 */
export class Vector2 extends Vector {
    /**
     * Create a 2D vector from coordinates
     * @param   { Number }  x
     * @param   { Number }  y
     * @since   1.0
     */
    constructor(x, y) {
        super(x, y);
    }
}