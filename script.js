// --- Ambient Sparkle System ---
const sparkleContainer = document.getElementById('sparkle-container');

setInterval(() => {
    const sparkle = document.createElement('div');
    sparkle.classList.add('sparkle');
    sparkle.style.left = Math.random() * 100 + 'vw';
    sparkle.style.animationDuration = (Math.random() * 2 + 3) + 's';
    sparkle.style.opacity = Math.random();
    sparkleContainer.appendChild(sparkle);
    
    // Cleanup nodes to prevent performance drops
    setTimeout(() => sparkle.remove(), 5000);
}, 150);

// --- Navigation Controller ---
function nextScene(sceneId) {
    document.querySelectorAll('.scene').forEach(s => s.classList.remove('active'));
    document.getElementById(`scene-${sceneId}`).classList.add('active');
    
    if (sceneId === 3) {
        startTypewriter();
    }
    if (sceneId === 4) {
        startHeartShower();
    }
}

// --- Scene 2 Meter Mechanic ---
let meterProgress = 0;

function chargeMeter() {
    if (meterProgress < 100) {
        meterProgress += 20;
        document.getElementById('friendship-bar').style.width = meterProgress + '%';
        document.getElementById('meter-text').innerText = `Energy: ${meterProgress}%`;
        
        if (meterProgress >= 100) {
            // Screen Flash Transition Effect
            const flash = document.getElementById('flash');
            flash.style.opacity = '1';
            flash.style.transition = 'none';
            
            setTimeout(() => {
                flash.style.transition = 'opacity 1s ease-in-out';
                flash.style.opacity = '0';
                nextScene(3);
            }, 100);
        }
    }
}

// --- Scene 3 Letter Text Data & Typewriter Engine ---
const letterLines = 
    "Hey...\n\n" +
    "Just wanted to say you're doing so much better than you think.\n\n" +
    "Even when A Levels feel totally overwhelming, your effort doesn't go unnoticed. Stop being so hard on yourself, okay? You deserve breaks. Believe in yourself a little more.\n\n" +
    "Someone is always cheering for you, even on the days you completely forget to cheer for yourself.\n\n" +
    "I wuv u sooo much, harida?\n" +
    "more than yk 🥺❤️\n" +
    "mwahh 🧸💗";

function startTypewriter() {
    const container = document.getElementById('typewriter-text');
    let i = 0;
    container.innerHTML = "";
    
    function type() {
        if (i < letterLines.length) {
            container.innerHTML += letterLines.charAt(i);
            i++;
            setTimeout(type, 35); // Lower to make it faster, increase to slow it down
        } else {
            document.getElementById('next-page-btn').style.display = 'inline-block';
        }
    }
    setTimeout(type, 500);
}

// --- Scene 4 Finale Heart Shower Engine ---
function startHeartShower() {
    const heartsArray = ['❤️', '💖', '🧸', '💗', '💘', '💚'];
    setInterval(() => {
        const heart = document.createElement('div');
        heart.classList.add('heart');
        heart.innerText = heartsArray[Math.floor(Math.random() * heartsArray.length)];
        heart.style.left = Math.random() * 100 + 'vw';
        heart.style.animationDuration = (Math.random() * 2 + 2) + 's';
        document.body.appendChild(heart);
        
        setTimeout(() => heart.remove(), 3000);
    }, 200);
}
