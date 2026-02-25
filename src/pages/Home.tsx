import Layout from "../components/Layout";

const Home = () => {
  return (
    <Layout>
      <h1>Hi, I'm Maxwell 👋</h1>
      <h1 className="text-4xl font-bold text-red-500">Test</h1>
      <p>
        Computer Science student building software, games, and tools that
        improve everyday life.
      </p>

      <section>
        <h2>What I Do</h2>
        <ul>
          <li>Full-stack development</li>
          <li>Game engine development</li>
          <li>Music production</li>
          <li>Systems programming</li>
        </ul>
      </section>
    </Layout>
  );
};

export default Home;