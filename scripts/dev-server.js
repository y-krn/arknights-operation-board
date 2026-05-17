import http from "node:http";
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const port = readPort(process.argv.slice(2)) || Number(process.env.PORT) || 3000;

const mimeTypes = {
  ".css": "text/css; charset=utf-8",
  ".html": "text/html; charset=utf-8",
  ".js": "text/javascript; charset=utf-8",
  ".json": "application/json; charset=utf-8",
  ".png": "image/png",
  ".svg": "image/svg+xml",
  ".webp": "image/webp",
};

const server = http.createServer((request, response) => {
  const filePath = resolveRequestPath(request.url || "/");
  if (!filePath) {
    response.writeHead(403);
    response.end("Forbidden");
    return;
  }
  fs.readFile(filePath, (error, data) => {
    if (error) {
      response.writeHead(error.code === "ENOENT" ? 404 : 500);
      response.end(error.code === "ENOENT" ? "Not Found" : "Server Error");
      return;
    }
    response.writeHead(200, { "Content-Type": mimeTypes[path.extname(filePath)] || "application/octet-stream" });
    response.end(data);
  });
});

server.listen(port, () => {
  console.log(`Serving ${root} at http://localhost:${port}/`);
});

function readPort(args) {
  const index = args.indexOf("--port");
  if (index !== -1) return Number(args[index + 1]);
  const inline = args.find((arg) => arg.startsWith("--port="));
  return inline ? Number(inline.slice("--port=".length)) : 0;
}

function resolveRequestPath(url) {
  const pathname = decodeURIComponent(new URL(url, "http://localhost").pathname);
  const normalized = path.normalize(pathname === "/" ? "/index.html" : pathname).replace(/^[/\\]+/, "");
  const filePath = path.resolve(root, normalized);
  return filePath.startsWith(root + path.sep) || filePath === root ? filePath : null;
}
