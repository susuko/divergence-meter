setInterval(() => {
    const date = new Date();
    updateDigits('y', String(date.getFullYear()).slice(-2).padStart(2, '0'));
    updateDigits('M', String(date.getMonth() + 1).padStart(2, '0'));
    updateDigits('d', String(date.getDate()).padStart(2, '0'));
    updateDigits('H', String(date.getHours()).padStart(2, '0'));
    updateDigits('m', String(date.getMinutes()).padStart(2, '0'));
    updateDigits('s', String(date.getSeconds()).padStart(2, '0'));
}, 1000);

const updateDigits = (baseElementId, digits) => {
    updateDigit(baseElementId + '_', digits[0]);
    updateDigit('_' + baseElementId, digits[1]);
};

const updateDigit = (elementId, digit) =>
    document.getElementById(elementId).src = `digits/${digit}.png`;

document.body.addEventListener('touchstart', () => document.documentElement.requestFullscreen());
