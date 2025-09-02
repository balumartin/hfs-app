export type Publication = {
  year: string;
  title: string;
  source: string;
  lang: string;
};

export type Member = {
  name: string;
  post: string;
  profileImg: string;
  bio: string;
  publications: Publication[];
};

export type MembersData = {
  members: Record<string, Member>;
};