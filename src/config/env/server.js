//check if it is dev server or prod server
const isDev = window.location.href.includes('dev.')

module.exports = {
    APP_NAME: 'knowme-page',
    
    //API URL FOR ALL AJAX CALL

    LOGIN_URL: isDev ? 'https://dev.accounts.codes/knowme.page/login' : 'https://accounts.codes/knowme.page/login',
    JWT: isDev ? 'devJwt' : 'jwt',
    API_URL_FILES: isDev?'https://dev.files.codes/api':'https://files.codes/api',
    API_URL_ADMIN: 'https://knowme.page/api/admin',
    API_URL_MARKET_MEMBER:'https://knowme.page/api/market-member',
    API_URL_USER_KNOWME:'https://knowme.page/api/user-knowme',
    API_URL_PUBLIC: 'https://knowme.page/api/public',
    API_URL_BASE_CLIENT: 'https://knowme.page',
    API_URL_SOCKET: 'https://socket.knowme.page',
    API_URL_BASE_MARKETPLACE_CLIENT: 'https://knowme.page/marketplace',
    DOMAIN: "knowme.page",
    HOMEPAGE_URL:'https://welcome.leader.codes/apps/knowme',

}
