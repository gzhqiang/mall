/* eslint-disable prefer-destructuring */
// eslint-disable-next-line max-classes-per-file
import { request } from './network'

// eslint-disable-next-line import/prefer-default-export
export function getGoodsDetail(iid) {
  return request({
    url: '/detail',
    params: {
      iid
    }
  })
}

export function getRecommendGoods() {
  return request({
    url: '/recommend'
  })
}

export class GoodsBaseInfo {
  constructor(itemInfo, columns, services) {
    this.itemTitle = itemInfo.title
    this.desc = itemInfo.desc
    this.price = itemInfo.lowPrice
    this.highPrice = itemInfo.highPrice
    this.discountDesc = itemInfo.discountDesc
    this.columns = columns
    this.services = services
  }
}

export class Shop {
  constructor(shopInfo) {
    this.logo = shopInfo.shopLogo
    this.name = shopInfo.name
    this.sells = shopInfo.cSells
    this.goodsNumber = shopInfo.cGoods
    this.score = shopInfo.score
  }
}

export class Params {
  constructor(itemParams) {
    this.rule = itemParams.rule
    this.info = itemParams.info
  }
}
