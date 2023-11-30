export default function Home({ name }) {
  return <div data-testid="message">Hello {name}</div>;
}

export const getServerSideProps = async () => {
  const res = await fetch("http://localhost:3000/api/hello");
  const data = await res.json();

  return {
    props: {
      name: data.name,
    },
  };
};
