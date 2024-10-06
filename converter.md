# Degree to Radian Converter: Code Explanation

This document provides a step-by-step explanation of the JavaScript code for a degree to radian converter.

## Global Error Handler

```javascript
window.addEventListener('error', (event) => {
    event.preventDefault()
    console.log(`Custom error handler: Error in ${event.filename} at line ${event.lineno}: ${event.message}`);
    return true
})
```

This section sets up a global error handler for the window. It:
1. Prevents the default error handling behavior.
2. Logs custom error messages to the console, including the filename, line number, and error message.
3. Returns true to indicate that the error has been handled.

## DOM Element Selection

```javascript
const converterElement = document.querySelector('.converter')
const degreesInput = document.querySelector('#degrees')
const radiansInput = document.querySelector('#radians')
const errorElement = document.querySelector('#error')
```

Here, we select and store references to important DOM elements:
- `converterElement`: The main container for the converter.
- `degreesInput`: The input field for degrees.
- `radiansInput`: The input field for radians.
- `errorElement`: An element to display error messages.

## Converter Function

```javascript
const converter = (e) => {
    try {
        const target = e.target
        const inputs = Array.from(document.getElementsByTagName('input'))
        inputs.forEach(input => {
            if(target.id === "degrees"){
                // Conversion logic for degrees to radians
            }else if(target.id === 'radians'){
                // Conversion logic for radians to degrees
            }
        });
        errorElement.textContent = '';
    } catch (error) {
        errorElement.innerHTML = error
    }
}
```

This is the main conversion function:
1. It uses a try-catch block for error handling.
2. Gets the target input element that triggered the event.
3. Creates an array of all input elements.
4. Iterates through the inputs and performs the appropriate conversion based on which input was changed.
5. Clears any previous error messages if the conversion is successful.
6. If an error occurs, it displays the error message in the `errorElement`.

### Degrees to Radians Conversion

```javascript
if(target.id === "degrees"){
    const degrees = target.value
    const parseDegrees = parseFloat(degrees)
    if(parseDegrees < 0) throw "Please Enter Positive Degree"
    const radians = parseDegrees * (Math.PI / 180)
    radiansInput.value = radians.toFixed(3)
}
```

This section:
1. Gets the value from the degrees input.
2. Parses it to a float.
3. Throws an error if the value is negative.
4. Calculates the equivalent in radians.
5. Sets the value of the radians input, rounded to 3 decimal places.

### Radians to Degrees Conversion

```javascript
else if(target.id === 'radians'){
    const radians = target.value
    const parseRadians = parseFloat(radians)
    if(parseRadians < 0) throw "Please Enter Positive Radian"
    const degrees = parseRadians * (180 / Math.PI)
    degreesInput.value = degrees.toFixed(3)
}
```

This section performs similar steps but for converting radians to degrees.

## Event Listener

```javascript
converterElement.addEventListener('input', converter)
```

This line adds an event listener to the converter container. It listens for 'input' events, which occur whenever the user types or modifies the input fields. When such an event occurs, it calls the `converter` function.

## Summary

This code creates a real-time converter between degrees and radians. It updates as the user types, handles errors (including negative inputs), and provides a global error handler for unexpected issues. The conversion uses JavaScript's Math.PI for accurate calculations.