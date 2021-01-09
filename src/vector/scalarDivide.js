export const scalarDivide = (thisArg, number) => {
    const temp = thisArg
    temp.setX(thisArg.x / number)
        .setY(thisArg.y / number)
    if (thisArg.z) {
        temp.setZ(thisArg.z / number)
    }
    temp.magnitude = thisArg.getMagnitude()
    return temp
}