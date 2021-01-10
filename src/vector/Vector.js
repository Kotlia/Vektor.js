import { norm } from "./norm.js";
import { dot } from "./dot.js";
import { add } from "./add.js";
import { scalarMultiply } from "./scalarMultiply.js";
import { scalarDivide } from "./scalarDivide.js";
import { subtract } from "./subtract.js";
import { isCollinear } from "./isCollinear.js";
import { unit } from "./unit.js";
import { crossMagnitude } from "./crossMagnitude.js";
import { proj } from "./proj.js";
import { Point3 } from "../point/Point3.js";
import { Point } from "../point/Point.js";

/**
 * Base class for vectors in 2/3D, contains common methods,
 * such as dot product.
 * All methods should be created at vector3 directory and imported here.
 * @since 1.0
 * @author  Kotlia (Shun Ueda)
 */
export class Vector {
    /**
     * Creates a vector from
     * 1. Terminal point (target)
     * 2. Points {@link Point}
     * @param   { Number, Point }  elements
     * @since   1.0
     */
    constructor(...elements)    {
        if (elements[0] instanceof Point) {
            const temp = elements
            elements = [
                temp[1].x - temp[0].x,
                temp[1].y - temp[0].y
            ]
            if (temp[0] instanceof Point3) {
                elements.push(temp[1].z - temp[0].z)
            }
        }
        elements.forEach((it, i) => {
            this[String.fromCharCode(i + 120)] = it
        })
    }
    setX(x)                 { this.x = x; return this }
    setY(y)                 { this.y = y; return this }

    /**
     * Get norm of the vector
     * @returns { number }
     * @since   1.0
     */
    get norm()          { return norm(this) }

    /**
     * Get the unit vector
     * @returns { Vector }
     * @since   1.0
     */
    get unit()               { return unit(this) }

    /**
     * Addition
     * @param   { Vector }  vector
     * @returns { Vector }
     * @since   1.0
     */
    add(vector)             { return add(this, vector) }

    /**
     * Subtraction
     * @param   { Vector }  vector
     * @returns { Vector }
     * @since   1.0
     */
    subtract(vector)        { return subtract(this, vector) }

    /**
     * Scaler multiplication
     * @param   { Number }  coef
     * @returns { Vector }
     * @since   1.0
     */
    scalarMultiply(coef)  { return scalarMultiply(this, coef) }

    /**
     * Scaler division
     * @param   { Number }  coef
     * @returns { Vector }
     * @since   1.0
     */
    scalarDivide(coef)    { scalarDivide(this, coef) }

    /**
     * Dot product
     * @param   { Vector }  vector
     * @returns { Number }
     * @since   1.0
     */
    dot(vector)             { return dot(this, vector) }

    /**
     * Check if the vectors are collinear.
     * @param   { Vector }  vector
     * @returns { boolean }
     * @since   1.0
     */
    isCollinear(vector)     { return isCollinear(this, vector) }

    /**
     * Check if the vectors are orthogonal.
     * @param   { Vector }  vector
     * @returns { boolean }
     * @since   1.0
     */
    isOrthogonal(vector)    { return (!this.dot(vector)) }

    /**
     * Magnitude of cross product.
     * @param   { Vector }  vector
     * @returns { Number }
     * @since   1.0
     */
    crossMagnitude(vector)  { return crossMagnitude(this) }

    /**
     * Angle between the vectors, in radians
     * @param   { Vector }  vector
     * @returns { Number }
     * @since   1.0
     */
    angleBetween(vector)    { return Math.acos(this.dot(vector) / (this.norm * vector.norm) ) }

    /**
     * Projection of the vector.
     * @param   { Vector }  vector
     * @returns { Vector }
     * @since   1.0
     */
    proj(vector)            { return proj(this, vector) }
}