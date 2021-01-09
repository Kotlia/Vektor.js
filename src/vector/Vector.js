import { getMagnitude } from "./getMagnitude.js";
import { dot } from "./dot.js";
import { add } from "./add.js";
import { scalarMultiply } from "./scalarMultiply.js";
import { scalarDivide } from "./scalarDivide.js";
import { subtract } from "./subtract.js";
import { isCollinear } from "./isCollinear.js";
import { getUnit } from "./getUnit.js";
import { crossMagnitude } from "./crossMagnitude.js";
import { proj } from "./proj.js";
import { Point3 } from "../point/Point3.js";
import { Point } from "../point/Point.js";

export class Vector {
    constructor(...args)    {
        if (args[0] instanceof Point) {
            const temp = args
            args = [
                temp[1].x - temp[0].x,
                temp[1].y - temp[0].y
            ]
            if (temp[0] instanceof Point3) {
                args.push(temp[1].z - temp[0].z)
            }
        }
        args.forEach((it, i) => {
            this[String.fromCharCode(i + 120)] = it
        })
        this.magnitude = this.getMagnitude()
    }
    setX(x)                 { this.x = x; return this }
    setY(y)                 { this.y = y; return this }
    setZ(z)                 { this.z = z; return this }
    getMagnitude()          { return getMagnitude(this) }
    dot(vector)             { return dot(this, vector) }

    /**
     * Addition
     * @param { Vector } vector
     * @returns { Vector }
     */
    add(vector)             { return add(this, vector) }
    scalarMultiply(number)  { return scalarMultiply(this, number) }
    scalarDivide(number)    { scalarDivide(this, number) }
    scalarTriple(v1, v2)    { return this.dot(v1.cross(v2)) }
    subtract(vector)        { return subtract(this, vector) }
    isCollinear(vector)     { return isCollinear(this, vector) }
    isOrthogonal(vector)    { return (!this.dot(vector)) }
    isCoplaner(v1, v2)      { return (this.scalarTriple(v1, v2) === 0) }
    getUnit()               { return getUnit(this) }
    crossMagnitude(vector)  { return crossMagnitude(this) }
    angleBetween(vector)    { return Math.acos(this.dot(vector) / (this.magnitude * vector.magnitude) ) }
    proj(vector)            { return proj(this, vector) }
}