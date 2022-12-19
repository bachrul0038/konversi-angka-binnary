let decInp = document.getElementById("dec-inp");
let binInp = document.getElementById("bin-inp");

// mengkonversi bilangan desimal
decInp.addEventListener("input", () => {
  let decValue = parseInt(decInp.value);
  binInp.value = decValue.toString(2);
});

// mengkonversi bilangan binarry
binInp.addEventListener("input", () => {
  let binValue = binInp.value;
  if (binValidator(binValue)) {
    decInp.value = parseInt(binValue, 2);
  }

  // mengecek bilangan num
  function binValidator(num) {
    for (let i = 0; i < num.length; i++) {
      if (num[i] != "0" && num[i] != "1") {
        return false;
      }
    }
    return true;
  }
});
