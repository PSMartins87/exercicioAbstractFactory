import deliverycompanies from "./FoodsandDrinks/const/deliverycompanies";
import IDeliveryFactory from "./FoodsandDrinks/factory/interfaces/IDeliveryFactory";
import IFoods from "./FoodsandDrinks/foods/interfaces/IFoods";
import IDrink from "./FoodsandDrinks/drinks/interfaces/IDrinks";
import AiQfomeFactory from"./FoodsandDrinks/factory/AiQfomeFactory";
import IFoodFactory from"./FoodsandDrinks/factory/IFoodFactory";
const currentDeliveryform = deliverycompanies.AiQ;
let factory: IDeliveryFactory;

switch (currentDeliveryform) {
    case currentDeliveryform.AIQ:
        factory = new AiQfomeFactory();
        break;
    case currentDelivery.IFOOD:
        factory = new IFooDFactory();
        break;
    default:
        console.log("empresa não definida");
}
