import SingleProduct from '../../components/SingeProduct';

export default function SingleProductPage({ query: { id } }) {
  console.log('id', id);
  return <SingleProduct id={id} />;
  // return <p>product page</p>;
}
