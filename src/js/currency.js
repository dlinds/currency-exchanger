export default class CurrencyExchange {
  static async getGlobalCurrencies() {
    try {
      const response = await fetch(`https://v6.exchangerate-api.com/v6/${process.env.API_KEY}/codes`);
      if (!response.ok) {
        throw Error (`${response.status}`);
      }
      return response.json();
    } catch (error) {
      return error.message;
    }
  }

  static async convert(from) {
    try {
      const response = await fetch(`https://v6.exchangerate-api.com/v6/${process.env.API_KEY}/latest/${from}`);
      if (!response.ok) {
        throw Error (`${response.status}`);
      }
      return response.json();
    } catch (error) {
      return  error.message;
    }
  }
}

