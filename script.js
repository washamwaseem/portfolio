/* =========================================================
   WASHAM WASEEM — DIGITAL ARCHIVE
   MAIN JAVASCRIPT
========================================================= */


/* =========================================================
   DATA
========================================================= */

const pages = [

    /* =====================================================
       PAGE 1
    ===================================================== */

    {
        type: "cover",

        html: `
            <div class="page-number">01 / 07</div>

            <div class="cover-grid"></div>

            <div class="cover-title">

                <span class="page-label">
                    DIGITAL ARCHIVE // 001
                </span>

                <h1>
                    WASHAM<br>
                    <span class="highlight">WASEEM</span>
                </h1>

                <div class="cover-subtitle">
                    WRITER / DESIGNER / MARKETER / MAKER
                </div>

                <button
                    class="enter-button"
                    id="enterArchive"
                    type="button"
                >
                    OPEN THE ARCHIVE →
                </button>

            </div>
        `
    },


    /* =====================================================
       PAGE 2
    ===================================================== */

    {
        html: `
            <div class="page-number">02 / 07</div>

            <span class="page-label">
                FILE // WHOAMI
            </span>

            <div class="intro-layout">

                <div>

                    <h2>
                        I MAKE<br>
                        <span class="highlight">THINGS.</span>
                    </h2>

                    <p>
                        I am Washam Waseem, a writer, graphic designer,
                        marketer, storyteller and digital creative.
                    </p>

                    <p style="margin-top:18px;">
                        I use different creative skills to build things
                        that are not only visually interesting, but
                        actually mean something.
                    </p>

                    <div class="quote">
                        “Anyone can possess the skill of creating art.
                        Using it to create something meaningful is
                        where the impact begins.”
                    </div>

                </div>

                <div class="identity-card">

                    <div class="tiny">
                        NAME // WASHAM WASEEM
                    </div>

                    <div class="tiny">
                        LOCATION // LAHORE, PAKISTAN
                    </div>

                    <div class="tiny">
                        STATUS // STILL CREATING
                    </div>

                    <div class="tiny">
                        WRITING SINCE // 13
                    </div>

                    <div class="tiny">
                        FREELANCER // YES
                    </div>

                    <div class="tiny">
                        REMOTE WORK // YES
                    </div>

                    <div class="tiny">
                        CURRENT DEGREE // DIGITAL MEDIA
                    </div>

                </div>

            </div>
        `
    },


    /* =====================================================
       PAGE 3
    ===================================================== */

    {
        html: `
            <div class="page-number">03 / 07</div>

            <span class="page-label">
                FILE // WORDS
            </span>

            <h2>
                THE<br>
                <span class="pink">WRITER.</span>
            </h2>

            <p>
                I have been writing poetry since I was thirteen.
                Words became one of the first creative tools I learned
                to work with.
            </p>

            <p style="margin-top:18px;">
                I write poetry, blogs, scripts, research and content.
                Some of it is published. Some of it is simply mine.
            </p>

            <div class="big-statement">

                <span class="statement-line">
                    I mend
                </span>

                <span class="statement-line">
                    words
                </span>

                <span class="statement-line">
                    that hit hearts.
                </span>

            </div>

            <div class="project-grid">

                <a
                    class="project"
                    href="https://substack.com/@washamwaseem"
                    target="_blank"
                    rel="noopener"
                    style="text-decoration:none;"
                >

                    <h3>SUBSTACK</h3>

                    <p>
                        Occasional blogs, thoughts and pieces
                        written outside the brief.
                    </p>

                </a>

                <div class="project">

                    <h3>POETRY</h3>

                    <p>
                        Written since 13. Mostly personal.
                        Sometimes too honest.
                    </p>

                </div>

                <div class="project">

                    <h3>RESEARCH</h3>

                    <p>
                        Research writing, media studies and
                        published academic work.
                    </p>

                </div>

                <div class="project">

                    <h3>CONTENT</h3>

                    <p>
                        Blogs, captions, scripts and words
                        written for brands and people.
                    </p>

                </div>

            </div>
        `
    },


    /* =====================================================
       PAGE 4
    ===================================================== */

    {
        html: `
            <div class="page-number">04 / 07</div>

            <span class="page-label">
                FILE // VISUALS
            </span>

            <h2>
                THE<br>
                <span class="highlight">VISUAL</span>
                SIDE.
            </h2>

            <p>
                Later, I developed a sense for graphic design.
                Photoshop and Illustrator became part of the
                language I use to turn ideas into visuals.
            </p>

            <p style="margin-top:15px;">
                I also work with photography, videography,
                image manipulation and video editing.
            </p>

            <div
                class="camera-object"
                id="cameraObject"
                role="button"
                tabindex="0"
                aria-label="Open camera"
            >

                <div class="camera-flash"></div>

                <div class="camera-lens"></div>

                <div class="camera-label">
                    CLICK TO CAPTURE
                </div>

            </div>

            <div style="margin-top:25px;">

                <span class="muted">
                    SOFTWARE //
                </span>

                <span class="highlight">
                    PHOTOSHOP
                </span>

                <span class="muted">
                    /
                </span>

                <span class="highlight">
                    ILLUSTRATOR
                </span>

                <span class="muted">
                    /
                </span>

                <span class="pink">
                    PREMIERE PRO
                </span>

                <span class="muted">
                    /
                </span>

                <span class="pink">
                    CAPCUT
                </span>

            </div>
        `
    },


    /* =====================================================
       PAGE 5
    ===================================================== */

    {
        html: `
            <div class="page-number">05 / 07</div>

            <span class="page-label">
                FILE // MARKETING
            </span>

            <h2>
                I DON'T<br>
                JUST <span class="pink">SELL.</span>
            </h2>

            <div class="big-statement">

                <span class="statement-line">
                    Marketing is a bridge
                </span>

                <span class="statement-line">
                    between a brand
                </span>

                <span class="statement-line">
                    and its people.
                </span>

            </div>

            <p style="margin-top:25px;">
                Even if someone has no intention of buying,
                the brand should still remain somewhere in
                their mind.
            </p>

            <div class="project-grid">

                <div class="project">

                    <h3>RAKH</h3>

                    <p>
                        Marketing Head. Social media, campaign
                        ideas, shoots, graphic design, captions,
                        reels, posting, stories and creative
                        direction.
                    </p>

                </div>

                <div class="project">

                    <h3>JENZIE</h3>

                    <p>
                        Working on marketing and creative direction
                        for a growing clothing brand.
                    </p>

                </div>

                <div class="project">

                    <h3>CALL IT STUDIO</h3>

                    <p>
                        Event management, media team,
                        sponsorship and marketing work.
                    </p>

                </div>

                <div class="project">

                    <h3>MY APPROACH</h3>

                    <p>
                        I don't force my identity onto a brand.
                        I try to understand theirs and build
                        from that foundation.
                    </p>

                </div>

            </div>
        `
    },


    /* =====================================================
       PAGE 6
    ===================================================== */

    {
        html: `
            <div class="page-number">06 / 07</div>

            <span class="page-label">
                FILE // BUILDER
            </span>

            <h2>
                BETWEEN<br>
                <span class="green">ART</span>
                &amp;
                <span class="highlight">CODE.</span>
            </h2>

            <p>
                I studied ICS Physics before moving into Digital
                Media and Communication Technology at Government
                College University, Lahore.
            </p>

            <p style="margin-top:15px;">
                That combination eventually pushed me toward
                web development and interactive media.
            </p>

            <div class="terminal">

                <div>
                    <span class="dim">washam@archive:~$</span>
                    whoami
                </div>

                <div>
                    Washam Waseem
                </div>

                <div>
                    <span class="dim">washam@archive:~$</span>
                    skills
                </div>

                <div>
                    HTML / CSS / JAVASCRIPT
                </div>

                <div>
                    GRAPHIC DESIGN / MARKETING
                </div>

                <div>
                    WRITING / EDITING / MEDIA
                </div>

                <div>
                    PHOTOGRAPHY / VIDEOGRAPHY
                </div>

                <div>
                    <span class="dim">washam@archive:~$</span>
                    current_project
                </div>

                <div>
                    SUNO ZARA // WEB RADIO
                </div>

                <div>
                    <span class="dim">washam@archive:~$</span>
                    _
                    <span class="cursor-blink">█</span>
                </div>

            </div>

            <p style="margin-top:25px;">
                Languages:
                <span class="highlight">
                    English
                </span>
                /
                <span class="highlight">
                    Urdu
                </span>
                /
                <span class="highlight">
                    Punjabi
                </span>
            </p>

        `
    },


    /* =====================================================
       PAGE 7
    ===================================================== */

    {
        type: "final",

        html: `
            <div class="page-number">07 / 07</div>

            <div class="final-page">

                <span class="page-label">
                    END OF ARCHIVE // FOR NOW
                </span>

                <h1>
                    LET'S<br>
                    <span class="highlight">MAKE</span>
                    SOMETHING.
                </h1>

                <p style="margin-top:20px;">
                    Or write something.
                    Or build something.
                    Or make something people remember.
                </p>

                <div class="contact-grid">

                    <a
                        class="contact-link"
                        href="mailto:washamwaseem@gmail.com"
                    >
                        <small>EMAIL</small>
                        washamwaseem@gmail.com
                    </a>

                    <a
                        class="contact-link"
                        href="https://wa.me/923331689306?text=Hey%20Washam%2C%20I%20found%20my%20way%20through%20your%20digital%20universe.%20I%20think%20I%20have%20a%20project%20for%20you."
                        target="_blank"
                        rel="noopener"
                    >
                        <small>WHATSAPP</small>
                        +92 333 1689306
                    </a>

                    <a
                        class="contact-link"
                        href="https://substack.com/@washamwaseem"
                        target="_blank"
                        rel="noopener"
                    >
                        <small>WORDS</small>
                        READ MY SUBSTACK →
                    </a>

                    <button
                        class="contact-link restart"
                        id="restart"
                        type="button"
                    >
                        START THE ARCHIVE AGAIN ↻
                    </button>

                </div>

            </div>
        `
    }

];


