import useForm from '../lib/useForm';
import Form from './styles/Form';

export default function CreateProduct() {
  const { inputs, handleChange, resetForm, clearForm } = useForm({
    name: '',
    price: '',
    description: '',
    image: '',
  });

  return (
    <Form>
      <fieldset>
        <label htmlFor="image">
          Image
          <input type="file" id="image" name="image" onChange={handleChange} />
        </label>
        <label htmlFor="name">
          Name
          <input
            id="name"
            name="name"
            value={inputs.name}
            onChange={handleChange}
            placeholder="Enter product's name"
          />
        </label>
        <label htmlFor="price">
          Prcie
          <input
            id="price"
            type="number"
            name="price"
            value={inputs.price}
            onChange={handleChange}
            placeholder="Enter product's price"
          />
        </label>
        <label htmlFor="description">
          Description
          <textarea
            id="description"
            name="description"
            value={inputs.description}
            onChange={handleChange}
            placeholder="Enter product's description"
          />
        </label>
      </fieldset>
      <button type="submit">+ Add product</button>
    </Form>
  );
}
