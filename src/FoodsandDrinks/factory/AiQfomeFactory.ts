import Beer from "../drinks/Beer";
import IDrinks from "../drinks/interfaces/IDrinks";
import IFoods from "../foods/interfaces/IFoods";
import IDeliveryFactory from "./interfaces/IDeliveryFactory";
import Hamburger from "../foods/Hamburger";
export default class AiQfomeFactory implements IDeliveryFactory {
    createDeliveryDrink(): IDrinks {
        return new Beer();
    }
    createDeliveryFood(): IFoods {
        return new Hamburger();
    }
}
