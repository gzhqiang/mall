<template>
  <div class="detail-params">
    <div v-if="params && params.rule && params.info">
      <table class="params-rule">
        <tbody>
          <tr v-for="(items, index) in params.rule.tables[0]" :key="index">
            <td v-for="(item, index) in items" :key="index">{{ item }}</td>
          </tr>
        </tbody>
      </table>
      <table class="params-info">
        <tbody>
          <tr v-for="(item, index) in params.info.set" :key="index">
            <td class="info-key">{{ item.key }}</td>
            <td class="info-value">{{ item.value }}</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
export default {
  name: 'DetailParams',
  data() {
    return {}
  },
  props: {
    params: {
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
.detail-params {
  margin-top: 20px;
  border-top: 5px solid #eee;
  border-bottom: 5px solid #eee;
  padding: 20px 10px;
  .params-rule {
    font-size: 14px;
    width: 100%;

    border: none;
    border-collapse: collapse;

    tr {
      td {
        width: 20%;
        height: 40px;
        line-height: 40px;
        border-bottom: 1px solid #ccc;
      }
    }

    tr:last-child {
      td {
        border-bottom: 2px solid #ccc;
      }
    }
  }
  .params-info {
    font-size: 14px;
    width: 100%;
    border-collapse: collapse;
    tr {
      height: 40px;
      line-height: 40px;
      td {
        border-bottom: 1px solid #ccc;
      }
      .info-key {
        width: 25%;
      }
      .info-value {
        color: #e84868;
      }
    }
  }
}
</style>
