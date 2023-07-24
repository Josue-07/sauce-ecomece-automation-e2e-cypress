const locators = {
    page_login: {
        USER: '#user-name',
        PASSWORD: '#password',
        BTT_LOGIN: '.btn_action',
        ERROR_USER_BLOCK: '.error-message-container > h3',
        ERROR_USER_NONEXISTENT: '[data-test="error"]'
    },
    page_produto: {
        TITLE_PRODUTO: '.title'
    }
}

export default locators;