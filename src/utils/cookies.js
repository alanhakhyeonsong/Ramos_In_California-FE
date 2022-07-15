function saveAccessToken(value) {
    document.cookie = `accessToken=${value}`;
}

function saveRefreshToken(value) {
    document.cookie = `refreshToken=${value}`;
}

function getAccessToken() {
    return document.cookie.replace(
        /(?:(?:^|.*;\s*)accessToken\s*=\s*([^;]*).*$)|^.*$/,
        '$1',
    );
}

function getRefreshToken() {
    return document.cookie.replace(
        /(?:(?:^|.*;\s*)refreshToken\s*=\s*([^;]*).*$)|^.*$/,
        '$1',
    );
}

function deleteCookie(value) {
    document.cookie = `${value}=; expires=Thu, 01 Jan 1970 00:00:01 GMT;`;
}

export {
    saveAccessToken,
    saveRefreshToken,
    getAccessToken,
    getRefreshToken,
    deleteCookie,
}