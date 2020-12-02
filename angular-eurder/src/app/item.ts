export class Item{
    amountOfStock: number;
    description: string;
    id: string;
    name: string;
    price: number;
    stockUrgency: string;


    constructor(amountOfStock: number, description: string, id: string, name: string, price: number, stockUrgency: string) {
        this.amountOfStock = amountOfStock;
        this.description = description;
        this.id = id;
        this.name = name;
        this.price = price;
        this.stockUrgency = stockUrgency;
    }
}
