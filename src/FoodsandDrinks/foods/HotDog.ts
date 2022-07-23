import IFoods from "./interfaces/IFoods";

export default class HotDog implements IFoods {
    startMakeFoods(): void {
        console.log("o Hot dog está sendo preparado");
    }
    deliveryFoods(): void {
        this.startMakeFoods();
        console.log("o Hot dog foi entregue");
    }
}
