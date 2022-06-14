const express = require("express");
const config = require("config");
const mongoose = require("mongoose");
const app = express(); //Присваиваем express

app.use(express.json({ extended: true }));

app.use("/api/auth", require("./routes/auth.routes"));

const PORT = config.get("port") || 5000; // Назначаем порт

async function start() {
  //Подключаем mongoose
  try {
    await mongoose.connect(config.get("mongoUri")); // Прописываем uri
    app.listen(PORT, () => {
      //Запускаем сервер
      console.log(`The app has been started on PORT: ${PORT}...`);
    });
  } catch (e) {
    console.log("Server error ", e.message); //Ловим ошибку
    process.exit(1); //Завершаем node процесс
  }
}

start(); // Подключаемся к базе данных
//Проверка
