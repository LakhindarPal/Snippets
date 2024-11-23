import CreatePage from "./pages/create.html.js";
import DisplayPage from "./pages/display.html.js";
import NotfoundPage from "./pages/notfound.html.js";

export default {
  async fetch(req, env) {
    const url = new URL(req.url);
    const pathname = url.pathname;
    const url404 = new URL("/404", req.url);

    if (pathname === "/" && req.method === "GET") {
      const lexer = "javascript";
      const html = CreatePage({ lexer });
      return new Response(html, {
        headers: {
          "content-type": "text/html;charset=utf-8",
        },
      });
    } else if (pathname === "/create" && req.method === "POST") {
      const data = await req.formData();
      const title = data.get("title");
      const code = data.get("code");
      const lexer = data.get("lexer");
      const expirationTtl = Number(data.get("ttl"));
      const expiry = Date.now() + expirationTtl * 1000;
      const slug = crypto.randomUUID().split("-")[0];
      await env.SnippetsKV.put(slug, code, {
        expirationTtl,
        metadata: { title, lexer, expiry },
      }).catch((e) => console.error(e));
      const snippetUrl = new URL(slug, req.url);
      return Response.redirect(snippetUrl);
    } else if (/^\/[a-z0-9]{8}$/.test(pathname) && req.method === "GET") {
      const slug = pathname.split("/")[1];
      const result = await env.SnippetsKV.getWithMetadata(slug);
      if (!result || !result.value || !result.metadata)
        return Response.redirect(url404);
      const { title, lexer, expiry } = result.metadata;
      const code = result.value.replace(
        /[&<>"']/g,
        (m) => `&#${m.charCodeAt(0)};`
      );
      const html = DisplayPage({ title, slug, code, lexer, expiry });
      return new Response(html, {
        headers: {
          "content-type": "text/html;charset=utf-8",
        },
      });
    } else if (/^\/[a-z0-9]{8}\/fork$/.test(pathname) && req.method === "GET") {
      const slug = pathname.split("/")[1];
      const result = await env.SnippetsKV.getWithMetadata(slug);
      if (!result || !result.value || !result.metadata)
        return Response.redirect(url404);
      const { title, lexer } = result.metadata;
      const code = result.value;
      const html = CreatePage({ title, code, lexer });
      return new Response(html, {
        headers: {
          "content-type": "text/html;charset=utf-8",
        },
      });
    } else if (/^\/[a-z0-9]{8}\/raw$/.test(pathname) && req.method === "GET") {
      const slug = pathname.split("/")[1];
      const code = await env.SnippetsKV.get(slug);
      if (!code) return Response.redirect(url404);
      return new Response(code, {
        headers: {
          "content-type": "text/plain;charset=utf-8",
        },
      });
    } else if (/^\/[a-z0-9]{8}\/dl$/.test(pathname) && req.method === "GET") {
      const slug = pathname.split("/")[1];
      const result = await env.SnippetsKV.getWithMetadata(slug);
      if (!result || !result.value || !result.metadata)
        return Response.redirect(url404);
      const { title, lexer } = result.metadata;
      return new Response(result.value, {
        headers: {
          "Content-Type": `text/plain; charset=utf-8`,
          "Content-Disposition": `attachment; filename="${title}.${lexer}"`,
        },
      });
    } else if (pathname === "/404" && req.method === "GET") {
      const html = NotfoundPage();
      return new Response(html, {
        headers: {
          "content-type": "text/html;charset=utf-8",
        },
      });
    } else if (pathname === "/favicon.ico" && req.method === "GET") {
      return new Response(null, {
        status: 404,
      });
    } else {
      return new Response(null, {
        status: 404,
      });
    }
  },
};
