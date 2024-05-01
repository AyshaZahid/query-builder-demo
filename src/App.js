import React, { useState } from "react";
import { QueryBuilder, formatQuery } from "react-querybuilder";
import "react-querybuilder/dist/query-builder.css";

const fields = [
  { name: "isWarranty", label: "Is Warranty", type: "boolean" },
  {
    name: "FILECOUNT",
    label: "File Count",
    type: "string",
    values: ["Warranty Report Form", "COFC", "FORM ONE"],
  },
];

export default function App() {
  const [query, setQuery] = useState({
    combinator: "and",
    rules: [
      { field: "isWarranty", operator: "=", value: true },
      { field: "FILECOUNT", operator: "in", value: "Warranty Report Form" },
    ],
  });

  return (
    <>
      <QueryBuilder fields={fields} query={query} onQueryChange={setQuery} />
      <h4>
        CEL as result of <code>{formatQuery(query, "cel")}</code>:
      </h4>
      <pre>{formatQuery(query, "cel")}</pre>
    </>
  );
}
