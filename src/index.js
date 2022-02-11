import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import CurrencyExchange from './js/currency.js';

function populateCurrencies(response) {
  if (response.result) {
    response.supported_codes.forEach(function(currency) {
      if (currency[0] === `USD`) {
        $("#currency-from").prepend(`<option value="${currency[0]}">${currency[1]}</option>`);
        $("#currency-to").prepend(`<option value="${currency[0]}">${currency[1]}</option>`);
      } else {
        $("#currency-from").append(`<option value="${currency[0]}">${currency[1]}</option>`);
        $("#currency-to").append(`<option value="${currency[0]}">${currency[1]}</option>`);
      }
    });
    $("#currency-from").val(`USD`);
    $("#currency-to").val(`USD`);
  } else {
    $("#input-row").html(`We seem to be getting a ${response} error when reaching out to the Exchange Rate API. Please confirm the API key is correct.`);
  }
}

async function getCurrenciesList() {
  populateCurrencies(await CurrencyExchange.getGlobalCurrencies());
}



function convertCurrency (response) {
  if (response.result) {
    const currencyTo = $("#currency-to").val();
    const inputFrom = parseFloat($("#input-from").val());
    for (const [key, value] of Object.entries(response.conversion_rates)) {
      if (key === currencyTo) {
        $("#convert-to-display").text(value * inputFrom + ` ${key}`);
      }
    }
  } else {
    if (response === "404") {
      $("#input-row").html(`Uh oh! We seem to be getting a ${response} error. This is likely because a currency was input that doesn't exist on the currency exchange.`);
    } else {
      $("#input-row").html(`Uh oh! We seem to be getting a ${response} error.`);
    }
  }
}

async function convert(from) {
  if (parseFloat($("#input-from").val()) > 0) {
    convertCurrency(await CurrencyExchange.convert(from));
    $("#from-current-designation").html(from);
  } else {
    $("#negative-error").html("it seems you entered in a negative number. Please enter something greater than 0!");
    $("#input-from").val("");
  }  
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