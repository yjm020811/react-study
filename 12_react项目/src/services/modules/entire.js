import JMRequest from "../request/index";

export function getEntireRoomList(offset, size) {
  return JMRequest.get({
    url: "/entire/list",
    params: {
      offset,
      size
    }
  });
}
