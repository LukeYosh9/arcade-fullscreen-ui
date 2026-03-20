// This file runs in the browser simulator, not on the micro:bit VM.

function applyFullscreenAndTransparentButtons() {
    // Wait for simulator DOM to exist
    setTimeout(() => {
        // Inject CSS
        const style = document.createElement("style");
        style.innerHTML = `
            .sim-controls,
            .sim-button,
            .sim-toolbar {
                opacity: 0 !important;
                pointer-events: none !important;
            }

            .sim-frame {
                background: transparent !important;
                box-shadow: none !important;
            }
        `;
        document.head.appendChild(style);

        // Try fullscreen
        const simFrame = document.querySelector(".sim-frame");
        if (simFrame && simFrame.requestFullscreen) {
            simFrame.requestFullscreen().catch(() => {});
        }
    }, 500);
}

// Run automatically when the simulator loads
applyFullscreenAndTransparentButtons();
