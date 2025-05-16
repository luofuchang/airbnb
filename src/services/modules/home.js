import customRequest from "../custom-request";

export function getHomeGoodPriceData() {
  return customRequest.get({
    url: "/home/goodprice",
  });
}
