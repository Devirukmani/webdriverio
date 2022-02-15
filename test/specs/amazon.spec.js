const LoginPage = require('../pageobjects/login.page');
const HomePage = require('../pageobjects/home.page');

describe('My Login application', () => {
    it('should login with valid credentials', async () => {
        await LoginPage.open();
        await HomePage.clickSignIn();
        await LoginPage.login('7373165663', 'Amuthan1@');
        await expect(HomePage.signin).toHaveTextContaining('Hello, Devirukmani');
        await HomePage.clickSignOut();
    });

    it('login with invalid password', async ()=> {
        await LoginPage.open();
        await HomePage.clickSignIn();
        await LoginPage.login('7373165663', 'amuthan1@');
        await expect(LoginPage.errorMsg).toHaveTextContaining('Your password is incorrect');
    })
    
});


