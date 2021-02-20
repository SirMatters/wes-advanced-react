import { gql, useMutation, useQuery } from '@apollo/client';
import { SINGLE_ITEM_QUERY } from './SingeProduct';
import ErrorMessage from './ErrorMessage';
import Form from './styles/Form';
import useForm from '../lib/useForm';

const UPDATE_PRODUCT_MUTATION = gql`
  mutation UPDATE_PRODUCT_MUTATION(
    $id: ID!
    $name: String
    $description: String
    $price: Int
  ) {
    updateProduct(
      id: $id
      data: { name: $name, description: $description, price: $price }
    ) {
      id
      name
      description
      price
    }
  }
`;

export default function UpdateProduct({ id }) {
  const { data, error, loading } = useQuery(SINGLE_ITEM_QUERY, {
    variables: { id },
  });

  const { inputs, handleChange } = useForm(data?.Product);

  const [
    updateProduct,
    { data: updateData, error: updateError, loading: updateLoading },
  ] = useMutation(UPDATE_PRODUCT_MUTATION);

  if (loading) return <p>Loading...</p>;

  return (
    <Form
      onSubmit={async (e) => {
        e.preventDefault();
        await updateProduct({
          variables: {
            id,
            name: inputs.name,
            description: inputs.description,
            price: inputs.price,
          },
        });
      }}
    >
      <ErrorMessage error={error || updateError} />
      <fieldset disabled={updateLoading && loading}>
        <label htmlFor="name">
          Name
          <input
            id="name"
            name="name"
            value={inputs.name}
            onChange={handleChange}
          />
        </label>
        <label htmlFor="description">
          Description
          <input
            id="description"
            name="description"
            value={inputs.description}
            onChange={handleChange}
          />
        </label>
        <label htmlFor="price">
          Price
          <input
            id="price"
            name="price"
            value={inputs.price}
            onChange={handleChange}
          />
        </label>
      </fieldset>
      <button type="submit">Save changes</button>
    </Form>
  );
}
