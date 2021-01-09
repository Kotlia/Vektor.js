export const isCollinear = (thisArg, vector) => {
    if (typeof vector !== typeof thisArg) { return false }
    const y = thisArg.y / vector.y
    return (thisArg.x / vector.x === y)
        ? (thisArg.z) ? (y === (thisArg.z / vector.z)) : true
        : false
}