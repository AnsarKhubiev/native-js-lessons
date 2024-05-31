import {GovernmentBuildingsType, HouseType} from "../02-objects/02_02";

export const getStreetsTitlesOfGovernmentBuildings = (buildings: GovernmentBuildingsType[]) => {
    return buildings.map((building: GovernmentBuildingsType) => {
        return building.address.street.title
    })
}

export const getStreetsTitlesOfHouses = (houses: HouseType[]) => {
    return houses.map(house => {
        return house.address.street.title
    })
}

export const createMessages = (houses: HouseType[]) => {
    return houses.map(house => {
        return `Hello guys from ${house.address.street.title}`
    })
}

export const createGreetingMessage = (houses: HouseType[]) => {
    return houses.map(house => {
        return `Hello, guys from ${house.address.street.title}`
    })
}