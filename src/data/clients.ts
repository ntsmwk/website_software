export interface Client {
  name: string;
  logo?: string;
  projectId: string;
}

export const clients: Client[] = [
  { name: "EDA", logo: "/EDA.webp", projectId: "eda" },
  { name: "Energy+", logo: "/energyplus.webp", projectId: "energyplus" },
  { name: "SalzIT", logo: "/salzit.webp", projectId: "salzit" },
  { name: "Barmherzige Brüder", logo: "/bhb.svg", projectId: "bhb" },
  { name: "JKU", logo: "/jku.webp", projectId: "ivolunteer" },
  { name: "Bundeskanzleramt", projectId: "sdg" },
];
