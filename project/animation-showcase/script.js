document.addEventListener('DOMContentLoaded', () => {
    // ...existing code...

    // Letter Fade Animation
    const letterFadeElement = document.querySelector('.letter-fade');
    const letterFadeText = letterFadeElement.textContent;
    letterFadeElement.textContent = '';
    
    for (let i = 0; i < letterFadeText.length; i++) {
        const span = document.createElement('span');
        span.textContent = letterFadeText[i] === ' ' ? '\u00A0' : letterFadeText[i];
        span.style.animationDelay = `${i * 0.1}s`;
        letterFadeElement.appendChild(span);
    }

    // Text Wave Animation
    const waveElement = document.querySelector('.text-wave');
    const waveText = waveElement.textContent;
    waveElement.textContent = '';
    
    for (let i = 0; i < waveText.length; i++) {
        const span = document.createElement('span');
        span.textContent = waveText[i] === ' ' ? '\u00A0' : waveText[i];
        span.style.animationDelay = `${i * 0.1}s`;
        waveElement.appendChild(span);
    }

    // 3D Flip Animation
    const flipElement = document.querySelector('.text-3d-flip');
    const flipText = flipElement.textContent;
    flipElement.textContent = '';
    
    for (let i = 0; i < flipText.length; i++) {
        const span = document.createElement('span');
        span.textContent = flipText[i] === ' ' ? '\u00A0' : flipText[i];
        span.style.animationDelay = `${i * 0.2}s`;
        flipElement.appendChild(span);
    }

    // Text Scramble Effect
    class TextScramble {
        constructor(el) {
            this.el = el;
            this.chars = '!<>-_\\/[]{}—=+*^?#________';
            this.update = this.update.bind(this);
        }
        
        setText(newText) {
            const oldText = this.el.innerText;
            const length = Math.max(oldText.length, newText.length);
            const promise = new Promise(resolve => this.resolve = resolve);
            this.queue = [];
            
            for (let i = 0; i < length; i++) {
                const from = oldText[i] || '';
                const to = newText[i] || '';
                const start = Math.floor(Math.random() * 40);
                const end = start + Math.floor(Math.random() * 40);
                this.queue.push({ from, to, start, end });
            }
            
            cancelAnimationFrame(this.frameRequest);
            this.frame = 0;
            this.update();
            return promise;
        }
        
        update() {
            let output = '';
            let complete = 0;
            
            for (let i = 0; i < this.queue.length; i++) {
                let { from, to, start, end, char } = this.queue[i];
                
                if (this.frame >= end) {
                    complete++;
                    output += to;
                } else if (this.frame >= start) {
                    if (!char || Math.random() < 0.28) {
                        char = this.randomChar();
                        this.queue[i].char = char;
                    }
                    output += `<span class="dud">${char}</span>`;
                } else {
                    output += from;
                }
            }
            
            this.el.innerHTML = output;
            
            if (complete === this.queue.length) {
                this.resolve();
            } else {
                this.frameRequest = requestAnimationFrame(this.update);
                this.frame++;
            }
        }
        
        randomChar() {
            return this.chars[Math.floor(Math.random() * this.chars.length)];
        }
    }
    
    const phrases = [
        'Text Scramble Effect',
        'Randomizing Characters',
        'Morphing Text Animation',
        'Cool Typography Effect'
    ];
    
    const el = document.getElementById('text-scramble');
    const fx = new TextScramble(el);
    
    let counter = 0;
    const next = () => {
        fx.setText(phrases[counter]).then(() => {
            setTimeout(next, 2000);
        });
        counter = (counter + 1) % phrases.length;
    };
    
    next();

    // ...existing code...
});
