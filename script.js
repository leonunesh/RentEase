class User {
    constructor(fName, lName, birthDate, email, password) {
        this.fName = fName;
        this.lName = lName;
        this.birthDate = birthDate;
        this.email = email;
        this.password = password;
    }

    save() {
        localStorage.setItem("user:" + this.email, JSON.stringify(this));
    }

    static login(email, password) {
        const data = localStorage.getItem("user:" + email);

        if (!data) return false;

        const user = JSON.parse(data);

        return user.password === password;
    }
}

function logout() {
  localStorage.removeItem("currentUser");
}
