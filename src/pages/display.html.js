export default function DisplayPage({ title, code, slug, lexer, expiry }) {
  return `<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>${title} | Snippets ${lexer}</title>
    <link rel="icon" href="/favicon.ico">
    <meta property="og:title" content="${title} | Snippets ${lexer}">
    <meta property="og:type" content="website">
    <meta name="twitter:card" content="summary">

    <!-- Load Prism JS & CSS -->
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/prismjs@1.29.0/themes/prism-okaidia.min.css">
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/prismjs@1.29.0/plugins/line-numbers/prism-line-numbers.min.css">
    <script src="https://cdn.jsdelivr.net/npm/prismjs@1.29.0/components/prism-core.min.js"></script>
    <script src="https://cdn.jsdelivr.net/npm/prismjs@1.29.0/plugins/autoloader/prism-autoloader.min.js"></script>
    <script src="https://cdn.jsdelivr.net/npm/prismjs@1.29.0/plugins/line-numbers/prism-line-numbers.min.js"></script>

    <style>
      *, *::after, *::before {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
      }
      
      html {
        color-scheme: dark;
      }
      
      body {
        background-color: #252525;
        color: #dddddd;
        font-family: segoe ui, trebuchet MS, Lucida Sans Unicode, Lucida Sans, Sans-Serif;
        font-size: 1rem;
      }
      
      header a, .snippet-options a {
        color: inherit;
        text-decoration: none;
      }
      
      .snippet-options button {
        background: none;
        border: none;
        outline: none;
      }
      
      main {
        padding: 1rem;
      }
      
      header, .info-wrapper, .snippet-options {
        display: flex;
        flex-wrap: wrap;
        gap: 0.5rem;
        align-items: center;
        justify-content: space-around;
        margin-block: 0.5rem;
      }
      
      .info-wrapper {
        justify-content: space-between;
      }
      
      header {
        background-color: #4a90e2;
        color: #ffffff;
        margin-top: 0;
        padding-block: 0.5rem;
      }
      
      .snippet-options li {
        list-style: none;
        padding: 0.5rem;
        border-radius: 0.5rem;
      }
      
      .snippet-options span {
        display: block;
        margin-inline: auto;
      }
      
      svg {
        width: 24px;
        fill: #ffffff;
        margin-inline: auto;
      }
      
      pre, .snippet-options li:hover {
        border: 1px solid #4a90e2;
      }
      
      footer {
        text-align: center;
        font-size: small;
      }
    </style>
  </head>
  
  <body>
    <header>
      <h1><a href="/">Snippets</a></h1>
      <a href="/" id="create_new">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
          <path
            d="M256 80c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 144L48 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l144 0 0 144c0 17.7 14.3 32 32 32s32-14.3 32-32l0-144 144 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-144 0 0-144z" />
        </svg>
        <span>New</span>
      </a>
    </header>

    <main>
      <div class="info-wrapper">
        <h2 id="id_title">${title}</h2>
        <p>Expires in <span id="id_expiry">${expiry}</span></p>
      </div>

      <menu class="snippet-options">
        <li>
          <button id="btn_copy">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
              <path
                d="M208 0L332.1 0c12.7 0 24.9 5.1 33.9 14.1l67.9 67.9c9 9 14.1 21.2 14.1 33.9L448 336c0 26.5-21.5 48-48 48l-192 0c-26.5 0-48-21.5-48-48l0-288c0-26.5 21.5-48 48-48zM48 128l80 0 0 64-64 0 0 256 192 0 0-32 64 0 0 48c0 26.5-21.5 48-48 48L48 512c-26.5 0-48-21.5-48-48L0 176c0-26.5 21.5-48 48-48z" />
            </svg>
            <span>Copy</span>
          </button>
        </li>
        <li>
          <button id="btn_share">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
              <path
                d="M307 34.8c-11.5 5.1-19 16.6-19 29.2l0 64-112 0C78.8 128 0 206.8 0 304C0 417.3 81.5 467.9 100.2 478.1c2.5 1.4 5.3 1.9 8.1 1.9c10.9 0 19.7-8.9 19.7-19.7c0-7.5-4.3-14.4-9.8-19.5C108.8 431.9 96 414.4 96 384c0-53 43-96 96-96l96 0 0 64c0 12.6 7.4 24.1 19 29.2s25 3 34.4-5.4l160-144c6.7-6.1 10.6-14.7 10.6-23.8s-3.8-17.7-10.6-23.8l-160-144c-9.4-8.5-22.9-10.6-34.4-5.4z" />
            </svg>
            <span>Share</span>
          </button>
        </li>
        <li>
          <a href="/${slug}/fork">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
              <path
                d="M80 104a24 24 0 1 0 0-48 24 24 0 1 0 0 48zm80-24c0 32.8-19.7 61-48 73.3l0 38.7c0 17.7 14.3 32 32 32l160 0c17.7 0 32-14.3 32-32l0-38.7C307.7 141 288 112.8 288 80c0-44.2 35.8-80 80-80s80 35.8 80 80c0 32.8-19.7 61-48 73.3l0 38.7c0 53-43 96-96 96l-48 0 0 70.7c28.3 12.3 48 40.5 48 73.3c0 44.2-35.8 80-80 80s-80-35.8-80-80c0-32.8 19.7-61 48-73.3l0-70.7-48 0c-53 0-96-43-96-96l0-38.7C19.7 141 0 112.8 0 80C0 35.8 35.8 0 80 0s80 35.8 80 80z" />
            </svg>
            <span>Fork</span>
          </a>
        </li>
        <li>
          <a href="/${slug}/raw">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512">
                <path
                  d="M392.8 1.2c-17-4.9-34.7 5-39.6 22l-128 448c-4.9 17 5 34.7 22 39.6s34.7-5 39.6-22l128-448c4.9-17-5-34.7-22-39.6zm80.6 120.1c-12.5 12.5-12.5 32.8 0 45.3L562.7 256l-89.4 89.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l112-112c12.5-12.5 12.5-32.8 0-45.3l-112-112c-12.5-12.5-32.8-12.5-45.3 0zm-306.7 0c-12.5-12.5-32.8-12.5-45.3 0l-112 112c-12.5 12.5-12.5 32.8 0 45.3l112 112c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L77.3 256l89.4-89.4c12.5-12.5 12.5-32.8 0-45.3z" />
              </svg>
              <span>Raw</span>
          </a>
        </li>
        <li>
          <a href="/${slug}/dl">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                <path
                  d="M288 32c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 242.7-73.4-73.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l128 128c12.5 12.5 32.8 12.5 45.3 0l128-128c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L288 274.7 288 32zM64 352c-35.3 0-64 28.7-64 64l0 32c0 35.3 28.7 64 64 64l384 0c35.3 0 64-28.7 64-64l0-32c0-35.3-28.7-64-64-64l-101.5 0-45.3 45.3c-25 25-65.5 25-90.5 0L165.5 352 64 352zm368 56a24 24 0 1 1 0 48 24 24 0 1 1 0-48z" />
              </svg>
              <span>Save</span>
          </a>
        </li>
      </menu>

      <!-- Display the code -->
      <pre><code class="language-${lexer} line-numbers">${code}</code></pre>
    </main>

    <footer>
      Created by
      <a href="https://github.com/LakhindarPal/snippets" target="_blank" rel="noopener noreferrer">Lakhindar</a>
    </footer>

    <script>
      const expiryEl = document.querySelector("#id_expiry");
      expiryEl.textContent = new Date(Number(expiryEl.textContent)).toLocaleString(navigator.language, {
        month: "short",
        day: "numeric",
        hour: "numeric",
        minute: "numeric"
      });

      const content = document.querySelector("pre code").textContent;
      const copyBtn = document.querySelector("#btn_copy");
      const shareBtn = document.querySelector("#btn_share");

      copyBtn.addEventListener("click", async () => {
        try {
          await navigator.clipboard.writeText(content);
          alert("Content copied to clipboard");
        } catch (e) {
          console.error(e);
          alert("Failed to copy to clipboard.");
        }
      });

      shareBtn.addEventListener("click", async () => {
        const data = {
          title: document.title.split(" | Snippets ")[0],
          url: window.location.href,
        };
        if (!navigator.share || !navigator.canShare(data)) {
          return alert("Your device or browser doesn't support sharing.");
        }
        await navigator.share(data);
      });
    </script>
  </body>
</html>`;
}
