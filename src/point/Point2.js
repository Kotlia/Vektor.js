import { Point } from "./Point.js";

/**
 * @extends Point
 * Extension of {@link Point} in 2D space.
 * @since   1.0
 * @author  Kotlia (Shun Ueda)
 */
export class Point2 extends Point {
    /**
     * Create a point from coordinates
     * @param   { Number }  x
     * @param   { Number }  y
     * @since   1.0
     */
    constructor(x, y) {
        super(x, y)
    }
}