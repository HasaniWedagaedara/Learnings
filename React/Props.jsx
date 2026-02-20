// propes we are using when we used reusable components, we can pass data to the component using props.

function Header(props){
    const name = props.name;
    const age = props.age;

    return (
      <>
        <h1>Welcome to React.</h1>
        <p>
          Hello {name}, you are {age} years old.
        </p>
      </>
    );
}

// we can also use destructuring to get the values from props(like short cut)

function Header(props){
    const {name, age} = props;

    return (
      <>
        <h1>Welcome to React.</h1>
        <p>
          Hello {name}, you are {age} years old.
        </p>
      </>
    );
}

// we can also use destructuring in the parameter itself

function Header({name, age}){
    return (
      <>
        <h1>Welcome to React.</h1>
        <p>
          Hello {name}, you are {age} years old.
        </p>
      </>
    );
}

// we can also use arrow functions

const Header = ({name, age}) => {
    return (
      <>
        <h1>Welcome to React.</h1>
        <p>
          Hello {name}, you are {age} years old.
        </p>
      </>
    );
}


