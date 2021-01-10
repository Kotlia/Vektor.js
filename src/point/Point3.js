import { Point } from "./Point.js";

/**
 * @extends Point
 * Extension of {@link Point} in 3D space.
 * @since   1.0
 * @author  Kotlia (Shun Ueda)
 */
export class Point3 extends Point {
    /**
     * Create a point from coordinates
     * @param   { Number }  x
     * @param   { Number }  y
     * @param   { Number }  z
     * @since   1.0
     */
    constructor(x, y, z) {
        super(x, y, z)
    }
}