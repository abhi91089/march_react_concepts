function player(props) {
    return `${props.name} is ${props.age} from ${props.country}`
}

console.log(player({ name: 'sachin', country: 'india', age: 40}))
console.log(player({ age: 33, country: 'india', name: 'dhoni'}))