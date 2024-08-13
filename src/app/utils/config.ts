export const API_URL = "https://staging1.internal1.packiyo.com/api/v1";

export const API_HEADERS = new Headers();
API_HEADERS.append("Accept", "application/vnd.api+json");
API_HEADERS.append("Content-Type", "application/vnd.api+json");
API_HEADERS.append(
  "Authorization",
  "Bearer 750|JvmCXTBv50yxjltDKQ1qQOgUyx6s5QHpyBr5f87W"
);

export const requestOptions = {
  method: "GET",
  headers: API_HEADERS,
  redirect: "follow" as RequestRedirect,
};
