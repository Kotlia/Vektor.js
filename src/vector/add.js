export const add = (thisArg, vector) => {
    const temp = thisArg
    temp.setX(thisArg.x + vector.x)
        .setY(thisArg.y + vector.y)
    if (thisArg.z) {
        temp.setZ(thisArg.z + vector.z)
    }
    temp.norm = thisArg.norm
    return temp
}