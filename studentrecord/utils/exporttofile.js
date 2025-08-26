import fs from "fs";

export const exportToFile = (filename, data) => {
    fs.writeFileSync(filename, data, "utf-8");
};
