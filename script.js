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
        if (!data) return { success: false, error: "User not found" };

        const user = JSON.parse(data);

        if (user.password !== password)
            return { success: false, error: "Incorrect password" };

        return { success: true, user };
    }
}

class Flat {
    constructor(flName, city, stName, stNumb, area, ac, yearBuild, price, dateAvailable){
    this.flName = flName;
    this.city = city;
    this.stName = stName;
    this.stNumb = stNumb;
    this.area = area;
    this.ac = ac;
    this.yearBuild = yearBuild;
    this.price = price;
    this.dateAvailable = dateAvailable;
    }

    save(){
        localStorage.setItem("Flat:" + this.flName, JSON.stringify(this))
    }
}

function logout() {
    localStorage.removeItem("currentUser");
}
