import React from "react";


const Pizza = ({values, inputChange, checkboxChange, submit}) => {
    const onInputChange = evt => {
        const { name, value } = evt.target
        inputChange(name, value)
      }    

    const onCheckboxChange = evt => {
        const { name, isChecked } = evt.target
        checkboxChange(name, isChecked)
    }

    const onSubmit = evt => {
        evt.preventDefault()
        submit()
      }
    
      return(
        <form>
          <label>Name
            <input
              type="text"
              name="name"
              value={values.name}
              onChange={inputChange}
            />
          </label>
        
          <label>
            What size would you like your pizza to be?
            <select onChange={onInputChange} value={values.size} name='size'>
              <option value=''>--Please choose a size--</option>
              <option value='small'>Small</option>
              <option value='medium'>Medium</option>
              <option value='large'>Large</option>
            </select>
          </label>

    <h4>Toppings</h4>

        <label>Pepperoni
        <input
        type="checkbox"
        name='pepperoni'
        checked={values.toppings.pepperoni}
        onChange={onCheckboxChange}
        />
    </label>

    <label>Sausage
        <input
        type="checkbox"
        name='sausage'
        checked={values.toppings.sausage}
        onChange={onCheckboxChange}
        />
    </label>

    <div>
        <button onClick={onSubmit}>Submit</button>
    </div>
        </form>
    )

}

export default Pizza;


