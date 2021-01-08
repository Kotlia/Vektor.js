export class Vector {
    constructor(...args) {
        if (args.length > 3) {
            throw "UnsupportedDimensionError"
        }
        args.forEach((it, i) => {
            this[String.fromCharCode(i + 120)] = it
        })
    }
    dot(vector) {
        return (this.x * vector.x + this.y * vector.y + (this.z || 0) * (vector.z || 0))
    }
}