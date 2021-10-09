//A class that describes the data in the model
//optional constructor arguments
export class Product {
  constructor(
    public id?: number,
    public name?: string,
    public category?: string,
    public price?: number
  ) {}
}
