import { generateApi } from "swagger-typescript-api";
import * as path from "path";
import * as fs from "fs";

const typesInterfaces = new Set();

/* NOTE: all fields are optional expect one of `output`, `url` or `spec` */
generateApi({
  name: "index.ts",
  output: path.resolve(process.cwd(), "./src/main/"),
  // url: "http://localhost:5270/swagger/v1/swagger.json",
  url: "https://octopus-app-6e9q7.ondigitalocean.app/swagger/v1/swagger.json",
  enumNamesAsValues: false,
  generateClient: false,
  hooks: {
    onCreateComponent: (component) => {
      //@ts-ignore
      if (!component.rawTypeData?.enum) {
        typesInterfaces.add(component.typeName);
        component.typeName = `I${component.typeName}`;
      }

      return component;
    },

    onFormatTypeName: (typeName) => {
      if (typesInterfaces.has(typeName)) {
        return `I${typeName}`;
      }

      return typeName;
    },
  },
})
  .then(({ files }) => {
    files.forEach(({ content }) => {
      fs.writeFile(
        path.resolve(process.cwd(), "./src/main/", "index.ts"),
        content,
        (err: NodeJS.ErrnoException | null) => {
          if (err) console.log("error", err);
        }
      );
    });
  })
  .catch((e) => console.error(e));