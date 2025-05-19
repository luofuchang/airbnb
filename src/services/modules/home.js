import customRequest from "../custom-request";

export function getHomeGoodPriceData() {
  return customRequest.get({
    url: "/home/goodprice",
  });
}
export function getHomeHighScoreData() {
  return customRequest.get({
    url: "/home/highscore",
  });
}
export function getHomeDiscountData() {
  return customRequest.get({
    url: "/home/discount",
  });
}
