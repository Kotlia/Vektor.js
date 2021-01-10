export const unit = (thisArg) => {
    const temp = thisArg
    temp.setX(thisArg.x / thisArg.magnitude)
        .setY(thisArg.y / thisArg.magnitude)
    if (thisArg.z) {
        temp.setZ(thisArg.z / thisArg.magnitude)
    }
    temp.magnitude = thisArg.getMagnitude()
    return temp
}