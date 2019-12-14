<template>
  <div class="shop-info">
    <div class="shop-top">
      <img :src="shopInfo.logo" alt="" />
      <strong>{{ shopInfo.name }}</strong>
    </div>
    <div class="shop-middle">
      <div>
        <p>{{ (shopInfo.sells / 10000).toFixed(2) }}万</p>
        <span>总销量</span>
      </div>
      <div>
        <p>{{ shopInfo.goodsNumber }}</p>
        <span>全部宝贝</span>
      </div>
      <div class="score">
        <table>
          <tbody>
            <tr v-for="(item, index) in shopInfo.score" :key="index">
              <td class="score-name">{{ item.name }}</td>
              <td class="score-number">{{ item.score }}</td>
              <td>
                <span class="score-text" :class="{ better: item.isBetter }">{{
                  item.isBetter ? '高' : '低'
                }}</span>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
    <div class="shop-bottom">
      <div class="enter-shop">进店逛逛</div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'DetailShopInfo',
  data() {
    return {}
  },
  props: {
    shopInfo: {
      type: Object,
      default() {
        return {}
      }
    }
  },
  components: {}
}
</script>

<style lang="scss" scoped>
.shop-info {
  padding: 30px 5px;
  font-size: 18px;
  border-bottom: 4px solid #eee;

  .shop-top {
    img {
      width: 45px;
      height: 45px;
      margin-left: 10px;
      vertical-align: middle;
    }
    strong {
      font-weight: 500;
      padding-left: 10px;
    }
  }

  .shop-middle {
    display: flex;
    text-align: center;
    font-size: 14px;
    margin: 20px 0;

    div:nth-child(1),
    div:nth-child(2) {
      flex: 25%;
      height: 43px;
      p {
        font-size: 18px;
        margin-bottom: 8px;
      }
    }

    div:nth-child(2) {
      border-right: 1px solid #ccc;
    }

    .score {
      flex: 50%;
      table {
        text-align: left;
        margin: -10px 20px 0;
        tr {
          height: 20px;
        }
        .score-name {
          width: 70px;
        }
        .score-number {
          width: 40px;
        }
        .score-text {
          color: #fff;
          background-color: #5ea732;
        }
      }
    }
  }

  .enter-shop {
    width: 150px;
    height: 30px;
    margin: 0 auto;
    line-height: 30px;
    background-color: #f2f5f8;
    color: #666;
    font-size: 14px;
    border-radius: 10px;
    text-align: center;
  }
}

.better {
  background-color: #f1212a !important;
}
</style>
