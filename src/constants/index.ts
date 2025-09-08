import enCommon from "@/locales/en/common.json";
import projects from "@/locales/en/projects.json"

export const MEMBERS_PICS = Object.values(enCommon.members).map((member) => ({
  profileImg: member.profileImg,
  name: member.name,
}));

export const IMAGES = projects
  .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
  .slice(0, 3)
  .map((p) => ({
    name: p.title.toLowerCase().replace(/\s+/g, "-"),
    title: p.title.replace(/:.*$/, ""),
    imageUrl: p.image,
    link: p.link,
  }));
