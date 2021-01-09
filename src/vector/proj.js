import { DifferentDimentionError } from "../error/DifferentDimentionError.js";

export const proj = (thisArg, vector) => {
    if (typeof vector !== typeof thisArg) { throw new DifferentDimentionError(`Different dimetion! ${thisArg.constructor.name} cannot be projected on ${vector.constructor.name}`) }
    return vector.scalarMultiply(thisArg.dot(vector) / Math.pow(vector.magnitude, 2))
}