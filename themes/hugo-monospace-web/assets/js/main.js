function loadOptionalCookiesHandle() {
  let googleTag = document.createElement("script");
  googleTag.setAttribute("src", "https://www.googletagmanager.com/gtag/js?id=G-KSD8F60PFD");

  let googleTagScript = document.createElement("script");
  googleTagScript.innerText = "function gtag(){dataLayer.push(arguments)}window.dataLayer=window.dataLayer||[],gtag('consent','default',{ad_storage:'granted',ad_user_data:'granted',ad_personalization:'granted',analytics_storage:'granted'}),gtag('js',new Date),gtag('config','G-P25726Q4PG');"

  document.head.appendChild(googleTag);
  document.head.appendChild(googleTagScript);
}

document.addEventListener("DOMContentLoaded", function () {
  const cookieConsentGiven = localStorage.getItem("cookie-consent");
  if (cookieConsentGiven) {
      document.getElementById('cookie-form').style.display = "none";
  }

  document.getElementById("accept-cookie-button").addEventListener("click", function () {
      localStorage.setItem("cookie-consent", "accepted");
      document.getElementById('cookie-form').style.display = "none";
      loadOptionalCookiesHandle();
  });

  document.getElementById("reject-cookie-button").addEventListener("click", function () {
      localStorage.setItem("cookie-consent", "rejected");
      document.getElementById('cookie-form').style.display = "none";
  });

  if (cookieConsentGiven === "accepted") {
      loadOptionalCookiesHandle();
  }
});