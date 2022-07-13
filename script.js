function main() {
    console.log("Started script.js");
}

function onHoverGitHubButton() {
    document.getElementById("github-logo-image").src = "./assets/GitHub-Mark-120px-plus.png";
}
function onNotHoverGitHubButton() {
    document.getElementById("github-logo-image").src = "./assets/GitHub-Mark-Light-120px-plus.png";
}
function onHoverDiscordButton() {
    document.getElementById("discord-logo-image").src = "./assets/Discord-Logo-Black.png";
}
function onNotHoverDiscordButton() {
    document.getElementById("discord-logo-image").src = "./assets/Discord-Logo-White.png";
}

main()