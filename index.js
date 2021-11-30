document.addEventListener("DOMContentLoaded", () => {
    const game = document.querySelector("#game")

    const gameViewScale = 0.75
    const gameWidth = Math.floor(gameViewScale * (window.screen.availWidth));
    const gameHeight = Math.floor(gameViewScale * (window.screen.availHeight));

    game.setAttribute("style", `height: ${gameHeight}px; width: ${gameWidth}px`);
});