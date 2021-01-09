export const getMagnitude = (thisArg) => {
    return Math.sqrt(
        Math.pow(thisArg.x, 2) +
        Math.pow(thisArg.y, 2) +
        Math.pow(thisArg.z || 0, 2)
    )
}