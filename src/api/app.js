export const getName = () => {
    return new Promise((resolve, reject) => {
        const err = null
        setTimeout(() => {
            if (!err) resolve({ code: 200, info: { appName: '李赫言' } })
            else reject(err)
        });
    })
}