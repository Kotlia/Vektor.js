this = "a"

export default function getMagnitude() {
    return Math.sqrt(
        Math.pow(this.x, 2) +
        Math.pow(this.y, 2) +
        Math.pow(this.z || 0, 2)
    )
}