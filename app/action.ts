"use server";
export const fetchData = async (page: number) => {
  const resp = await fetch(
    `https://shikimori.one/api/animes?page=${page}&limit=8&order=popularity`
  );
  const data = await resp.json();
  return data;
};
