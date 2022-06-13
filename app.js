import express from "express";
import config from "config";
import mongoose from "mongoose";

const app = express(); //Присваиваем express

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
