# ITC Frontend
Фронтэнд для системы по работе с проектами в ITC

## Как запускать
Для работы необходима последняя стабильная нода
```bash
npm i -g n
n stable
```
В директории репозитория необходимо сделать файл `.env` следующего содержания
```
NODE_PATH=src/
REACT_APP_VK_CLIENT_ID=ИД_ПРИЛОЖЕНИЯ_ВК
REACT_APP_HOSTNAME=http://localhost:3000
REACT_APP_API_HOSTNAME=http://localhost:3001
```
Где `REACT_APP_API_HOSTNAME` - хост с API и `REACT_APP_HOSTNAME` - хост, на котором поднят фронт

Потом
```bash
npm install
npm start
```

## TODO:
- заменить rambler-ui на ant design
- заменить redux-logic на redux-saga
- заменить redux-jss на styled-components
- профиль пользователя
- админка с возможностью смотреть список проектов и редактировать их через форму (переиспользовать OrderForm)