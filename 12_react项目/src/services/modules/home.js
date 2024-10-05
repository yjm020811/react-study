import JMRequest from "../request/index";

export function getHomeGoodPriceData() {
  return JMRequest.get({
    url: "/home/goodprice"
  });
}

export function getHomeHightScoreData() {
  return JMRequest.get({
    url: "/home/highscore"
  });
}

export function getHomeDiscountData() {
  return JMRequest.get({
    url: "/home/discount"
  });
}

export function getHotRecommendData() {
  return JMRequest.get({
    url: "/home/hotrecommenddest"
  });
}

export function getHomeLongForData() {
  return JMRequest.get({
    url: "/home/longfor"
  });
}

export function getHomePlusData() {
  return JMRequest.get({
    url: "/home/plus"
  });
}
