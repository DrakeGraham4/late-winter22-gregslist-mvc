import { ProxyState } from "../AppState.js";
import { getHouseForm } from "../Components/HouseForm.js";
import { housesService } from "../Services/HousesService.js";

function _draw() {
    let template = ''
    ProxyState.houses.forEach(h => template += h.Template)
    document.getElementById('listings').innerHTML = template
}
export class HousesController{
    constructor() {
        ProxyState.on('houses', _draw)
        console.log('hello from housescontroller');
        _draw()
    }

    viewHouses() {
        _draw()
        document.getElementById('modal-body-slot').innerHTML = getHouseForm()
    }

    createHouse(event) {
        event.preventDefault()
        let form = event.target
        console.log('hello from create house', form);

        let newHouse = {
            bedrooms: form.bedrooms.value,
            bathrooms: form.bathrooms.value,
            sqFootage: form.sqFootage.value,
            year: form.year.value,
            price: form.price.value
        }
        console.log('create a new house', newHouse);
        housesService.createHouse(newHouse)

    }
    deleteHouse(houseId) {
        console.log('delete card', houseId);
        housesService.deleteHouse(houseId)
    }

    }

