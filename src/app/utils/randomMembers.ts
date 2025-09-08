interface Member {
  name: string;
  profileImg: string;
}

export function getRandomMembers(members: Member[], count: number) {
  const array = [...members];
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }

  return array.slice(0, count);
}
