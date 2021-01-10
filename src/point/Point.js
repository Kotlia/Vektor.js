/**
 * Base class for the point in 2/3D
 * @since 1.0
 * @author  Kotlia (Shun Ueda)
 */
export class Point {
    /**
     * Create a point from coordinates
     * @param   { Number }  coordinates
     * @since   1.0
     */
    constructor(...coordinates) {
        coordinates.forEach((it, i) => {
            this[String.fromCharCode(i + 120)] = it
        })
    }
}