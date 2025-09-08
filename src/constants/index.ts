import enCommon from "@/locales/en/common.json";

export const MEMBERS_PICS = Object.values(enCommon.members).map((member) => ({
  profileImg: member.profileImg,
  name: member.name,
}));

export const IMAGES = [
  {
    name: "atmospheres",
    title: "Atmospheres and Architectonics",
    imageUrl: "/projects/atmospheres.webp",
    link: "https://mome.hu/en/atmospheres-and-architectonics-conference",
  },
  {
    name: "design-culture",
    title: "Design culture and somaesthetics conference Budapest",
    imageUrl: "/projects/design-culture.jpg",
    link: "https://api.mome.hu/uploads/2019_Design_culture_and_Somaesthetics_booklet_2eadde6cb8.pdf",
  },
  {
    name: "promise-pragmatist",
    title: "THE PROMISE OF PRAGMATIST AESTHETICS",
    imageUrl: "/projects/promise-pragmatist.webp",
    link: "https://pae30.mome.hu/",
  },
];