/* =========================================================
   STATE
========================================================= */

let currentPage = 0;

let soundEnabled = true;

let audioContext = null;

let cameraStream = null;

let secretClicks = 0;


/* =========================================================
   DOM
========================================================= */

const pageElement =
    document.getElementById("page");

const previousButton =
    document.getElementById("previous");

const nextButton =
    document.getElementById("next");

const pageCounter =
    document.getElementById("pageCounter");

const pageDots =
    document.getElementById("pageDots");

const soundToggle =
    document.getElementById("soundToggle");

const cameraModal =
    document.getElementById("cameraModal");

const cameraVideo =
    document.getElementById("cameraVideo");

const cameraCanvas =
    document.getElementById("cameraCanvas");

const cameraMessage =
    document.getElementById("cameraMessage");

const capturedPhoto =
    document.getElementById("capturedPhoto");


/* =========================================================
   PAGE DOTS
========================================================= */

function createPageDots() {

    pageDots.innerHTML = "";

    pages.forEach((_, index) => {

        const dot =
            document.createElement("span");

        dot.className =
            "page-dot";

        dot.addEventListener(
            "click",
            () => goToPage(index)
        );

        pageDots.appendChild(dot);
    });
}


/* =========================================================
   RENDER PAGE
========================================================= */

function renderPage(animation = "next") {

    pageElement.classList.remove(
        "turn-next",
        "turn-prev"
    );

    void pageElement.offsetWidth;

    pageElement.classList.add(
        animation === "prev"
            ? "turn-prev"
            : "turn-next"
    );

    pageElement.innerHTML =
        pages[currentPage].html;

    pageCounter.textContent =
        String(currentPage + 1).padStart(2, "0")
        + " / "
        + String(pages.length).padStart(2, "0");

    updateDots();

    updateButtons();

    attachPageInteractions();

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
}


