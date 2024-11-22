// script.js

function updateClock() {
    const hourElement = document.getElementById('hour');
    const minuteElement = document.getElementById('minute');
    const secondElement = document.getElementById('second');
    const digitalClockElement = document.getElementById('digital-time');

    const now = new Date();
    const hours = now.getHours();
    const minutes = now.getMinutes();
    const seconds = now.getSeconds();
    const milliseconds = now.getMilliseconds();

    // حساب الزوايا للعقارب
    const hourDeg = (360 / 12) * (hours % 12 + minutes / 60);
    const minuteDeg = (360 / 60) * minutes + (360 / 60 / 60) * seconds;
    const secondDeg = (360 / 60) * seconds;

    // تحريك العقارب
    hourElement.style.transform = `translate(-50%, -50%) rotate(${hourDeg}deg)`;
    minuteElement.style.transform = `translate(-50%, -50%) rotate(${minuteDeg}deg)`;
    secondElement.style.transform = `translate(-50%, -50%) rotate(${secondDeg}deg)`;

    // تحديث الساعة الرقمية
    const formattedTime = formatTime(hours, minutes, seconds, milliseconds);
    digitalClockElement.textContent = formattedTime;
}

// تنسيق الوقت لعرضه بشكل 00:00:00:000
function formatTime(hours, minutes, seconds, milliseconds) {
    return `${padZero(hours)}:${padZero(minutes)}:${padZero(seconds)}:${padZero(milliseconds, 3)}`;
}

function padZero(value, length = 2) {
    return String(value).padStart(length, '0');
}

setInterval(updateClock, 100); // التحديث كل 100 ميلي ثانية للحصول على دقة عالية
updateClock(); // التحديث الفوري عند تحميل الصفحة

