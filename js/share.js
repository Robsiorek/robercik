document.addEventListener('DOMContentLoaded', function () {
  const currentUrl = encodeURIComponent(window.location.href);
  const pageTitle = encodeURIComponent(document.title);

  document.getElementById('facebook-share').href = `https://facebook.com/sharer/sharer.php?u=${currentUrl}`;

  document.getElementById('twitter-share').href = `https://twitter.com/intent/tweet?url=${currentUrl}&text=${pageTitle}`;

  document.getElementById('linkedin-share').href = `https://www.linkedin.com/shareArticle?mini=true&url=${currentUrl}&title=${pageTitle}&summary=${pageTitle}&source=${currentUrl}`;
});
