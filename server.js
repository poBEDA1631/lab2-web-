import express from "express";
import path from "path";
import { fileURLToPath } from "url";

const app = express();

// Поточна директорія
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Встановлюємо EJS як шаблонізатор
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

// Статичні файли (css, js, картинки)
app.use(express.static(path.join(__dirname, "public")));

// Маршрути для всіх сторінок
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