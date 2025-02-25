const container = document.getElementById('container');
const displayContainer = document.getElementById('display');
const buttonsContainer = document.getElementById('buttons');

const btnArray = ['decrease', 'reset', 'increase'];

btnArray.map((nameBtn) => {
    const btn = document.createElement('button');
    btn.classList.add('btn');
    btn.textContent = nameBtn;

    btn.addEventListener('click', () => getControl(nameBtn));

    buttonsContainer.appendChild(btn);
});

displayContainer.textContent = '0';

function getControl(nameBtn) {
    let currentValue = Number(displayContainer.textContent);

    switch (nameBtn) {
        case 'decrease':
            if (displayContainer.textContent === '0') {
                return;
            } else {
                return (displayContainer.textContent = currentValue - 1);
            }
        case 'reset':
            return (displayContainer.textContent = '0');
        case 'increase':
            return (displayContainer.textContent = currentValue + 1);
    }
}
