// Elements
const btnTab1 = document.querySelector('.content-1');
const btnTab2 = document.querySelector('.content-2');
const btnTab3 = document.querySelector('.content-3');

const tab1 = document.querySelector('.tab-1');
const tab2 = document.querySelector('.tab-2');
const tab3 = document.querySelector('.tab-3');
// Functions
function showFirstTab() {
    btnTab1.classList.add('active');
    tab1.classList.remove('hidden');
}

function showSecondTab() {
    btnTab2.classList.add('active');
    tab2.classList.remove('hidden');
}

function showThirdTab() {
    btnTab3.classList.add('active');
    tab3.classList.remove('hidden');
}

function hideFirstTab() {
    btnTab1.classList.remove('active');
    tab1.classList.add('hidden');
}

function hideSecondTab() {
    btnTab2.classList.remove('active');
    tab2.classList.add('hidden');
}

function hideThirdTab() {
    btnTab3.classList.remove('active');
    tab3.classList.add('hidden');
}

// Event listeners
btnTab1.addEventListener('click', () => {
    showFirstTab();
    hideSecondTab();
    hideThirdTab();
});

btnTab2.addEventListener('click', () => {
    showSecondTab();
    hideFirstTab();
    hideThirdTab();
});

btnTab3.addEventListener('click', () => {
    showThirdTab();
    hideFirstTab();
    hideSecondTab();
});