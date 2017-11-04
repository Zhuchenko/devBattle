# devBattle
1. Запустить main.js
2. В Fiddler отправить POST-запрос
	url: http://localhost:3000/api/convert
	headers: {
		Content-Type: application/json
	}
Пример тела запроса:
	body:{
		"from":"eur",
		"to":"usd",
		"value":156.3
	}
3. В Fiddler отправить GET-запрос
	url: http://localhost:3000/api/get-currency
Используются данные с сайта
