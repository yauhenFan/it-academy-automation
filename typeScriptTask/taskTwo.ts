interface User {
    name: String,
    age: number,
    occupation?: String
};

interface Admin extends User {
    name: String,
    age: number,
    role: String
};

type Person = User | Admin;