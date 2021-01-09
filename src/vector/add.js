import { DifferentDimentionError } from "../error/DifferentDimentionError.js";

export const add = (thisArg, vector) => {
    if (typeof vector !== typeof thisArg) { return new DifferentDimentionError(`Different dimetion! ${thisArg.constructor.name} cannot be added with ${vector.constructor.name}`) }
    const temp = thisArg
    temp.setX(thisArg.x + vector.x)
        .setY(thisArg.y + vector.y)
    if (thisArg.z) {
        temp.setZ(thisArg.z + vector.z)
    }
    temp.magnitude = thisArg.getMagnitude()
    return temp
}