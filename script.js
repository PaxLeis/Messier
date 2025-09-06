document.addEventListener('DOMContentLoaded', () => {
  // Update time every second
  function updateTime() {
      const now = new Date();
      const hours = now.getHours().toString().padStart(2,'0');
      const minutes = now.getMinutes().toString().padStart(2,'0');
      document.getElementById('time').textContent = `${hours}:${minutes}`;
  }

  // Update battery info
  function updateBattery() {
      if (navigator.getBattery) {
          navigator.getBattery().then(battery => {
              const level = Math.round(battery.level * 100);
              document.getElementById('battery').textContent = `Battery: ${level}%`;
          });
      } else {
          document.getElementById('battery').textContent = `Battery info not available`;
      }
  }

  // Handle popup show/hide
  const shortcutBtn = document.getElementById('shortcutBtn');
  const popupOverlay = document.getElementById('linkPopup');
  const closePopupBtn = document.getElementById('closePopup');
  const linksContainer = document.getElementById('linksContainer');

  const links = [
      { name: "Infinite Campus", url: "https://campus.crprairie.org/campus/nav-wrapper/student/portal/student/home?appName=collegecommunity" },
      { name: "Classroom", url: "https://classroom.google.com/" },
      // Add more links here
  ];

  shortcutBtn.addEventListener('click', () => {
      loadLinks();
      popupOverlay.style.display = 'flex';
  });

  closePopupBtn.addEventListener('click', () => {
      popupOverlay.style.display = 'none';
  });

  function loadLinks() {
      linksContainer.innerHTML = '';
      links.forEach(link => {
          const div = document.createElement('div');
          div.className = 'link-item';
          div.innerHTML = `<a href="${link.url}" target="_blank">${link.name}</a>`;
          linksContainer.appendChild(div);
      });
  }

  // Google Products button
  const googleProductsBtn = document.getElementById('googleProductsBtn');
  googleProductsBtn.addEventListener('click', () => {
      const googleLinks = [
        { name: "Gmail", url: "https://mail.google.com" },
        { name: "Google Drive", url: "https://drive.google.com" },
        { name: "Docs", url: "https://docs.google.com/document/u/0/" },
        { name: "Presentation", url: "https://docs.google.com/presentation/u/0/" }
      ];
      loadCustomLinks(googleLinks);
      popupOverlay.style.display = 'flex';
  });

  function loadCustomLinks(linksArray) {
      linksContainer.innerHTML = '';
      linksArray.forEach(link => {
          const div = document.createElement('div');
          div.className = 'link-item';
          div.innerHTML = `<a href="${link.url}" target="_blank">${link.name}</a>`;
          linksContainer.appendChild(div);
      });
  }

  // Bing button - open Bing in a new small window
const bingBtn = document.getElementById('bingBtn');
bingBtn.addEventListener('click', () => {
    window.open(
        "https://www.bing.com",
        "BingWindow",
        "width=1000,height=700,top=100,left=100,resizable=yes,scrollbars=yes"
    );
});
    const deepaiBtn = document.getElementById('deepaiBtn');

deepaiBtn.addEventListener('click', () => {
    window.open(
        "https://deepai.org/chat",
        "DeepAIWindow",
        "width=1000,height=700,top=100,left=100,resizable=yes,scrollbars=yes"
    );
});


  function updateTime() {
  const now = new Date();
  let hours = now.getHours();
  const minutes = now.getMinutes();
  const seconds = now.getSeconds();

  const amPm = hours >= 12 ? 'PM' : 'AM';
  hours = hours % 12;
  hours = hours ? hours : 12; // convert hour '0' to '12'

  const formattedTime = 
    `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')} ${amPm}`;

  document.getElementById('time').textContent = formattedTime;
}

// Update every second
setInterval(updateTime, 1000);

// Initialize immediately
updateTime();
  updateBattery();
});
