export function getPath(rawPath: string) {
  const env = process.env.NODE_ENV === "production";
  console.log({ env });
  const baseUrl = env ? "/portfolio" : "";
  return baseUrl + rawPath;
}
