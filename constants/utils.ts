export function getPath(rawPath: string) {
  console.log({ baseUrl: process.env.BASE_URL });
  const baseUrl = process.env.BASE_URL || "";
  return baseUrl + rawPath;
}
