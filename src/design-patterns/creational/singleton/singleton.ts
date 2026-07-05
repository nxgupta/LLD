// Creational Design Pattern: Singleton
// Goal: Ensure a class has only one instance and provide a global access point.


//lazy loading
class Database {
    private static instance: Database | null = null;
    //constructor should be private so an instance cannot be created outside
    private constructor() { }
    public static getInstance(): Database {
        if (this.instance === null) {
            this.instance = new Database();
        }
        return this.instance;
    }
}

let db1 = Database.getInstance();
let db2 = Database.getInstance();
console.log(db1 === db2)

// eager loading
class Database1 {
    private static instance: Database1 = new Database1();
    //constructor should be private so an instance cannot be created outside
    private constructor() { }
    public static getInstance(): Database1 {
        return this.instance;
    }
}

let db3 = Database1.getInstance();
let db4 = Database1.getInstance();
console.log(db3 === db4)

//double checked locking


class Database4 {
    private static instance: Database4 | null = null;
    //constructor should be private so an instance cannot be created outside
    private constructor() { }
    public static getInstance(): Database4 {
        if (this.instance === null) {
            //     synchronised(Database4.class){
            //         if (this.instance === null) { 
            this.instance = new Database4();
            //         }
            //     }

        }
        return this.instance;
    }
}

let db5 = Database4.getInstance();
let db6 = Database4.getInstance();
console.log(db5 === db6)