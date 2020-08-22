import React, { useState } from "react";
import { Link, Route, Switch, Router } from 'react-router-dom'
import Home from './Home'
import Pizza from './Pizza'
import formSchema from './Schema/formSchema'
import * as yup from 'yup'
import axios from 'axios'

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
  const [orders, setOrders] = useState([])

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

  const postNewOrder = newOrder => {
    axios.post('https://reqres.in/api/orders', newOrder)
      .then(res => {
        setOrders([...orders, res.data])
      })
      .catch(err => {
        debugger
      })
      .finally(() => {
        setFormValues(initialFormValues)
      })
  }

  const submit = () => {
    debugger
    let arr = Object.keys(formValues.toppings);
    console.log(formValues.toppings);
    let newarr = arr.map( item => formValues.toppings[item])

    const newOrder = {
      name: formValues.name.trim(),
      size: formValues.size,
      toppings: Object.keys(formValues.toppings).filter( item => formValues.toppings[item]),
      }
    console.log(newOrder)
    postNewOrder(newOrder)
  }


  return (
    <div>
      <nav className="navbar">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/Pizza" id="roundPie">Pizza</Link>
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
            submit={submit}
            />
      </div>
    </div>
  );
};
export default App;
