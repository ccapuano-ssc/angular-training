// var age: number = 20;
// console.log("Age is", age);

// function printPerson(name: string, age: number)
// {
//     console.log(`Name: ${name} age: ${age}`);
// }

// printPerson("Billy", 8);

// function isMinimumAge(age: number) : boolean{
//     return age >= 21;
// }

// console.log("Is minimum age:", isMinimumAge(22));


class Product{
    
    
    constructor(
        public id: number,
        public title: string,
        public price: number,
        public published = true

    )
    {
        
    }

    printDetails(){
        console.log("ID: ", this.id);
        console.log("published: ", this.published);
        console.log("Price: ", this.price);
        console.log("Title: ", this.title);

    }
}

let db = new Map<number, Product>();
let p1 = new Product(100, "Milk", 123.45 );
let p2 = new Product(200, "Eggs", 11.45 );
let p3 = new Product(300, "Bacon", 5.45 );
db.set(p1.id, p1);
db.set(p2.id, p2);
db.set(p3.id, p3);

db.forEach((p, key) => {
    console.log(`Key is:${key}`);
    p.printDetails();
});

function getOrDefault<K, V>(
    key: K,
    map: Map<K, V>,
    defaultValue: V) : V {
        let data: V = map.get(key) ?? defaultValue;
        return data;
    }

let p5 = getOrDefault(1234, db, new Product(0, "Unknown", 0.0));
p5.printDetails();