import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import CurrencyExchange from './js/currency.js';

function populateCurrencies(response) {
  if (response.result === "success") {
    $("#list-of-currencies").append(`<label for="currency-select">Please select a Currency</label>`);
    $("#list-of-currencies").append(`<select id="currency-select" class="form-control">`);
    $("#convert-to").append(`<label for="currency-to">Please select a Currency</label>`);
    $("#convert-to").append(`<select id="currency-to" class="form-control">`);
    response.supported_codes.forEach(function(currency) {
      if (currency[0] === `USD`) {
        $("#currency-select").prepend(`<option value="${currency[0]}">${currency[1]}</option>`);
        $("#currency-to").prepend(`<option value="${currency[0]}">${currency[1]}</option>`);
      } else {
        $("#currency-select").append(`<option value="${currency[0]}">${currency[1]}</option>`);
        $("#currency-to").append(`<option value="${currency[0]}">${currency[1]}</option>`);
      }
    });
    $("#list-of-currencies").append(`</select>`);
    $("#convert-to").append(`</select>`);
    $("#currency-select").val(`USD`);
    $("#currency-to").val(`USD`);
  }
}

async function getCurrenciesList() {
  populateCurrencies(await CurrencyExchange.getGlobalCurrencies());
}

$(document).ready(function() {
  getCurrenciesList();
});