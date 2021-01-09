export class Point {
    constructor(...args) {
        args.forEach((it, i) => {
            this[String.fromCharCode(i + 120)] = it
        })
    }
}