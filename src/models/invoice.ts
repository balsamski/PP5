class Invoice{
    constructor(){}

    name: string;
    quantity: number;
    unit?: Unit;
    netto?: number;
    tax?: Tax;
    brutto?: number;
}