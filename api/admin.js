import crypto from "node:crypto";
import fs from "node:fs/promises";
import path from "node:path";

function safeEqual(left, right) {
  const leftBuffer = Buffer.from(left);
  const rightBuffer = Buffer.from(right);
  if (leftBuffer.length !== rightBuffer.length) return false;
  return crypto.timingSafeEqual(leftBuffer, rightBuffer);
}

function unauthorized(response) {
  response.setHeader("WWW-Authenticate", 'Basic realm="Operation Board Admin", charset="UTF-8"');
  response.setHeader("X-Robots-Tag", "noindex, nofollow");
  response.status(401).send("Authentication required");
}

export default async function handler(request, response) {
  const expectedUser = process.env.ADMIN_USER;
  const expectedPassword = process.env.ADMIN_PASSWORD;

  if (!expectedUser || !expectedPassword) {
    response.setHeader("X-Robots-Tag", "noindex, nofollow");
    response.status(503).send("Admin auth is not configured");
    return;
  }

  const [scheme, encoded] = String(request.headers.authorization || "").split(" ");
  if (scheme !== "Basic" || !encoded) {
    unauthorized(response);
    return;
  }

  let user = "";
  let password = "";
  try {
    const decoded = Buffer.from(encoded, "base64").toString("utf8");
    const separator = decoded.indexOf(":");
    user = separator >= 0 ? decoded.slice(0, separator) : decoded;
    password = separator >= 0 ? decoded.slice(separator + 1) : "";
  } catch {
    unauthorized(response);
    return;
  }

  if (!safeEqual(user, expectedUser) || !safeEqual(password, expectedPassword)) {
    unauthorized(response);
    return;
  }

  const html = await fs.readFile(path.join(process.cwd(), "admin.html"), "utf8");
  response.setHeader("Content-Type", "text/html; charset=utf-8");
  response.setHeader("Cache-Control", "no-store");
  response.setHeader("X-Robots-Tag", "noindex, nofollow");
  response.status(200).send(html);
}
