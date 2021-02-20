import UpdateProduct from '../components/UpdateProduct';

export default function UpdateProductPage({ query: { id } }) {
  return <UpdateProduct id={id} />;
}
