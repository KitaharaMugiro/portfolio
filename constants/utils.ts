export function getPath(rawPath: string) {
  const baseUrl = process.env.BASE_URL || "";
  return baseUrl + rawPath;
}
