import IDrink from "../drinks/interfaces/IDrinks";
import IDeliveryFactory from "../factory/interfaces/IDeliveryFactory";
import IFoods from "../foods/interfaces/IFoods";

export default class cliente {
    private drink: IDrink;
    private food: IFoods;

    constructor(factory: IDeliveryFactory) {
        this.drink = factory.createDeliveryDrink();
        this.food = factory.createDeliveryFood();
    }

    startDelivery(): void {
        this.drink.deliveryDrink();
        this.food.deliveryFoods();
    }
}
