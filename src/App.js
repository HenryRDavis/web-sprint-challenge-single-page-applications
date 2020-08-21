import React, { useState } from "react";
import { Link, Route, Switch, Router } from 'react-router-dom'
import Home from './Home'
import Pizza from './Pizza'
import formSchema from './Schema/formSchema'
import * as yup from 'yup'

const initialFormValues = {
  name: '',
  size: '',
  toppings: {
      pepperoni: false,
      sausage: false,
  }
}

const initialFormErrors = {
  name: '',
  size: '',
}

const App = () => {
  const [formValues, setFormValues] = useState(initialFormValues)
  const [formErrors, setFormErrors] = useState(initialFormErrors)

  const inputChange = (name, value) => {
    yup
      .reach(formSchema, name)
      .validate(value)
      .then(valid=> {
        setFormErrors({
          ...formErrors,
          [name]: "", 
        })
      })
      .catch(err => {
        setFormErrors({
          ...formErrors,
          [name]: err.errors[0],
        })
      })

      setFormValues({
        ...formValues,
        [name]: value
      })
  }

  const checkboxChange = (name, isChecked) => {
    setFormValues({
      ...formValues,
      toppings: {
        ...formValues.toppings,
        [name]: isChecked, 
      }
    })
  }

  return (
    <Router>
      <nav className="navbar">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/Pizza">Pizza</Link>
        </li>
      </nav>
      <div className="App">
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/Pizza" component={Pizza} />
        </Switch>
        <Pizza 
            values={formValues}
            inputChange={inputChange}
            checkboxChange={checkboxChange}
            />
      </div>
    </Router>
  );
};
export default App;
