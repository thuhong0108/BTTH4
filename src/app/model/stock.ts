export class Stock {
    favorite: boolean = false;

    constructor(
        public name: string,
        public code: string,
        public price: number,
        public previousPrice: number,
        public exChange: string
    ) {}

    public isPositiveChange(): boolean {
        return this.price >= this.previousPrice;
    }     
}