/* =========================================================
   DOTS
========================================================= */

function updateDots() {

    const dots =
        document.querySelectorAll(".page-dot");

    dots.forEach((dot, index) => {

        dot.classList.toggle(
            "active",
            index === currentPage
        );

    });
}


/* =========================================================
   BUTTONS
========================================================= */

function updateButtons() {

    previousButton.disabled =
        currentPage === 0;

    nextButton.disabled =
        currentPage === pages.length - 1;
}


/* =========================================================
   PAGE NAVIGATION
========================================================= */

function goToPage(index) {

    if (
        index < 0 ||
        index >= pages.length ||
        index === currentPage
    ) {
        return;
    }

    const direction =
        index > currentPage
            ? "next"
            : "prev";

    currentPage = index;

    playSound(
        direction === "next"
            ? "page"
            : "pageReverse"
    );

    renderPage(direction);
}


function nextPage() {

    if (currentPage < pages.length - 1) {

        currentPage++;

        playSound("page");

        renderPage("next");
    }
}


function previousPage() {

    if (currentPage > 0) {

        currentPage--;

        playSound("pageReverse");

        renderPage("prev");
    }
}


/* =========================================================
   NAVIGATION EVENTS
========================================================= */

nextButton.addEventListener(
    "click",
    nextPage
);

