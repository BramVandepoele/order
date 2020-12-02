export class Email {
    // complete: "string";
    domain: string;
    localPart: string;


    constructor(domain: string, localPart: string) {
        this.domain = domain;
        this.localPart = localPart;
    }
}
