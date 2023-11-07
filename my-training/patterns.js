//Singleton
console.log('-----Singleton-----')

class Counter {
    constructor() {
        if(typeof Counter.instance === 'object') {
            return Counter.instance
        }
        this.count = 0;
        Counter.instance = this; //если instance нет, то конструктор его создает, начинает ссылкаться на него и возвращает на него ссылку
        return this; //если instance есть, то просто возвращется ссылка на существующий instance (то есть новый объект не создается)
    }

    getCount() {
        return this.count;
    }

    incrementCount() {
        return this.count++;
    }
}

const counter1 = new Counter();
const counter2 = new Counter();

counter1.incrementCount(); //1
counter2.incrementCount(); //2

console.log(counter1.getCount()); //2
console.log(counter2.getCount()); //2

// Фабричный метод

console.log('-----Factory Method-----')

class BmwConstructor {
    constructor(price, speed, model) {
        this.price = price;
        this.speed = speed;
        this.model = model;
    }
}

class BmwFoctory {
    build(model) {
        switch(model) {
            case 'M3': return new BmwConstructor(50000, 300, model);
            case 'M4': return new BmwConstructor(55000, 330, model)
        }
    }
}

const factory = new BmwFoctory();

const m3 = factory.build('M3');
const m4 = factory.build('M4');

console.log(m3)
console.log(m4)