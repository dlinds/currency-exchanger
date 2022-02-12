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



function getElements (response) {
  if (response.result) {
    const currencyTo = $("#currency-to").val();
    const inputFrom = parseFloat($("#input-from").val());
    for (const [countryCode, value] of Object.entries(response.conversion_rates)) {
      if (countryCode === currencyTo) {
        $("#convert-to-display").text(value * inputFrom + ` ${countryCode}`);
        $("#converted-desc").html(inputFrom);
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
    getElements(await CurrencyExchange.convert(from));
    $("#from-current-designation").html(from);
    $("#currency-ID").html(from);
    $("#converted-desc").append(` ${from}`);
    
  } else if ($("#input-from").val() === "") {
    $("#negative-error").slideDown(300);
    $("#negative-error").html("It seems you did not enter in a number. Please enter a number and try again");
  } else {
    $("#negative-error").slideDown(300);
    $("#negative-error").html("It seems you entered in a negative number. Please enter something greater than 0.");
  }
}

function getScrollElements (response) {
  if (response.result) {
    let scrollText = "";
    for (const [countryCode, value] of Object.entries(response.conversion_rates)) {
      scrollText += `${countryCode}: ${value} `;
    }
    $("#scroll-text").html(` ${scrollText} `);
  }
}

async function updateScroll() {
  getScrollElements(await CurrencyExchange.convert("USD"));
}



$(document).ready(function() {
  getCurrenciesList();
  updateScroll();
  
  $("#currency-from").change(function() {
    convert($("#currency-from").val());
  });
  $("#currency-to").change(function() {
    convert($("#currency-from").val());
  });
  $("#convert").click(function() {
    convert($("#currency-from").val());
  });
  $("#input-from").click(function(){
    $("#negative-error").slideUp(500);
    $("#input-from").attr("placeholder","");
  });
});