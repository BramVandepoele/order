export class Address {
    country: string;
    houseNumber: string;
    postalCode: string;
    streetName: string;


    constructor(country: string, houseNumber: string, postalCode: string, streetName:string) {
        this.country = country;
        this.houseNumber = houseNumber;
        this.postalCode = postalCode;
        this.streetName = streetName;
    }
}
