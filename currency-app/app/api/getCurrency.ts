import axios from "axios";

// Функция для выполнения запроса к API
export async function getCurrencyConversionRate(
  fromCurrency: string,
  toCurrency: string
) {
  try {
    const response = await axios.get("https://xecdapi.xe.com/v1/convert_from", {
      auth: {
        username: "none808700287",
        password: "1da2ik4kchdarn6a24v6iton1h",
      },
      params: {
        from: fromCurrency,
        to: toCurrency,
      },
    });

    // Обработка ответа от API
    if (response.status === 200) {
      return response.data;
    } else {
      throw new Error(`Ошибка при запросе: ${response.statusText}`);
    }
  } catch (error) {
    throw new Error(`Ошибка при выполнении запроса: ${error.message}`);
  }
}
