export default function Home(props) {
  return (
    <div>
      <p>{JSON.stringify(props.episodes)}</p>
    </div>
  );
}

export async function getStaticProps() {
  const response = await fetch("http://localhost:3333/episodes");
  const data = await response.json();

  return {
    props: {
      episodes: data,
    },
    // 60s * 60m * 8h = 24h
    revalidate: 60 * 60 * 8,
  };
}
