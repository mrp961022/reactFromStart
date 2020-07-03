class Animal {
    // 每一个类都有一个构造器函数
    // 构造器函数会在new创建实例对象前执行
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    // 在class中使用static声明的属性（方法）就是静态属性（方法）
    static info = 111
    // 实例方法 比较常用
    eat() {
        return `${this.name}吃肉`
    }
}
// var dog = new Animal("大黄", 3);
// 子类继承 extends 继承父类的方法 super 继承父类的属性
class Dog extends Animal {
    constructor(name, age, food) {
        super(name,age) // 继承父类的属性
        this.food = food;
    }
    dogEat() {
        return `${this.name}吃${this.food}`
    }
}