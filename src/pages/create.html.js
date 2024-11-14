export default function CreatePage({ title, code, lexer }) {
  return `<!DOCTYPE html>
<html lang="en">

  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>Snippets - Share, Save, and Snag Your Ideas Anytime</title>
    <link rel="icon" href="/favicon.ico">
    <meta name="description"
      content="Transform the way you share and store ideas with Snippets. Whether it's code, notes, or quick thoughts, create, manage, and collaborate securely with syntax highlighting, easy organization, and seamless access wherever you go.">
    <meta property="og:title" content="Snippets - Share, Save, and Snag Your Ideas Anytime">
    <meta property="og:type" content="website">
    <meta property="og:description"
      content="Transform the way you share and store ideas with Snippets. Whether it's code, notes, or quick thoughts, create, manage, and collaborate securely with syntax highlighting, easy organization, and seamless access wherever you go.">
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
        font-family: segoe ui, trebuchet MS, Lucida Sans Unicode, Lucida Sans, Sans-Serif;
        font-size: 1rem;
        text-align: center;
      }

      header {
        background-color: #4a90e2;
        color: #ffffff;
        padding-block: 0.5rem;
      }

      h1 a {
        color: inherit;
        text-decoration: none;
      }

      main {
        padding: 1rem;
      }

      input,
      textarea,
      select,
      button {
        font: inherit;
        cursor: pointer;
        padding: 5px 7px;
        border-radius: 4px;
      }

      label {
        font-weight: 500;
        margin-right: 0.25rem;
      }

      .form-title {
        margin-bottom: 0.5rem;
      }

      .form-title input {
        width: 80%;
      }

      .form-options {
        display: flex;
        justify-content: space-around;
        flex-wrap: wrap;
        gap: 0.5rem;
        margin-bottom: 0.5rem;
      }

      #id_code {
        font-family: "SF Mono", "Fira Mono", Monaco, Menlo, Consolas, monospace;
        font-size: 12px;
        line-height: 17px;
        box-sizing: border-box;
        width: 100%;
        min-height: 60vh;
        margin-block: 0.5rem;
        padding: 0.5rem;
      }

      .form-action {
        display: flex;
        flex-wrap: wrap;
        gap: 0.5rem;
      }

      #btn_save,
      #btn_reset {
        color: #fff;
        min-width: 30%;
        margin-inline: auto;
        border-radius: 3px;
        font-weight: 600;
        margin-block: 0.5rem;
        transition: background-color 0.2s ease-in;
      }

      #btn_save {
        background-color: #4a90e2;
      }

      #btn_reset {
        background-color: #ff4d4d;
      }

      #btn_save:hover {
        background-color: #33639c;
      }

      #btn_reset:hover {
        background-color: #e60000;
      }

      footer {
        font-size: small;
      }
    </style>
  </head>

  <body>
    <header>
      <h1><a href="/">Snippets</a></h1>
    </header>

    <main>
      <form method="POST" action="/create" class="snippet-form">
        <div class="form-title">
          <label for="id_title">Title</label>
          <input
            type="text"
            name="title"
            id="id_title"
            ${title ? `value="${title}"` : ""}
            autocomplete="off"
            placeholder="Snippet Title"
            required
          >
        </div>

        <div class="form-options">
          <div class="form-lexer">
            <label for="id_lexer">Syntax</label>
            <select name="lexer" id="id_lexer" required>
              <option value="ada" ${lexer === "ada" ? "selected" : ""}>Ada</option>
              <option value="apex" ${lexer === "apex" ? "selected" : ""}>Apex</option>
              <option value="applescript" ${lexer === "applescript" ? "selected" : ""}>AppleScript</option>
              <option value="arduino" ${lexer === "arduino" ? "selected" : ""}>Arduino</option>
              <option value="aspnet" ${lexer === "aspnet" ? "selected" : ""}>ASP.NET</option>
              <option value="bash" ${lexer === "bash" ? "selected" : ""}>Bash/Shell</option>
              <option value="batch" ${lexer === "batch" ? "selected" : ""}>Batch</option>
              <option value="c" ${lexer === "c" ? "selected" : ""}>C</option>
              <option value="csharp" ${lexer === "csharp" ? "selected" : ""}>C#</option>
              <option value="cpp" ${lexer === "cpp" ? "selected" : ""}>C++</option>
              <option value="cmake" ${lexer === "cmake" ? "selected" : ""}>CMake</option>
              <option value="css" ${lexer === "css" ? "selected" : ""}>CSS</option>
              <option value="csv" ${lexer === "csv" ? "selected" : ""}>CSV</option>
              <option value="clojure" ${lexer === "clojure" ? "selected" : ""}>Clojure</option>
              <option value="cobol" ${lexer === "cobol" ? "selected" : ""}>Cobol</option>
              <option value="crystal" ${lexer === "crystal" ? "selected" : ""}>Crystal</option>
              <option value="cuda" ${lexer === "cuda" ? "selected" : ""}>CUDA</option>
              <option value="dart" ${lexer === "dart" ? "selected" : ""}>Dart</option>
              <option value="pascal" ${lexer === "pascal" ? "selected" : ""}>Delphi</option>
              <option value="diff" ${lexer === "diff" ? "selected" : ""}>Diff</option>
              <option value="django" ${lexer === "django" ? "selected" : ""}>Django</option>
              <option value="docker" ${lexer === "docker" ? "selected" : ""}>Docker</option>
              <option value="ejs" ${lexer === "ejs" ? "selected" : ""}>EJS</option>
              <option value="eta" ${lexer === "eta" ? "selected" : ""}>ETA</option>
              <option value="elixir" ${lexer === "elixir" ? "selected" : ""}>Elixir</option>
              <option value="erlang" ${lexer === "erlang" ? "selected" : ""}>Erlang</option>
              <option value="fsharp" ${lexer === "fsharp" ? "selected" : ""}>F#</option>
              <option value="fortran" ${lexer === "fortran" ? "selected" : ""}>Fortran</option>
              <option value="gdscript" ${lexer === "gdscript" ? "selected" : ""}>GDScript</option>
              <option value="go" ${lexer === "go" ? "selected" : ""}>Go</option>
              <option value="gradle" ${lexer === "gradle" ? "selected" : ""}>Gradle</option>
              <option value="graphql" ${lexer === "graphql" ? "selected" : ""}>GraphQL</option>
              <option value="groovy" ${lexer === "groovy" ? "selected" : ""}>Groovy</option>
              <option value="haml" ${lexer === "haml" ? "selected" : ""}>Haml</option>
              <option value="handlebars" ${lexer === "handlebars" ? "selected" : ""}>Handlebars</option>
              <option value="haskell" ${lexer === "haskell" ? "selected" : ""}>Haskell</option>
              <option value="markup" ${lexer === "markup" ? "selected" : ""}>Markup (HTML)</option>
              <option value="ini" ${lexer === "ini" ? "selected" : ""}>Ini</option>
              <option value="java" ${lexer === "java" ? "selected" : ""}>Java</option>
              <option value="javascript" ${lexer === "javascript" ? "selected" : ""}>JavaScript</option>
              <option value="jinja2" ${lexer === "jinja2" ? "selected" : ""}>Jinja2</option>
              <option value="json" ${lexer === "json" ? "selected" : ""}>JSON</option>
              <option value="julia" ${lexer === "julia" ? "selected" : ""}>Julia</option>
              <option value="kotlin" ${lexer === "kotlin" ? "selected" : ""}>Kotlin</option>
              <option value="latex" ${lexer === "latex" ? "selected" : ""}>LaTeX</option>
              <option value="lisp" ${lexer === "lisp" ? "selected" : ""}>Lisp</option>
              <option value="liquid" ${lexer === "liquid" ? "selected" : ""}>Liquid</option>
              <option value="lua" ${lexer === "lua" ? "selected" : ""}>Lua</option>
              <option value="markdown" ${lexer === "markdown" ? "selected" : ""}>Markdown</option>
              <option value="matlab" ${lexer === "matlab" ? "selected" : ""}>MATLAB</option>
              <option value="mustache" ${lexer === "mustache" ? "selected" : ""}>Mustache</option>
              <option value="nim" ${lexer === "nim" ? "selected" : ""}>Nim</option>
              <option value="nginx" ${lexer === "nginx" ? "selected" : ""}>nginx</option>
              <option value="objectivec" ${lexer === "objectivec" ? "selected" : ""}>Objective-C</option>
              <option value="ocaml" ${lexer === "ocaml" ? "selected" : ""}>OCaml</option>
              <option value="perl" ${lexer === "perl" ? "selected" : ""}>Perl</option>
              <option value="php" ${lexer === "php" ? "selected" : ""}>PHP</option>
              <option value="powershell" ${lexer === "powershell" ? "selected" : ""}>PowerShell</option>
              <option value="prolog" ${lexer === "prolog" ? "selected" : ""}>Prolog</option>
              <option value="pug" ${lexer === "pug" ? "selected" : ""}>Pug</option>
              <option value="python" ${lexer === "python" ? "selected" : ""}>Python</option>
              <option value="r" ${lexer === "r" ? "selected" : ""}>R</option>
              <option value="ruby" ${lexer === "ruby" ? "selected" : ""}>Ruby</option>
              <option value="rust" ${lexer === "rust" ? "selected" : ""}>Rust</option>
              <option value="sass" ${lexer === "sass" ? "selected" : ""}>Sass</option>
              <option value="scala" ${lexer === "scala" ? "selected" : ""}>Scala</option>
              <option value="scss" ${lexer === "scss" ? "selected" : ""}>SCSS</option>
              <option value="solidity" ${lexer === "solidity" ? "selected" : ""}>Solidity</option>
              <option value="sql" ${lexer === "sql" ? "selected" : ""}>SQL</option>
              <option value="swift" ${lexer === "swift" ? "selected" : ""}>Swift</option>
              <option value="toml" ${lexer === "toml" ? "selected" : ""}>TOML</option>
              <option value="typescript" ${lexer === "typescript" ? "selected" : ""}>TypeScript</option>
              <option value="vba" ${lexer === "vba" ? "selected" : ""}>VBA</option>
              <option value="vim" ${lexer === "vim" ? "selected" : ""}>vim</option>
              <option value="wasm" ${lexer === "wasm" ? "selected" : ""}>WebAssembly</option>
              <option value="yaml" ${lexer === "yaml" ? "selected" : ""}>YAML</option>
              <option value="zig" ${lexer === "zig" ? "selected" : ""}>Zig</option>
            </select>
          </div>

          <div class="form-expiry">
            <label for="id_expiry">Expires</label>
            <select name="expiry" id="id_expiry" required>
              <!-- <option value="onetime">after one visit</option> -->
              <option value="3600" selected>in one hour</option>
              <option value="86400">in one day</option>
              <option value="604800">in one week</option>
            </select>
          </div>
        </div>

        <div class="form-textarea">
          <label for="id_code" hidden>Content</label>
          <textarea
            name="code"
            id="id_code"
            cols="40"
            rows="10"
            placeholder="Your awesome snippet goes here..."
            maxlength="262144000"
            required
          >${code ?? ""}</textarea>
        </div>

        <div class="form-action">
          <button type="submit" id="btn_save">Create</button>
          <button type="reset" id="btn_reset">Reset</button>
        </div>
      </form>
    </main>

    <footer>
      Created by
      <a href="https://github.com/LakhindarPal/snippets" target="_blank" rel="noopener noreferrer">Lakhindar</a>
    </footer>

  </body>

</html>`;
}
