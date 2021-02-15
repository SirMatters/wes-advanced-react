import Header from './Header';

export default function Page({ children }) {
  return (
    <div>
      <Header />
      <p>I am page component</p>
      {children}
    </div>
  );
}
