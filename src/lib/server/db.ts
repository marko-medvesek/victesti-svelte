import type { Test } from "$lib/types";
import Database from "better-sqlite3";

const db = new Database("database.sqlite", { verbose: console.log });

export function getTests(letnik: number, profesor: number): Test[] {
  const sql = `
  select tt.additional_note as title, tests_testimage.file as image from tests_test tt
  JOIN tests_testimage ON tt.id = tests_testimage.test_id
  WHERE year = ${letnik} AND professor_id = ${profesor};
  `;
  const stmnt = db.prepare(sql);
  const rows = stmnt.all({limit: 50});
  return rows as Test[];
}
