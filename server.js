import express from "express";
import path from "path";
import { fileURLToPath } from "url";

const app = express();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

app.use(express.static(path.join(__dirname, "public")));

app.get("/", (req, res) => {
  res.render("overview", { page: "overview", showAccount: true });
});

app.get("/projects", (req, res) => {
  res.render("projects", { page: "projects", showAccount: true });
});

app.get("/reports", (req, res) => {
  res.render("reports", { page: "reports", showAccount: true });
});

app.get("/settings", (req, res) => {
  res.render("settings", { page: "settings", showAccount: true });
});

// Запуск сервера
app.listen(3000, () => console.log("Server running on http://localhost:3000"));