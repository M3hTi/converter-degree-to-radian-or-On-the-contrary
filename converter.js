// NOTE: Global error handler
window.addEventListener('error', (event) =>{
    event.preventDefault()
    console.log(`Custom error handler: Error in ${event.filename} at line ${event.lineno}: ${event.message}`);
    return true
})


// NOTE: Get DOM elements
const converterElement = document.querySelector('.converter')
const degreesInput = document.querySelector('#degrees')
const radiansInput = document.querySelector('#radians')
const errorElement = document.querySelector('#error')

const converter = (e) => {
    try {
        const target = e.target
        // console.dir(target);
        const inputs = Array.from(document.getElementsByTagName('input'))
        inputs.forEach(input => {
            if(target.id === "degrees"){
                const degrees = target.value
                const parseDegrees = parseFloat(degrees)
                if(parseDegrees < 0) throw "Please Enter Positive Degree"
                const radians = parseDegrees * (Math.PI / 180)
                radiansInput.value = radians.toFixed(3)
            }else if(target.id === 'radians'){
                const radians = target.value
                const parseRadians = parseFloat(radians)
                if(parseRadians < 0) throw "Please Enter Positive Radian"
                const degrees = parseRadians * (180 / Math.PI)
                degreesInput.value = degrees.toFixed(3)
            }
        });
        errorElement.textContent = '';
    } catch (error) {
        errorElement.innerHTML = error
    }
}





converterElement.addEventListener('input', converter)