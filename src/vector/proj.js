export const proj = (thisArg, vector) => {
    return vector.scalarMultiply(thisArg.dot(vector) / Math.pow(vector.magnitude, 2))
}