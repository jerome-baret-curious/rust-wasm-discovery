import { QRCode } from "premrust";

const qrPayload = document.getElementById("qr-payload");
const qrMode = document.getElementById("qr-modes");
const qrVersion = document.getElementById("qr-version");
const qrCorrectionLevel = document.getElementById("qr-correction-level");
const qrMask = document.getElementById("qr-mask");
const qrGenerateButton = document.getElementById("qr-generate");
const qrSvg = document.getElementById("qr-svg");
const qrcode = QRCode.new();

const qrGenerate = () => {
    qrSvg.innerHTML = "<circle cx='50' cy='50' r='40' stroke='green' stroke-width='4' fill='yellow' />";
};

qrGenerateButton.addEventListener("click", event => {
    qrGenerate();
});
