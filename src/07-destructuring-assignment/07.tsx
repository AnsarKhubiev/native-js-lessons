import {useState} from "react";

type LessonType = {
    title: string
}

type AddressType = {
    title: string
}

export type ManType = {
    name: string
    age: number
    lessons: LessonType[]
    address: AddressType
}

type PropsType = {
    title: string
    man: ManType
    food: string[]
    car: {
        title: string
        model: string
    }
}

export const ManComponent: React.FC<PropsType> = ({title, man, ...props}: PropsType) => {

    const [message, seMessage] = useState<string>('Hello')

    return <div>
        <h1>{title}</h1>
        <hr/>
        <div>{man.name}</div>
        <div>{props.car.model}</div>
    </div>
}