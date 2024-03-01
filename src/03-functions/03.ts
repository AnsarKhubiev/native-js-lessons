import {StudentType} from "../02-objects/02";
import {CityType, GovernmentBuildingType, HouseType} from "../02-objects/02_02";

export function addSkill(st: StudentType, skill: string) {
    st.technologies.push({
        id: new Date().getTime(),
        title: skill
    })
}

export function makeStudentActive(st: StudentType) {
    st.isActive = true
}

export function doesStudentLiveIn(st: StudentType, cityName: string) {
    return st.address.city.title === cityName
}

export const addMoneyToBudget = (building: GovernmentBuildingType, budget: number) => {
    building.budget += budget;
}

export function repairHouse(house: HouseType) {
    house.repaired = true;
}

export const toHireStaff = (building: GovernmentBuildingType, countToIncrease: number) => {
    building.staffCount += countToIncrease;
}

export const toFireStaff = (building: GovernmentBuildingType, countToIncrease: number) => {
    building.staffCount -= countToIncrease;
}

export const createMessage = (city: CityType) =>{
   return `Hello ${city.title} citizens. I want you be happy. All ${city.citizensNumber} men.`
}