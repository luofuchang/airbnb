import customRequest from "../custom-request";

export function getEntireList(offset = 0, size = 20) {
  return customRequest.get({
    url: "/entire/list",
    params: {
      offset,
      size,
    },
  });
}
