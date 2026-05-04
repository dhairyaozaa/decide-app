window.DECIDE_API = 'https://quench-preteen-catalyze.ngrok-free.dev';

// Add ngrok bypass header to all fetch calls
const _origFetch = window.fetch;
window.fetch = function(url, opts = {}) {
  if (typeof url === 'string' && url.includes('ngrok')) {
    opts.headers = Object.assign({}, opts.headers, {
      'ngrok-skip-browser-warning': 'true'
    });
  }
  return _origFetch(url, opts);
};