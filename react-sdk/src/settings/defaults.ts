import { TableFlowImporterProps } from "../components/TableFlowImporter/types";

const defaults: TableFlowImporterProps = {
  importerId: "89872e9f-3ccd-43e7-93c1-d7dfb680b45b", // 7e83ef24-c8f8-479f-8825-046e7da368c4
  hostUrl: "http://localhost:3001", // https://importer.tableflow.com
  metadata: { userId: 1234, userEmail: "test@example.com" },
  // template: {
  //   columns: [
  //     {
  //       name: "First",
  //       key: "first_name",
  //       required: false,
  //       description: "The first name of the user",
  //     },
  //   ],
  // },
  // schemaless: false,
  darkMode: true,
  onComplete: ({ data, error }) => console.log("onComplete", data, error),
  // customStyles: {
  //   "font-family": "cursive",
  //   "font-size": "15px",
  //   "base-spacing": "2rem",
  //   "border-radius": "8px",
  //   "color-primary": "salmon",
  //   "color-primary-hover": "crimson",
  //   "color-secondary": "indianRed",
  //   "color-secondary-hover": "crimson",
  //   "color-tertiary": "indianRed",
  //   "color-tertiary-hover": "crimson",
  //   "color-text-on-primary": "#fff",
  //   "color-text-on-secondary": "#ffffff",
  //   "color-background": "bisque",
  //   "color-background-modal": "blanchedAlmond",
  //   "color-text": "brown",
  //   "color-text-soft": "rgba(165, 42, 42, .5)",
  //   "importer-link": "indigo",
  //   "color-border": "lightCoral",
  //   "color-input-background": "blanchedAlmond",
  //   "color-input-background-soft": "white",
  //   "color-background-menu-hover": "bisque",
  //   "color-green-ui": "darkGreen",
  // },
};

export default defaults;
