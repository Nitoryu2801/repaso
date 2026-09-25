export class Product {
  constructor(
    public id: number,
    public title: string,
    public description:string,
    public category:string,
    public price: number,
    public rating:number,
    public thumbnail: string,
    public brand: string,
    public stock:number
  ) {
  }

}
