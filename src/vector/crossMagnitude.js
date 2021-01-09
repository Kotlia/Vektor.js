import {DifferentDimentionError} from "../error/DifferentDimentionError.js";

export const crossMagnitude = (thisArg, vector) => {
    if (typeof vector !== typeof thisArg) { throw new DifferentDimentionError(`Different dimetion! ${thisArg.constructor.name} cannot be crossed with ${vector.constructor.name}`) }
    return Math.abs(
        thisArg.magnitude * vector.magnitude * Math.sin(thisArg.angleBetween(vector))
    )
}