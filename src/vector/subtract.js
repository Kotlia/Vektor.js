export const subtract = (thisArg, vector) => {
    const temp = thisArg
    temp.setX(thisArg.x - vector.x)
        .setY(thisArg.y - vector.y)
    if (thisArg.z) {
        temp.setZ(thisArg.z - vector.z)
    }
    temp.magnitude = thisArg.getMagnitude()
    return temp
}