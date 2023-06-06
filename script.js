/* 
 * CLICK ROBOT TO SPEAK
 * Change text in message.text
 * variable to alter robot message
 *
 * CONFIG.DEFAULT: false, will override
 * system default voice
 */

 const CONFIG = {
    DEFAULT: false,
    VOICE: 'Fred',
};

const robot = document.querySelector('.robot');

let message = new SpeechSynthesisUtterance();

message.text = `Well, there many programming languages used for robotics like C, C++, JAVA, FORTRAN, PYTHON etc. while C and C++ are the most commonly used programming languages and Java is used for high-level programming, and Arduino programming is a must for robotics, in order to work smart, one can start off by learning python.

Python is a very popular language to use due to the following reasons:Due to its learning ease and support availability
Due to its productivity and speed
User-friendly data structures
Popular use in machine learning
Presence of third-party modules
Extensive support libraries `;

let voices = [];


speechSynthesis.addEventListener('voiceschanged', event => {
    voices = speechSynthesis.getVoices();
    if (!CONFIG.DEFAULT) {
        message.voice = voices.find(voice => voice.name === CONFIG.VOICE);
    }
});

message.onend = function(event) {
    robot.classList.remove('robot_speaking');
}

robot.addEventListener('click', event => {
    if (speechSynthesis.speaking) {
        robot.classList.remove('robot_speaking');
        speechSynthesis.cancel();
    } else {
        robot.classList.add('robot_speaking');
        speechSynthesis.speak(message);
    }
});