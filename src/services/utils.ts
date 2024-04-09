export function waitASecond(array: Array<any>) {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve(array)
        }, 500)
    })
}