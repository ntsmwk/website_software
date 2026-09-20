import { projects } from "../data/projects";

export function projectPaths() {
  return projects.map((project) => ({ params: { id: project.id }, props: { project } }));
}
