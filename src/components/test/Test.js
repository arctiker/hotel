import React from 'react'
import Person from './test2'

export default function Test() {

    const person =[
        {
            id: 1,
            name:'ahmad',
            age: 30,
            skill: 'React'
        },
        {
            id: 2,
            name:'luai',
            age: 31,
            skill: 'Angular'
        },
        {
            id: 3,
            name:'ali',
            age: 35,
            skill: 'Redux'
        }
    ]
    const personList = person.map(person => <Person person={person} />)

    return (
        <div>
            {personList}
        </div>
    )
}
