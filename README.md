# Snippets

A simple, open-source pastebin web application built with [PrismJS](https://prismjs.com/), [Cloudflare Workers](https://developers.cloudflare.com/workers/), and [Cloudflare KV](https://developers.cloudflare.com/workers/runtime-apis/kv). Users can share code snippets, text, or other types of information with syntax highlighting and an easy-to-use interface.

## Features

- **Syntax Highlighting**: Automatically applies syntax highlighting using PrismJS.
- **Fast & Scalable**: Deployed with Cloudflare Workers and powered by Cloudflare KV for storage.
- **Minimal UI**: Simple, clean design for pasting and sharing content.
- **Share Links**: Generates unique, permanent URLs for each paste.
- **Open Source**: Fully open-source and customizable.

## Technologies

- **PrismJS**: Lightweight, extensible syntax highlighter for web code snippets.
- **Cloudflare Workers**: A serverless compute platform to run JavaScript code close to your users.
- **Cloudflare KV**: A key-value store for fast, distributed data storage.

## Demo

You can try out the demo [here](https://snippets.lpal.workers.dev/).

## Installation

To run this project locally, you'll need to have a Cloudflare account and set up Cloudflare Workers.

### Prerequisites

- [Node.js](https://nodejs.org/) (LTS version recommended)
- [Wrangler](https://developers.cloudflare.com/workers/platform/cli-wrangler/) (Cloudflare Workers CLI)
- [Cloudflare Account](https://dash.cloudflare.com/)

### Steps to Run Locally

1. **Clone the Repository**:

   ```bash
   git clone https://github.com/LakhindarPal/snippets.git
   cd snippets
   ```

2. **Install Dependencies**:

   ```bash
   npm install
   ```

3. **Set Up Cloudflare Workers**:

   - [Create a Cloudflare Worker](https://developers.cloudflare.com/workers/get-started/).
   - Set up KV storage and create a KV binding in your Cloudflare Workers dashboard.
   - Add your KV namespace binding to `wrangler.toml`:

     ```toml
     kv_namespaces = [
       { binding = "PASTEBIN_KV", id = "your-kv-namespace-id" }
     ]
     ```

4. **Configure Your Environment**:

   Make sure the necessary environment variables are set in `wrangler.toml` or `.env` (like your KV namespace ID).

5. **Run the Worker Locally**:

   ```bash
   wrangler dev
   ```

   Visit `http://localhost:8787` in your browser to test the app locally.

6. **Deploy to Cloudflare**:

   Once you're ready to deploy, run:

   ```bash
   wrangler publish
   ```

## How It Works

1. **Creating a Paste**:  
   When a user submits a new paste, the content is stored in Cloudflare KV, and a unique URL is generated for the paste.

2. **Viewing a Paste**:  
   When a user visits a URL (e.g., `https://snippets.<SUB_DOMAIN>.workers.dev//a1b2c4d5`), the content is fetched from KV and displayed with PrismJS syntax highlighting.

3. **Editing/Deleting**:  
   Currently, this implementation only supports creating and viewing pastes. You can easily extend it with features like editing or deleting pastes.

## Contributing

Contributions are welcome! Please fork the repository and submit a pull request with your changes. Here are some ways you can help:

- Report bugs or issues.
- Suggest new features or improvements.
- Improve documentation.

Please make sure your changes pass the existing tests and follow the project's code style.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Acknowledgements

- [PrismJS](https://prismjs.com/) for syntax highlighting.
- [Cloudflare Workers](https://developers.cloudflare.com/workers/) for serverless backend.
- [Cloudflare KV](https://developers.cloudflare.com/workers/runtime-apis/kv) for fast, distributed storage.
