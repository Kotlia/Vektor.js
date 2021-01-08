import { DifferentDimentionError } from "../error/DifferentDimentionError.js";

export class Vector {
    constructor(...args) {
        if (args.length > 3) {
            throw "UnsupportedDimensionError"
        }
        args.forEach((it, i) => {
            this[String.fromCharCode(i + 120)] = it
        })
        this.magnitude = this.getMagnitude()
    }
    getMagnitude() {
        return Math.sqrt(
            Math.pow(this.x, 2) +
            Math.pow(this.y, 2) +
            Math.pow(this.z || 0, 2)
        )
    }
    dot(vector) {
        if (typeof vector !== typeof this) { throw new DifferentDimentionError(`Different dimetion! ${this.constructor.name} cannot be dotted with ${vector.constructor.name}`) }
        return (this.x * vector.x + this.y * vector.y + (this.z || 0) * (vector.z || 0))
    }
    add(vector) {
        if (typeof vector !== typeof this) { throw new DifferentDimentionError(`Different dimetion! ${this.constructor.name} cannot be added with ${vector.constructor.name}`) }
        const temp = this
        temp.setX(this.x + vector.x)
            .setY(this.y + vector.y)
        if (this.z) {
            temp.setZ(this.z + vector.z)
        }
        temp.magnitude = this.getMagnitude()
        return temp
    }
    subtract(vector) {
        if (typeof vector !== typeof this) { throw new DifferentDimentionError(`Different dimetion! ${this.constructor.name} cannot be added with ${vector.constructor.name}`) }
        const temp = this
        temp.setX(this.x - vector.x)
            .setY(this.y - vector.y)
        if (this.z) {
            temp.setZ(this.z - vector.z)
        }
        temp.magnitude = this.getMagnitude()
        return temp
    }
    get unit() {
        const temp = this
        temp.setX(this.x / this.magnitude)
            .setY(this.y / this.magnitude)
        if (this.z) {
            temp.setZ(this.z / this.magnitude)
        }
        temp.magnitude = this.getMagnitude()
        return temp
    }
    crossMagnitude(vector) {
        if (typeof vector !== typeof this) { throw new DifferentDimentionError(`Different dimetion! ${this.constructor.name} cannot be crossed with ${vector.constructor.name}`) }
        return Math.abs(
            this.magnitude * vector.magnitude * Math.sin(this.angleBetween(vector))
        )
    }
    angleBetween(vector) {
        return Math.acos(
            this.dot(vector) / (this.magnitude * vector.magnitude)
        )
    }
    setX(x) { this.x = x; return this }
    setY(y) { this.y = y; return this }
    setZ(z) {this.z = z; return this}
}