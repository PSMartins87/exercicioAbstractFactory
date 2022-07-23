import IDrink from "./interfaces/IDrinks";

export default class SoftDrink implements IDrink{
    startMakeDrink(): void {
        console.log("o soft drink está sendo produzido");
    }
    deliveryDrink(): void {
        console.log("O soft drink foi entregue");
    }

}