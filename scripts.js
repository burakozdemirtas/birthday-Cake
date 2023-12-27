function createCandle() {
  var candleCount = parseInt(
    document.getElementById("candleCount").value
  );
  var cake = document.querySelector(".cake");

  for (var i = 0; i < candleCount; i++) {
    // Her bir mum oluşturma işlemi için 200ms gecikme ekleyerek setTimeout kullanalım
    setTimeout(function() {
      var candle = document.createElement("div");
      var flame = document.createElement("div");
      candle.className = "candle";
      flame.className = "flame";
      candle.style.top = Math.random() * 9 + "%";
      candle.style.left = 25 + Math.random() * 360 + "px";
      flame.style.bottom = (i * 100) / (candleCount - 1) + "%";
      cake.appendChild(candle);
      candle.appendChild(flame);
    }, i * 50);  // Her bir mum için 200ms'lik bir gecikme ekleyerek teker teker oluşturalım
  }
}


function blowOutFlames(countToBlow) {
const candles = document.querySelectorAll(".candle");

for (let i = 0; i < countToBlow; i++) {
  for (let j = candles.length - 1; j >= 0; j--) {
      const candle = candles[j];
      const flames = candle.querySelectorAll(".flame");

      if (flames.length > 0) {
          const lastFlame = flames[flames.length - 1];
          lastFlame.remove(); // Alevi kaldır
          break; // Bu döngüden çık, bir mum kaldırıldı
      }
  }
}
}

navigator.mediaDevices.getUserMedia({ audio: true })
.then((stream) => {
  const audioContext = new AudioContext();
  const analyzer = audioContext.createAnalyser();
  const microphone = audioContext.createMediaStreamSource(stream);
  const scriptProcessor = audioContext.createScriptProcessor(2048, 1, 1);

  microphone.connect(analyzer);
  analyzer.connect(scriptProcessor);
  scriptProcessor.connect(audioContext.destination);

  const loudnessThreshold = 50;

  scriptProcessor.addEventListener("audioprocess", () => {
      const array = new Uint8Array(analyzer.frequencyBinCount);
      analyzer.getByteFrequencyData(array);

      let sum = 0;
      for (let i = 0; i < array.length; i++) {
          sum += array[i];
      }

      const average = sum / array.length;

      if (average > loudnessThreshold) {
          blowOutFlames(2); // Yüksek ses algılandığında 2 mumun alevini kaldır
      }
  });
})
.catch((error) => {
  console.error("Hata:", error);
});