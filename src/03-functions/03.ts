import {StudentType} from '../02-objects/02'
import {GovernmentBuildingsType, HouseType} from "../02-objects/02_02";


export const addSkill = (st: StudentType, skill: string) => {
    st.technologies.push({
        id: new Date().getTime(),
        title: skill
    })
}

export function makeStudentActive(s: StudentType) {
    s.isActive = true
}

export function DoesStudentLiveIn(s: StudentType, cityName: string) {
    return s.address.city.title === cityName
}

export function addMoneyToBudget(building: GovernmentBuildingsType, budget: number) {
    building.budget += budget
}

export function repairHouse(house: HouseType){
    house.repaired = true
}

export function toFireStaff(building: GovernmentBuildingsType, staffCountToFire: number) {
    building.staffCount -= staffCountToFire
}

export function toHireStaff(building: GovernmentBuildingsType, staffCountToHire: number) {
    building.staffCount += staffCountToHire
}