export class Donation {
    public userData: {
        name: string;
        email: string;
    };
    public nonprofit: string;
    public amount: any;
    public details: string;

    constructor(userData: {name: string; email: string}, nonprofit: string, amount: any, details: string) {
        this.userData = userData;
        this.nonprofit = nonprofit;
        this.amount = amount;
        this.details = details;
    }
}