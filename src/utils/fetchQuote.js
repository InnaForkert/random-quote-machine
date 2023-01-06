import axios from "axios";

const options = {
  method: "GET",
  url: "https://api.api-ninjas.com/v1/quotes",
  headers: { "X-Api-Key": "xPzIOdCb/fpp0GqV06MtRA==w6lamA8wWQ4M0RsQ" },
  contentType: "application/json",
};

export async function fetchQuote() {
  const result = await axios.request(options);
  return result.data[0];
}
