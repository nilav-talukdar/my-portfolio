new Typewriter('#typing-effect', {
    strings: ['Frontend Developer', 'Backend Developer', 'Fullstack Developer'],
    autoStart: true,
    loop: true,
    delay: 50,
});
const cursor = document.querySelector('.Typewriter__cursor');

cursor.setAttribute('class', 'relative');