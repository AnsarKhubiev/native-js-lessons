import {CityType, GovernmentBuildingsType} from "../02-objects/02_02";

export const demolishHousesOnTheStreet = (city: CityType, street: string) => {
    city.houses.filter((el) => el.address.street.title !== street)
}

export const getBuildingsWithStaffCountGreaterThen = (b: GovernmentBuildingsType[], number: number) => {
    return b.filter(building => building.staffCount > number)
}