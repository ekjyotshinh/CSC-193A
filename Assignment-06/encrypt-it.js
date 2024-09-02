/*
 * Starter file
 * We use this anonymous function to create a private namespace for our code,
 * so that we don't expose our variables to the global scope.
 * This is a good practice to follow, even if you don't have any variables.
 */
(function() {
  "use strict";

  /**
   * The starting point in our program, setting up a listener
   * for the "load" event on the window, signalling the HTML DOM has been constructed
   * on the page. When this event occurs, the attached function (init) will be called.
   */
  window.addEventListener("load", init);

  /**
   * This function sets up the event listeners for the Encrypt and Reset buttons.
   */
  function init() {
    console.log("Window loaded!");
    document.getElementById("encrypt-it").addEventListener("click", handleClick);
    document.getElementById("reset").addEventListener("click", handleReset);
  }

  /**
   * This function handles the click event on the "Encrypt It!" button.
   * It retrieves the input text, applies the shift cipher, and displays the result.
   */
  function handleClick() {
    console.log("Button clicked!");
    let inputText = document.getElementById("input-text").value;
    let encryptedText = shiftCipher(inputText);
    document.getElementById("result").textContent = encryptedText;
  }

  /**
   * This function handles the click event on the "Reset" button.
   * It clears the text area and the result display.
   */
  function handleReset() {
    document.getElementById("input-text").value = "";
    document.getElementById("result").textContent = "";
  }

  /**
   * Returns an encrypted version of the given text, where
   * each letter is shifted alphabetically ahead by 1 letter,
   * and 'z' is shifted to 'a' (creating an alphabetical cycle).
   */
  function shiftCipher(text) {
    text = text.toLowerCase();
    let result = "";
    for (let i = 0; i < text.length; i++) {
      if (text[i] < 'a' || text[i] > 'z') {
        result += text[i];
      } else if (text[i] == 'z') {
        result += 'a';
      } else { // letter is between 'a' and 'y'
        let letter = text.charCodeAt(i);
        let resultLetter = String.fromCharCode(letter + 1);
        result += resultLetter;
      }
    }
    return result;
  }
})();
