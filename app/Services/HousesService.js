import { ProxyState } from "../AppState.js";
import { House } from "../Models/House.js";


class HousesService{
    createHouse(newHouse) {
        console.log('service got the house', newHouse);
        let realHouse = new House(newHouse)
        console.log('its a real house now', realHouse);
        ProxyState.houses = [realHouse, ...ProxyState.houses]
    }

    deleteHouse(houseId) {
        console.log('service deleting house', houseId);
        let indexToDelete = ProxyState.houses.findIndex(h => h.id == houseId)
        console.log('deleting index', indexToDelete);
        ProxyState.houses.splice(indexToDelete, 1)
        ProxyState.houses = ProxyState.houses
    }
}

export const housesService = new HousesService()