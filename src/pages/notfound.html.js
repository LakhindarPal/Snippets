export default function NotfoundPage() {
  return `<!DOCTYPE html>
  <html lang="en">

    <head>
      <meta charset="utf-8">
      <meta name="viewport" content="width=device-width, initial-scale=1">
      <title>Not Found | Snippets</title>
      <link rel="icon" href="/favicon.ico">
      <meta name="description"
        content="This snippet no longer exists. Snippets are automatically deleted when they reach their expiration date.">
      <meta property="og:title" content="Snippets - Share, Save, and Snag Your Ideas Anytime">
      <meta property="og:type" content="website">
      <meta property="og:description"
        content="This snippet no longer exists. Snippets are automatically deleted when they reach their expiration date.">
      <meta name="twitter:card" content="summary">
      <style>
        *,
        *::after,
        *::before {
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
          font-family: segoe ui, trebuchet MS, Lucida Sans Unicode, Lucida Sans,
            Sans-Serif;
          font-size: 1rem;
          text-align: center;
        }

        header a {
          color: inherit;
          text-decoration: none;
        }

        main {
          padding: 1rem;
        }

        header {
          display: flex;
          flex-wrap: wrap;
          gap: 0.5rem;
          align-items: center;
          justify-content: space-around;
          margin-block: 0.5rem;
          background-color: #4a90e2;
          color: #ffffff;
        }

        svg {
          width: 24px;
          fill: #ffffff;
          margin-inline: auto;
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
          <span>New</span></a>
      </header>

      <main>
        <h2>404 Snippet not found</h2>
        <p>This snippet no longer exists. Snippets are automatically deleted when they reach their expiration date.</p>
      </main>
    </body>

  </html>`;
}
