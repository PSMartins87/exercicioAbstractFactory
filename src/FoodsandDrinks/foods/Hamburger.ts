import IFoods from "./interfaces/IFoods";

export default class Hamburger implements IFoods{
    startMakeFoods(): void {
        console.log("o hamburger está sendo preparado");
    }
    deliveryFoods(): void {
        console.log("o hamburger foi entregue");
    }

}