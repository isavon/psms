# Порядок встановлення

Клонуємо репозиторій: `git clone ...`

Переходимо до папки зклонованного проекту: `cd your_project_folder`

## Налаштування Backend

`cd backend`

`composer update`

Створити файл `.env` з файлу `.env.example`

Відредагувати налаштування для бази даних: `DB_DATABASE`, `DB_USERNAME`

`php artisan key:generate`

`php artisan migrate --seed`

`php artisan serve`

## Налаштування Frontend

`cd your_project_folder/fronend`

Створити файл `.env` з файлу `.env.example`

`npm install`

`npm start`

## Налаштування тестування

`cd your_project_folder/backend`

Створити файл `.env.testing` з файлу `.env.example`

`php artisan key:generate --env=testing`

Створити окрему базу даних для тестування та відредагувати налаштування в файлі `.env.testing`: `DB_DATABASE`, `DB_USERNAME`

`php artisan migrate --seed --env=testing`

` php artisan test`