class User {
    constructor(email, password) {
        this.email = email;
        this.password = password;
    }

    save() {
        localStorage.setItem("user:" + this.email, this.password);
    }

    checkLogin() {
        return localStorage.getItem(this.email) == this.password;
    }
}