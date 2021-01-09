import { DifferentDimentionError } from "../error/DifferentDimentionError.js";
import { Vector3 } from "./Vector3.js";

export const cross = (thisArg, vector3) => {
    if (!(vector3 instanceof Vector3)) { throw new DifferentDimentionError(`Different dimetion! ${thisArg.constructor.name} cannot be crossed with ${vector3.constructor.name}`) }
    return new Vector3(
        thisArg.y * vector3.z - thisArg.z * vector3.y,
        -(thisArg.x * vector3.z- thisArg.z * vector3.x),
        thisArg.x * vector3.y - thisArg.y * vector3.x
    )
}