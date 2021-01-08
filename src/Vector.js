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
    angleBetween(vector2) {
        return Math.acos(
            this.dot(vector2) / (this.magnitude * vector2.magnitude)
        )
    }
    setX(x) { this.x = x; return this }
    setY(y) { this.y = y; return this }
    setZ(z) { this.z = z; return this }
    setMagnitude(m) { this.magnitude = m; return this }
}