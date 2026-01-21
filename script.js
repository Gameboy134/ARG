function openFolder(name) {
  const area = document.getElementById("file-area");
  const glitch = document.getElementById("glitch");
  const windowBox = document.getElementById("window");

  if (name === "music") {
    area.innerHTML = `
      <div class="file">🎵 track01.mp3</div>
      <div class="file" onclick="staticFile()">🎵 static.wav</div>
      <div class="file" onclick="goBack()">⬅ Back</div>
    `;
  }

  if (name === "video") {
    area.innerHTML = `
      <div class="file">📼 tape_1997.mp4</div>
      <div class="file" onclick="goBack()">⬅ Back</div>
    `;
  }

  if (name === "docs") {
    // 🔥 START GLITCH
    glitch.classList.add("flicker");
    windowBox.classList.add("glitching");
    area.innerHTML = `<p>LOADING...</p>`;

    setTimeout(() => {
      glitch.classList.remove("flicker");
      windowBox.classList.remove("glitching");

      area.innerHTML = `
        <div class="file" onclick="openLocked()">📄 classified_report.txt</div>
        <div class="file" onclick="goBack()">⬅ Back</div>
      `;
    }, 900);
  }
}

function staticFile() {
  alert("STATIC ANALYSIS COMPLETE\n\nPASSWORD HINT:\nOBSIDIAN");
}

function openLocked() {
  window.location.href = "access.html";
}

function goBack() {
  location.reload();
}