previousButton.addEventListener(
    "click",
    previousPage
);


/* =========================================================
   KEYBOARD NAVIGATION
========================================================= */

document.addEventListener(
    "keydown",
    event => {

        if (
            event.key === "ArrowRight" ||
            event.key === " "
        ) {

            event.preventDefault();

            nextPage();
        }

        if (event.key === "ArrowLeft") {

            event.preventDefault();

            previousPage();
        }

    }
);


/* =========================================================
   SOUND ENGINE
========================================================= */

function getAudioContext() {

    if (!audioContext) {

        audioContext =
            new (
                window.AudioContext ||
                window.webkitAudioContext
            )();
    }

    return audioContext;
}


function playSound(type) {

    if (!soundEnabled) {
        return;
    }

    try {

        const ctx =
            getAudioContext();

        if (ctx.state === "suspended") {
            ctx.resume();
        }

        const oscillator =
            ctx.createOscillator();

        const gain =
            ctx.createGain();

        oscillator.connect(gain);

        gain.connect(ctx.destination);

        const now =
            ctx.currentTime;

        if (type === "page") {

            oscillator.type = "triangle";

            oscillator.frequency.setValueAtTime(
                180,
                now
            );

            oscillator.frequency.exponentialRampToValueAtTime(
                90,
                now + 0.12
            );

            gain.gain.setValueAtTime(
                0.08,
                now
            );

            gain.gain.exponentialRampToValueAtTime(
                0.001,
                now + 0.18
            );

        }

        else if (type === "pageReverse") {

            oscillator.type = "triangle";

            oscillator.frequency.setValueAtTime(
                100,
                now
            );

            oscillator.frequency.exponentialRampToValueAtTime(
                180,
                now + 0.12
            );

            gain.gain.setValueAtTime(
                0.07,
                now
            );

            gain.gain.exponentialRampToValueAtTime(
                0.001,
                now + 0.18
            );

        }

        else if (type === "click") {

            oscillator.type = "square";

            oscillator.frequency.setValueAtTime(
                450,
                now
            );

            gain.gain.setValueAtTime(
                0.04,
                now
            );

            gain.gain.exponentialRampToValueAtTime(
                0.001,
                now + 0.06
            );

        }

        else if (type === "camera") {

            oscillator.type = "sine";

            oscillator.frequency.setValueAtTime(
                700,
                now
            );

            oscillator.frequency.exponentialRampToValueAtTime(
                120,
                now + 0.16
            );

            gain.gain.setValueAtTime(
                0.15,
                now
            );

            gain.gain.exponentialRampToValueAtTime(
                0.001,
                now + 0.2
            );
        }

        oscillator.start(now);

        oscillator.stop(
            now + 0.25
        );

    } catch (error) {

        console.log(
            "Audio unavailable."
        );
    }
}


/* =========================================================
   SOUND TOGGLE
========================================================= */

soundToggle.addEventListener(
    "click",
    () => {

        soundEnabled =
            !soundEnabled;

        soundToggle.textContent =
            soundEnabled
                ? "SOUND: ON"
                : "SOUND: OFF";

        soundToggle.classList.toggle(
            "active",
            soundEnabled
        );

        if (soundEnabled) {
            playSound("click");
        }
    }
);


/* =========================================================
   CURSOR GLITTER
========================================================= */

let lastParticleTime = 0;

