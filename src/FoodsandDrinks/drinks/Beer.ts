import IDrink from "./interfaces/IDrinks";

export default class Beer implements IDrink {
    startMakeDrink(): void {
        console.log("A cerveja está sendo produzida");
    }
    deliveryDrink(): void {
        this.startMakeDrink();
        console.log("A cerveja foi entregue");
    }
}
