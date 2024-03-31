import { getTests } from "$lib/server/db";

export const load = ({ params, url }) => {
  let letnik = url.searchParams.get("letnik");
  let predmet = url.searchParams.get("predmet");
  let profesor = url.searchParams.get("profesor");
  const tests = getTests(letnik, profesor);

  return {
    tests,
  };
};
