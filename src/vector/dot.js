import { DifferentDimentionError } from "../error/DifferentDimentionError.js";

export const dot = (thisArg, vector) => {
    if (typeof vector !== typeof thisArg) { throw new DifferentDimentionError(`Different dimetion! ${thisArg.constructor.name} cannot be dotted with ${vector.constructor.name}`) }
    return (thisArg.x * vector.x + thisArg.y * vector.y + (thisArg.z || 0) * (vector.z || 0))
}