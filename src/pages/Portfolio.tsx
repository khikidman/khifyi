import Layout from "../components/Layout";

interface Project {
  title: string;
  description: string;
  tech: string[];
}

const projects: Project[] = [
  {
    title: "Isometric Game Engine",
    description: "Custom 2D engine with lighting and chunk loading.",
    tech: ["C#", "MonoGame"],
  },
  {
    title: "Habit Tracking App",
    description: "Calendar-based SwiftUI productivity app.",
    tech: ["SwiftUI"],
  },
];

const Portfolio = () => {
  return (
    <Layout>
      <h1>Portfolio</h1>

      {projects.map((project, index) => (
        <div key={index} style={{ marginBottom: "2rem" }}>
          <h2>{project.title}</h2>
          <p>{project.description}</p>
          <p>
            <strong>Tech:</strong> {project.tech.join(", ")}
          </p>
        </div>
      ))}
    </Layout>
  );
};

export default Portfolio;