import QuakesController from "./quakesController.js";



const controller = new QuakesController('#quakeList');
controller.init(100)

window.onUpdateQuakes = () => {
    const inputElement = document.getElementById('radiusInput')
    console.log(inputElement.value)
    controller.init(inputElement.value)
}