
    document.getElementById('increment').addEventListener('click', () => {
        document.getElementById('count').innerText++;
    });
    document.getElementById('decrement').addEventListener('click', () => {
        document.getElementById('count').innerText--;
    });
    document.getElementById('reset').addEventListener('click', () => {
        document.getElementById('count').innerText = 0;
    });