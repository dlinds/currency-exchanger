export default class CurrencyExchange {
  static async getGlobalCurrencies() {
    try {
      const response = await fetch(`https://v6.exchangerate-api.com/v6/${process.env.API_KEY}/codes`);
      if (!response.ok) {
        throw Error (response.statusTest);
      }
      return response.json();
    } catch (error) {
      return  error.message;
    }
  }
}