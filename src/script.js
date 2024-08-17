// Force light mode
if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
  document.documentElement.classList.add('force-light-mode');
  alert("turn off dark mode on your mobile")
  window.location.href = 'https://www.google.com/url?sa=t&source=web&rct=j&opi=89978449&url=https://www.youtube.com/watch%3Fv%3DUxs_GRhKnR8&ved=2ahUKEwjNhPOclfyHAxXjQUEAHdTEMVIQtwJ6BAgNEAI&usg=AOvVaw0BV7FF8XrQXqp-E5IaX3cY'
}
