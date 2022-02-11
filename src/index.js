import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import CurrencyExchange from './js/currency.js';

function populateCurrencies(response) {
  if (response.result) {
    response.supported_codes.forEach(function(currency) {
      if (currency[0] === `USD`) {
        $("#currency-select").prepend(`<option value="${currency[0]}">${currency[1]}</option>`);
        $("#currency-to").prepend(`<option value="${currency[0]}">${currency[1]}</option>`);
      } else {
        $("#currency-select").append(`<option value="${currency[0]}">${currency[1]}</option>`);
        $("#currency-to").append(`<option value="${currency[0]}">${currency[1]}</option>`);
      }
    });
    $("#currency-select").val(`USD`);
    $("#currency-to").val(`USD`);
  } else {
    $("#input-row").html(`Uh oh! We seem to be having some errors getting the list of currencies: ${response}`);
  }
}

async function getCurrenciesList() {
  populateCurrencies(await CurrencyExchange.getGlobalCurrencies());
}



function convertCurrency (response) {
  if (response.result) {
    const currencyTo = $("#currency-to").val();
    const inputFrom = parseInt($("#input-from").val());
    for (const [key, value] of Object.entries(response.conversion_rates)) {
      if (key === currencyTo) {
        $("#convert-to-display").text(value * inputFrom + ` ${key}`);
      }
    }
  } else {
    $("#input-row").html(`Uh oh! We seem to be having some errors: ${response}`);
  }
}

async function convert(from) {
  convertCurrency(await CurrencyExchange.convert(from));
  $("#from-current-designation").html(from);
}



$(document).ready(function() {
  getCurrenciesList();
  
  $("#currency-select").change(function() {
    convert($("#currency-select").val());
  });
  $("#currency-to").change(function() {
    convert($("#currency-select").val());
  });
  $("#convert").click(function() {
    convert($("#currency-select").val());
  });
});