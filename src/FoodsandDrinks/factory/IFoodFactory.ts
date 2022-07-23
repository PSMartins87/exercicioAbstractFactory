import IDrinks from "../drinks/interfaces/IDrinks";
import IFoods from "../foods/interfaces/IFoods";
import IDeliveryFactory from "./interfaces/IDeliveryFactory";
import SoftDrink from "../drinks/SoftDrink";
import HotDog from "../foods/HotDog";

export default class IFoodfactory implements IDeliveryFactory{
    createDeliveryDrink(): IDrinks {
        return new SoftDrink();       
    }
    createDeliveryFood(): IFoods {
        return new HotDog();
    }
}