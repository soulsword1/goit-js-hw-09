import { Notify } from 'notiflix/build/notiflix-notify-aio';

const formEl = document.querySelector('.form');

formEl.addEventListener('submit',operatingWithPromises)

function createPromise(position, delay) {
  const shouldResolve = Math.random() > 0.3;
  return new Promise( (resolve, reject) =>{
    setTimeout( () =>{
    if (shouldResolve) {
      resolve( Notify.success(`✅ Fulfilled promise ${position} in ${delay}ms`));
    } else {
      reject(Notify.failure(`❌ Rejected promise ${position} in ${delay}ms`));
    }
  }, delay)
})
}

function operatingWithPromises(event){
  let position = 1;
  event.preventDefault(); 
  let delay = Number(event.target.elements.delay.value);
  const step = Number(event.target.elements.step.value);
  const amount = Number(event.target.elements.amount.value);

    for( i = 0; i < amount; i += 1){
    createPromise(position, delay).then().catch();
    position += 1;
    delay += step;
  }
}
