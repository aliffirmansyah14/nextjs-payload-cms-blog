export function mockDelay(time: number = 500) {
    return new Promise((resolve) => setTimeout(resolve, time))
}
