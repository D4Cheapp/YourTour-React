function checkIsErrorPage() {
    return !!window.location.href.split('/').at(-1)
}

export default checkIsErrorPage