import { generateId } from "../Utils/generateId.js"

export class House{
    constructor({ bedrooms, bathrooms, sqFootage, year, price, imgUrl}) {
        this.id = generateId()
        this.bedrooms = bedrooms,
        this.bathrooms = bathrooms,
        this.sqFootage = sqFootage,
        this.year = year,
        this.price = price,
        this.imgUrl = imgUrl
            
    }

    get Template() {
        return `<div class="col-md-4">
              <div class="bg-white rounded shadow">
                <img class="img-fluid rounded-top" src="${this.imgUrl}" alt="house-image">
                <div class="p-3">
                  <p>Bedrooms: ${this.bedrooms}</p>
                  <p>Bathrooms: ${this.bathrooms}</p>
                  <p>Square Footage: ${this.sqFootage}</p>
                  <p>Year: ${this.year}</p>
                  <p>Price: ${this.price}</p>
                </div>
                <button class="btn btn-outline-danger" onclick="app.housesController.deleteHouse('${this.id}')"> delete </button>
              </div>
            </div>`
    }
}