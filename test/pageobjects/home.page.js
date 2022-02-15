

const Page = require('./page');

class HomePage extends Page {
    
    get signin(){
        return $('.nav-line-1-container');
    }

    get signOut(){
        return $("//a[@id='nav-item-signout']")
    }

    async clickSignIn(){
        await this.signin.click();
    }

    async clickSignOut(){
        await this.signin.moveTo();
        await this.signOut.click();
    }
}

module.exports = new HomePage();
