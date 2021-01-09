export const crossMagnitude = (thisArg, vector) => {
    return Math.abs(
        thisArg.magnitude * vector.magnitude * Math.sin(thisArg.angleBetween(vector))
    )
}