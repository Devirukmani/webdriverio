
const Page = require('./page');

class LoginPage extends Page {
    get inputEmail() {
        return $('#ap_email');
    }

    get btnContinue(){
        return $("//input[@id='continue']");
    }

    get inputPassword() {
        return $('#ap_password');
    }

    get btnSignIn() {
        return $("//input[@id='signInSubmit']");
    }

    get errorMsg(){
        return $("//span[@class='a-list-item']");
    }

    async login (username, password) {
        await this.inputEmail.setValue(username);
        await this.btnContinue.click();
        await this.inputPassword.setValue(password);
        await this.btnSignIn.click();   
    }

    open() {
        return super.open();
    }
}

module.exports = new LoginPage();
