<template>
  <div class="goods-sku">
    <dl v-for="item in goods.specs" :key="item.id">
      <dt>{{item.name}}</dt>
      <dd>
        <template v-for="value in item.values" :key="value.name">
          <img v-if="value.picture" @click="clickSpecs(item,value)" :class="{selected: value.selected}" :src="value.picture" :title="value.name" alt="">
          <span v-else @click="clickSpecs(item,value)" :class="{selected: value.selected}">{{value.name}}</span>
        </template>
      </dd>
    </dl>
  </div>
</template>
<script>
export default {
  name: 'GoodsSku',
  props: {
    goods: {
      type: Object,
      default: () => ({ specs: [], skus: [] })
    }
  },
  setup (props) {
    const clickSpecs = (item, value) => {
      // 选中与取消
      if (value.selected) {
        value.selected = false
      } else {
        item.values.forEach(bv => {
          bv.selected = false
        })
      }
    }
    return {
      clickSpecs
    }
  }
}
</script>
<style scoped lang="less">
.sku-state-mixin () {
  border: 1px solid #e4e4e4;
  margin-right: 10px;
  cursor: pointer;
  &.selected {
    border-color: @xtxColor;
  }
  &.disabled {
    opacity: 0.6;
    border-style: dashed;
    cursor: not-allowed;
  }
}
.goods-sku {
  padding-left: 10px;
  padding-top: 20px;
  dl {
    display: flex;
    padding-bottom: 20px;
    align-items: center;
    dt {
      width: 50px;
      color: #999;
    }
    dd {
      flex: 1;
      color: #666;
      > img {
        width: 50px;
        height: 50px;
        .sku-state-mixin ();
      }
      > span {
        display: inline-block;
        height: 30px;
        line-height: 28px;
        padding: 0 20px;
        .sku-state-mixin ();
      }
    }
  }
}
</style>
