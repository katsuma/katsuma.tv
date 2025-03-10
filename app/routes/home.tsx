import type { Route } from "./+types/home";
import { Welcome } from "../welcome/welcome";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Ryo Kastuma" },
    { name: "description", content: "Enginner and manager, Ryo Katsuma" },
  ];
}

export default function Home() {
  return <Welcome />;
}
