export class NewItem{
    amountOfStock: number;
    description: string;
    name: string;
    price: number;
    stockUrgency: string;


    constructor(amountOfStock: number, description: string, name: string, price: number, stockUrgency: string) {
        this.amountOfStock = amountOfStock;
        this.description = description;
        this.name = name;
        this.price = price;
        this.stockUrgency = stockUrgency;
    }
}
