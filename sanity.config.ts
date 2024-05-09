// sanity.config.ts

import { defineConfig } from "sanity";
import { structureTool } from "sanity/structure";
import { schemaTypes } from "./schema";

export default defineConfig({
  name: "default",
  title: "odyssey sanity ",

  projectId: "3d35fiai",
  dataset: "production",

  basePath: "/studio",
  plugins: [structureTool()],
  schema: { types: schemaTypes },
});
