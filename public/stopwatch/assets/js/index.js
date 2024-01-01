/**
 * Global variable
 */
let timeCount = 0;
let isRunning = false;
let timerID = 0;
const msClass = 'stopwatch__ms';
const elmCount = document.querySelector('#js-count');
const elmStart = document.querySelector('#js-start');
const elmReset = document.querySelector('#js-reset');
/**
 * Event handler
 */
// Page load
const onPageLoad = () => {
    updateView();
};
// Start timer
const onStart = () => {
    isRunning === false ? startTimer() : stopTimer();
};
// Reset timer
const onReset = () => {
    stopTimer();
    resetCount();
    updateView();
};
/**
 * Event listener
 */
// Page load
window.addEventListener('load', onPageLoad);
// Click start
elmStart.addEventListener('click', onStart);
// Click reset
elmReset.addEventListener('click', onReset);
/**
 * Initialize App
 */
function updateView() {
    // limit 59:59:99
    if (timeCount > 60 * 60 * 1000 - 1) {
        timeCount = 60 * 60 * 1000 - 1;
    }
    // Elapsed time minutes
    const mm = Math.floor(timeCount / 1000 / 60).toString().padStart(2, '0');
    // Elapsed time seconds
    const ss = Math.floor(timeCount / 1000 % 60).toString().padStart(2, '0');
    // Elapsed time milliseconds
    const ms = (timeCount % 1000).toString().padStart(3, '0').slice(0, 2);
    // String to display
    const count = `${mm}:${ss}<span class="${msClass}">${ms}</span>`;
    // Update HTML
    elmCount.innerHTML = count;
}
/**
 * Start timer and change flag
 */
function startTimer() {
    timerID = setInterval(() => {
        timeCount += 10;
        updateView();
    }, 10);
    isRunning = true;
}
/**
 * Clear timer and change flag
 */
function stopTimer() {
    clearInterval(timerID);
    isRunning = false;
}
/**
 * Reset count
 */
function resetCount() {
    timeCount = 0;
}
