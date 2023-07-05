function appendChar(char) {
  document.getElementById('result').value += char;
}

function clearResult() {
  document.getElementById('result').value = '';
}

function deleteLastChar() {
  const result = document.getElementById('result');
  result.value = result.value.slice(0, -1);
}

function calculateResult() {
  const result = document.getElementById('result');
  const expression = result.value;

  try {
    const calculatedResult = eval(expression);
    result.value = calculatedResult;
  } catch (error) {
    result.value = 'Error';
  }
}

function calculateSquareRoot() {
  const result = document.getElementById('result');
  const number = parseFloat(result.value);

  if (!isNaN(number)) {
    const squareRoot = Math.sqrt(number);
    result.value = squareRoot;
  }
}

function calculateExponentiation() {
  const result = document.getElementById('result');
  const expression = result.value;

  try {
    const evaluatedExpression = eval(expression);
    const exponentiation = Math.pow(evaluatedExpression, 2);
    result.value = exponentiation;
  } catch (error) {
    result.value = 'Error';
  }
}

function calculateLogarithm() {
  const result = document.getElementById('result');
  const number = parseFloat(result.value);

  if (!isNaN(number) && number > 0) {
    const logarithm = Math.log10(number);
    result.value = logarithm;
  } else {
    result.value = 'Error';
  }
}

function calculateSine() {
  const result = document.getElementById('result');
  const number = parseFloat(result.value);
  const radians = number * (Math.PI / 180);

  if (!isNaN(number)) {
    const sine = Math.sin(radians);
    result.value = sine;
  }
}

function calculateCosine() {
  const result = document.getElementById('result');
  const number = parseFloat(result.value);
  const radians = number * (Math.PI / 180);

  if (!isNaN(number)) {
    const cosine = Math.cos(radians);
    result.value = cosine;
  }
}

function calculateTangent() {
  const result = document.getElementById('result');
  const number = parseFloat(result.value);
  const radians = number * (Math.PI / 180);

  if (!isNaN(number)) {
    const tangent = Math.tan(radians);
    result.value = tangent;
  }
}
