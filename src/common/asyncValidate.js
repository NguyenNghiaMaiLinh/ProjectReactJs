const sleep = ms => new Promise(resolve => setTimeout(resolve, ms))

const asyncValidate = (values /*, dispatch */) => {
    return sleep(1000).then(() => {
        // simulate server latency
        if (['admin@gmail.com', 'hailua@gmail.com'].includes(values.Email)) {
            // eslint-disable-next-line no-throw-literal
            throw { email: 'Email already Exists' }
        }
    })
}

export default asyncValidate