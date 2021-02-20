import useForm from '../lib/useForm';

export default function CreateProduct() {
  const { inputs, handleChange, resetForm, clearForm } = useForm({
    name: 'tewe',
    price: 6732,
    description: 'hahane',
  });

  return (
    <form>
      <label htmlFor="name">
        Name
        <input
          name="name"
          value={inputs.name}
          onChange={handleChange}
          placeholder="Enter product's name"
        />
      </label>
      <label htmlFor="price">
        Prcie
        <input
          type="number"
          name="price"
          value={inputs.price}
          onChange={handleChange}
          placeholder="Enter product's price"
        />
      </label>
      <label htmlFor="description">
        Description
        <input
          name="description"
          value={inputs.description}
          onChange={handleChange}
          placeholder="Enter product's description"
        />
      </label>
      <button type="button" onClick={clearForm}>
        Clear form
      </button>
      <button type="button" onClick={resetForm}>
        Reset form
      </button>
    </form>
  );
}
