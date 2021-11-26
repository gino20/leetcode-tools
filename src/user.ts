enum identifier {
  LeetcodeTitle,
}
const elements = new Map([
  [
    identifier.LeetcodeTitle,
    () =>
      document
        .querySelector('#discuss-container')
        ?.querySelector("[class*='header']"),
  ],
]);

const tailwind = window.GM_getResourceText('tailwind');
window.GM_addStyle(tailwind);

new MutationObserver(callback).observe(document, {
  childList: true,
  subtree: true,
});

function callback(
  mutations: MutationRecord[],
  observer: MutationObserver
): void {
  if (elements.get(identifier.LeetcodeTitle)?.()) {
    main();
    observer.disconnect();
  }
}

function main() {
  addLinkButton();
}

function addLinkButton() {
  const el = elements.get(identifier.LeetcodeTitle)?.();

  const linkButton = document.createElement('a');
  linkButton.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" class="w-4 mr-1" viewBox="0 0 20 20" fill="currentColor">
  <path d="M11 3a1 1 0 100 2h2.586l-6.293 6.293a1 1 0 101.414 1.414L15 6.414V9a1 1 0 102 0V4a1 1 0 00-1-1h-5z" />
  <path d="M5 5a2 2 0 00-2 2v8a2 2 0 002 2h8a2 2 0 002-2v-3a1 1 0 10-2 0v3H5V7h3a1 1 0 000-2H5z" />
  </svg> leetcode-cn`;
  linkButton.className =
    'bg-yellow-600 hover:bg-yellow-500 text-white hover:text-white w-32 rounded-md flex whitespace-nowrap items-center justify-center';
  const url = new URL(window.location.href);
  url.hostname = 'leetcode-cn.com';
  linkButton.href = url.href;
  linkButton.target = '_blank';
  el?.append(linkButton);
}
