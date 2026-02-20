// create a function

function Header() {
    return <h1>Welcome to React</h1>
}

// we can create this same function with arrow functions

const Header =()=>{
    return (
        <h1>Welcome to React</h1>
    )
}

// create a function with parameters

function Welcome(props) {
    return <h1>Hello, {props.name}</h1>
}

// by using arrow functions

const Welcome = (props) => {
    return (
        <h1>Hello, {props.name}</h1>
    )
}