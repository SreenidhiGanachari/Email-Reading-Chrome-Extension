const button = document.querySelector('button');
button.addEventListener('click', event => {
  chrome.permissions.request({
    origins: ["https://mail.google.com/"]
  });
});