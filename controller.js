
// binary background function
document.addEventListener("DOMContentLoaded", function () {
    const canvas = document.getElementById("canvas"),
        ctx = canvas.getContext("2d");

    // Function to set canvas size dynamically
    function setCanvasSize() {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
    }

    // Initial setup
    setCanvasSize();

    // Update canvas size when the window is resized
    window.addEventListener('resize', setCanvasSize);

    let letters = '01';
    letters = letters.split('');

    const fontSize = 10,
        columns = Math.floor(canvas.width / fontSize);

    const drops = [];
    for (let i = 0; i < columns; i++) {
        drops[i] = 1;
    }

    function draw() {
        ctx.clearRect(0, 0, canvas.width, canvas.height); // Clear canvas before drawing
        ctx.fillStyle = "rgba(0, 0, 0, 0.1)";
        ctx.fillRect(0, 0, canvas.width, canvas.height);
        ctx.fillStyle = "#00a2ff";

        for (let i = 0; i < drops.length; i++) {
            const text = letters[Math.floor(Math.random() * letters.length)];
            ctx.fillText(text, i * fontSize, drops[i] * fontSize);
            drops[i]++;

            if (drops[i] * fontSize > canvas.height && Math.random() > 0.95) {
                drops[i] = 0;
            }
        }
    }

    setInterval(draw, 99);
});

