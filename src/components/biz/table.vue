<template>
  <el-table
    v-loading="loading"
    :data="data"
    v-bind="tableConfig.attributes"
    class="mb-4"
    v-on="tableConfig.events"
  >
    <el-table-column
      v-for="(item,index) in columns"
      :key="index"
      v-bind="item"
    />
  </el-table>
  <el-pagination
    v-if="hasPageInfo"
    :current-page="pageInfo.page"
    :page-sizes="[10, 20, 50, 100]"
    :page-size="pageInfo.pageSize"
    layout="total, sizes, prev, pager, next, jumper"
    :total="pageInfo.total"
    @size-change="handleSizeChange"
    @current-change="handleCurrentChange"
  />
</template>

<script>
import { defineComponent } from 'vue'
export default defineComponent({
  name: 'BizTable',
  props: {
    loading: {
      required: true,
      type: Boolean,
      default: () => true
    },
    tableConfig: {
      type: Object,
      required: true,
      default: () => {
        return {
          attributes: {},
          events: {}
        }
      }
    },
    data: {
      required: true,
      type: Array,
      default: () => []
    },
    columns: {
      required: true,
      type: Array,
      default: () => []
    },
    hasPageInfo: {
      required: true,
      type: Boolean,
      default: () => true
    },
    pageInfo: {
      required: true,
      type: Object,
      default: () => {
        return {
          total: 0,
          page: 1,
          pageSize: 10
        }
      }
    },
    queryEvent: {
      required: true,
      type: Function
    },
    queryParams: {
      required: true,
      type: Object,
      default: () => {}
    }
  },
  setup (props, { emit }) {
    const handleSizeChange = (val) => {
      emit('pageInfo:update', {
        total: props.pageInfo.total,
        page: props.pageInfo.page,
        pageSize: val
      })
      props.queryEvent({ ...props.queryParams, ...(props.hasPageInfo ? props.pageInfo : {}) })
    }
    const handleCurrentChange = (val) => {
      emit('pageInfo:update', {
        total: props.pageInfo.total,
        page: val,
        pageSize: props.pageInfo.pageSize
      })
      props.queryEvent({ ...props.queryParams, ...(props.hasPageInfo ? props.pageInfo : {}) })
    }
    return {
      handleSizeChange,
      handleCurrentChange
    }
  }
})
</script>

<style>

</style>
