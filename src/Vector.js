export class Vector {
    constructor(...args) {
        if (args.length > 3) {
            throw "UnsupportedDimensionError"
        }
        args.forEach((it, i) => {
            this[String.fromCharCode(i + 120)] = it
        })
        this.magnitude = Math.sqrt(
            Math.pow(this.x, 2) +
            Math.pow(this.y, 2) +
            Math.pow(this.z || 0, 2)
        )
    }
    dot(vector) {
        return (this.x * vector.x + this.y * vector.y + (this.z || 0) * (vector.z || 0))
    }
    crossMagnitude(vector) {
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
    setZ(z) {
        this.z = z; return this
    }
}