document.addEventListener(
    "mousemove",
    event => {

        document.documentElement.style.setProperty(
            "--mouse-x",
            event.clientX + "px"
        );

        document.documentElement.style.setProperty(
            "--mouse-y",
            event.clientY + "px"
        );

        const now =
            Date.now();

        if (
            now - lastParticleTime < 35
        ) {
            return;
        }

        lastParticleTime = now;

        createSparkle(
            event.clientX,
            event.clientY
        );
    }
);


function createSparkle(x, y) {

    const sparkle =
        document.createElement("span");

    sparkle.className =
        "cursor-particle";

    const size =
        Math.random() * 4 + 2;

    sparkle.style.width =
        size + "px";

    sparkle.style.height =
        size + "px";

    sparkle.style.left =
        x + "px";

    sparkle.style.top =
        y + "px";

    const colors = [
        "#00f6ff",
        "#ff28c8",
        "#a7ff00",
        "#ffffff"
    ];

    sparkle.style.background =
        colors[
            Math.floor(
                Math.random() *
                colors.length
            )
        ];

    sparkle.style.setProperty(
        "--dx",
        ((Math.random() - 0.5) * 35) + "px"
    );

    sparkle.style.setProperty(
        "--dy",
        ((Math.random() - 0.5) * 35) + "px"
    );

    document.body.appendChild(
        sparkle
    );

    setTimeout(
        () => sparkle.remove(),
        900
    );
}


/* =========================================================
   TOUCH GLITTER
========================================================= */

document.addEventListener(
    "touchstart",
    event => {

        const touch =
            event.touches[0];

        if (!touch) {
            return;
        }

        for (
            let i = 0;
            i < 8;
            i++
        ) {

            createSparkle(
                touch.clientX,
                touch.clientY
            );
        }

    },
    {
        passive: true
    }
);


/* =========================================================
   BACKGROUND STARS
========================================================= */

function createBackgroundStars() {

    const container =
        document.getElementById(
            "particles"
        );

    for (
        let i = 0;
        i < 65;
        i++
    ) {

        const star =
            document.createElement("span");

        star.className =
            "background-star";

        star.style.left =
            Math.random() * 100 + "%";

        star.style.top =
            Math.random() * 100 + "%";

        star.style.animationDelay =
            Math.random() * 3 + "s";

        container.appendChild(star);
    }
}


/* =========================================================
   CAMERA
========================================================= */

async function openCamera() {

    cameraModal.classList.add(
        "active"
    );

    cameraModal.setAttribute(
        "aria-hidden",
        "false"
    );

    cameraMessage.textContent =
        "Requesting camera access...";

    try {

        if (
            !navigator.mediaDevices ||
            !navigator.mediaDevices.getUserMedia
        ) {

            throw new Error(
                "Camera unavailable"
            );
        }

        cameraStream =
            await navigator.mediaDevices.getUserMedia({
                video: {
                    facingMode: "user"
                },
                audio: false
            });

        cameraVideo.srcObject =
            cameraStream;

        cameraMessage.textContent =
            "Point. Click. Capture.";

    } catch (error) {

        cameraMessage.textContent =
            "Camera access was unavailable. The archive will create a digital snapshot instead.";

    }
}


function closeCameraModal() {

    if (cameraStream) {

        cameraStream
            .getTracks()
            .forEach(
                track => track.stop()
            );

        cameraStream = null;
    }

    cameraVideo.srcObject = null;

    cameraModal.classList.remove(
        "active"
    );

    cameraModal.setAttribute(
        "aria-hidden",
        "true"
    );
}


