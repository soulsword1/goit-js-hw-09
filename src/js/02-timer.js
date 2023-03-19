import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';
import { Notify } from 'notiflix/build/notiflix-notify-aio';

const refs = {
  datePickerEl: document.querySelector('#datetime-picker'),
  startBtn: document.querySelector('button[data-start]'),
  daysSpanEL: document.querySelector('span[data-days]'),
  hoursSpanEL: document.querySelector('span[data-hours]'),
  minutesSpanEL: document.querySelector('span[data-minutes]'),
  secondsSpanEL: document.querySelector('span[data-seconds]'),
};

let startBtnActive = false;

refs.startBtn.addEventListener('click', startTimer);

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    const nowDate = new Date();
    const chosenDate = selectedDates[0];
    if (chosenDate < nowDate && !startBtnActive) {
      Notify.warning('Please choose a date in the future');
    } else if(startBtnActive){
      Notify.info('Reload the page to start a new timer');
    }else{
      Notify.success('The timer has been started');
      refs.startBtn.removeAttribute('disabled', '');
      refs.startBtn.addEventListener('click', startTimer(chosenDate), 1000);
    }
  },
};

flatpickr(refs.datePickerEl, options);

function startTimer(chosenDate) {
  if (!startBtnActive) {
    const timerId = setInterval(() => {
      startBtnActive = true;
      const diffMilliseconds =
        new Date(chosenDate).getTime() - new Date().getTime();

      if (diffMilliseconds >= 0) {
        const { days, hours, minutes, seconds } = convertMs(diffMilliseconds);
        refs.daysSpanEL.textContent = addLeadingZero(days);
        refs.hoursSpanEL.textContent = addLeadingZero(hours);
        refs.minutesSpanEL.textContent = addLeadingZero(minutes);
        refs.secondsSpanEL.textContent = addLeadingZero(seconds);
      } else {
        clearInterval(timerId);
        Notify.success('The time has come !');
      }
    }, 1000);
  }
}

function convertMs(ms) {
  // Number of milliseconds per unit of time
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  // Remaining days
  const days = Math.floor(ms / day);
  // Remaining hours
  const hours = Math.floor((ms % day) / hour);
  // Remaining minutes
  const minutes = Math.floor(((ms % day) % hour) / minute);
  // Remaining seconds
  const seconds = Math.floor((((ms % day) % hour) % minute) / second);

  return { days, hours, minutes, seconds };
}

function addLeadingZero(value) {
  return String(value).padStart(2, '0');
}
