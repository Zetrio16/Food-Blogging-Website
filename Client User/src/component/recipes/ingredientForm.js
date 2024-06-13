import { useState } from 'react';

function IngredientForm({ onSubmit }) {
    const [name, setName] = useState('');
    const [quantity, setQuantity] = useState('');
    const [unit, setUnit] = useState('');
  
    const handleSubmit = (e) => {
      e.preventDefault();
      // Create an object representing the ingredient
      const ingredient = { name, quantity, unit };
      // Pass the ingredient object to the onSubmit function
      onSubmit(ingredient);
      // Clear the form fields
      setName('');
      setQuantity('');
      setUnit('');
    };
  return (
    <div className='addIngredientsForm'>
<center>
        <input type="text" placeholder='Name of Ingredient' value={name} onChange={(e) => setName(e.target.value)} required />
        <input type="text" placeholder='Quantity of Ingredient' value={quantity} onChange={(e) => setQuantity(e.target.value)} required />
        <input type="text" placeholder='Unit of quantity' value={unit} onChange={(e) => setUnit(e.target.value)} required />

      <button type="submit" className='addIngredientBtn' onClick={handleSubmit}>Add Ingredient</button>
      </center>
    </div>
  );
}

export default IngredientForm;