function takePhoto() {

    playSound("camera");

    document.body.classList.add(
        "camera-flash-active"
    );

    setTimeout(
        () => {
            document.body.classList.remove(
                "camera-flash-active"
            );
        },
        150
    );

    if (
        cameraStream &&
        cameraVideo.videoWidth
    ) {

        cameraCanvas.width =
            cameraVideo.videoWidth;

        cameraCanvas.height =
            cameraVideo.videoHeight;

        const context =
            cameraCanvas.getContext("2d");

        context.drawImage(
            cameraVideo,
            0,
            0,
            cameraCanvas.width,
            cameraCanvas.height
        );

        const image =
            document.createElement("img");

        image.src =
            cameraCanvas.toDataURL(
                "image/jpeg",
                0.88
            );

        capturedPhoto.innerHTML = "";

        capturedPhoto.appendChild(
            image
        );

        cameraMessage.textContent =
            "CAPTURED // ARCHIVED.";

    } else {

        capturedPhoto.innerHTML = `
            <div
                style="
                    padding:35px;
                    border:1px solid #00f6ff;
                    text-align:center;
                    color:#00f6ff;
                    font-family:monospace;
                "
            >
                DIGITAL SNAPSHOT // 001
                <br><br>
                <span style="color:#fff;">
                    WASHAM.WASEEM
                </span>
            </div>
        `;

        cameraMessage.textContent =
            "DIGITAL SNAPSHOT CREATED.";
    }
}


/* =========================================================
   PAGE INTERACTIONS
========================================================= */

function attachPageInteractions() {

    /* ---------- Enter Archive ---------- */

    const enterArchive =
        document.getElementById(
            "enterArchive"
        );

    if (enterArchive) {

        enterArchive.addEventListener(
            "click",
            () => {

                playSound("click");

                nextPage();

            }
        );
    }


    /* ---------- Camera ---------- */

    const cameraObject =
        document.getElementById(
            "cameraObject"
        );

    if (cameraObject) {

        cameraObject.addEventListener(
            "click",
            openCamera
        );

        cameraObject.addEventListener(
            "keydown",
            event => {

                if (
                    event.key === "Enter" ||
                    event.key === " "
                ) {

                    event.preventDefault();

                    openCamera();
                }
            }
        );
    }


    /* ---------- Restart ---------- */

    const restart =
        document.getElementById(
            "restart"
        );

    if (restart) {

        restart.addEventListener(
            "click",
            () => {

                playSound("click");

                currentPage = 0;

                renderPage("prev");

            }
        );
    }


    /* ---------- Secret Interaction ---------- */

    const page =
        document.getElementById(
            "page"
        );

    if (page) {

        page.addEventListener(
            "click",
            event => {

                if (
                    event.target.closest(
                        "a, button, .camera-object"
                    )
                ) {
                    return;
                }

                secretClicks++;

                if (
                    secretClicks >= 8
                ) {

                    secretClicks = 0;

                    document
                        .getElementById(
                            "secretMessage"
                        )
                        .classList.add(
                            "active"
                        );

                    playSound("click");
                }

            }
        );
    }

}


/* =========================================================
   CAMERA CONTROLS
========================================================= */

document
    .getElementById("closeCamera")
    .addEventListener(
        "click",
        closeCameraModal
    );

document
    .getElementById("takePhoto")
    .addEventListener(
        "click",
        takePhoto
    );

cameraModal.addEventListener(
    "click",
    event => {

        if (
            event.target === cameraModal
        ) {
            closeCameraModal();
        }

    }
);


/* =========================================================
   SECRET MESSAGE CONTROLS
========================================================= */

document
    .getElementById("closeSecret")
    .addEventListener(
        "click",
        () => {

            document
                .getElementById(
                    "secretMessage"
                )
                .classList.remove(
                    "active"
                );

        }
    );


/* =========================================================
   ESCAPE KEY
========================================================= */

document.addEventListener(
    "keydown",
    event => {

        if (event.key === "Escape") {

            closeCameraModal();

            document
                .getElementById(
                    "secretMessage"
                )
                .classList.remove(
                    "active"
                );
        }

    }
);


/* =========================================================
   CAMERA FLASH
========================================================= */

const flashStyle =
    document.createElement("style");

flashStyle.textContent = `
    body.camera-flash-active::before {
        content: "";
        position: fixed;
        inset: 0;
        background: white;
        z-index: 10000;
        pointer-events: none;
        animation: cameraFlash 0.15s ease-out forwards;
    }

    @keyframes cameraFlash {
        0% {
            opacity: 1;
        }

        100% {
            opacity: 0;
        }
    }
`;

document.head.appendChild(
    flashStyle
);


/* =========================================================
   INITIALIZE
========================================================= */

createBackgroundStars();

createPageDots();

renderPage("next");

soundToggle.classList.add(
    "active"
);
