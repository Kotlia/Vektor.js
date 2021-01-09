import { Vector3 } from "./Vector3.js";

export const cross = (thisArg, vector3) => {
    return new Vector3(
        thisArg.y * vector3.z - thisArg.z * vector3.y,
        -(thisArg.x * vector3.z- thisArg.z * vector3.x),
        thisArg.x * vector3.y - thisArg.y * vector3.x
    )
}