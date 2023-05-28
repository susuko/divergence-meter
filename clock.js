setInterval(() => {
    const date = new Date();
    const hours = String(date.getHours()).padStart(2, '0');
    const minutes = String(date.getMinutes()).padStart(2, '0');
    const seconds = String(date.getSeconds()).padStart(2, '0');

    document.getElementById('hourTen').src = `digits/${hours[0]}.png`;
    document.getElementById('hourOne').src = `digits/${hours[1]}.png`;
    document.getElementById('minuteTen').src = `digits/${minutes[0]}.png`;
    document.getElementById('minuteOne').src = `digits/${minutes[1]}.png`;
    document.getElementById('secondTen').src = `digits/${seconds[0]}.png`;
    document.getElementById('secondOne').src = `digits/${seconds[1]}.png`;
}, 1000);

document.body.addEventListener('touchstart', () => {
    if (!document.fullscreenElement) {
        document.documentElement.requestFullscreen();
    }
});
