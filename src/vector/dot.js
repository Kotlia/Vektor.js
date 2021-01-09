export const dot = (thisArg, vector) => {
    return (thisArg.x * vector.x + thisArg.y * vector.y + (thisArg.z || 0) * (vector.z || 0))
}