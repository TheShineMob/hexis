import {request} from "./request";

export function getFind(flag,pageNum,pageSize,province,city,cityArea) {
  return request({
    url: "/shopList",
    method: "get",
    params: {
      flag,
      pageNum,
      pageSize,
      province,
      city,
      cityArea
    }
  })
}
