const container = document.querySelector('.container');
const text = document.querySelector('#text');

const totalTime = 7500;
const stageOne = totalTime / 5 * 2;
const stageTwo = totalTime / 5;

let breathAnimation = () =>{
    text.innerHTML = 'شهيق';
    container.classList.add('container','grow');
    container.classList.remove('shrink')
    setTimeout(() =>{
        text.innerText = 'أحبس';
        setTimeout(() => {
            text.innerText = 'زفير';
            container.classList.add('shrink');
            container.classList.remove('grow');
        }, stageTwo);
    },stageOne);
}
breathAnimation();
setInterval(breathAnimation, totalTime);
