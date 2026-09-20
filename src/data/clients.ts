import type { ImageMetadata } from "astro";
import EDALogo from "../assets/EDA.webp";
import brzLogo from "../assets/brz.webp";
import energyplusLogo from "../assets/energyplus.webp";
import salzitLogo from "../assets/salzit.webp";
import bhbLogo from "../assets/bhb.svg";
import jkuLogo from "../assets/jku.webp";

export interface Client {
  name: string;
  logo: ImageMetadata;
  projectId: string;
}

export const clients: Client[] = [
  { name: "EDA", logo: EDALogo, projectId: "eda" },
  { name: "Bundesrechenzentrum", logo: brzLogo, projectId: "sdg" },
  { name: "Energy+", logo: energyplusLogo, projectId: "energyplus" },
  { name: "SalzIT", logo: salzitLogo, projectId: "salzit" },
  { name: "Barmherzige Brüder", logo: bhbLogo, projectId: "bhb" },
  { name: "JKU", logo: jkuLogo, projectId: "ivolunteer" },
];
