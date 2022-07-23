import IDrink from "../../drinks/interfaces/IDrinks";
import IFoods from "../../foods/interfaces/IFoods";

export default interface IDeliveryFactory {
    createDeliveryDrink(): IDrink;
    createDeliveryFood(): IFoods;
}
