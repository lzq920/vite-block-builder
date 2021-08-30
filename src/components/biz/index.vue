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
    >
      <template
        v-if="item.defaultSlot"
        #default="{row}"
      >
        <table-item :slot-func="item.defaultSlot(row)" />
      </template>
      <template
        v-if="item.headerSlot"
        #header="{column}"
      >
        <table-item :slot-func="item.headerSlot(column)" />
      </template>
    </el-table-column>
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
import TableItem from './tableItem.vue'

export default defineComponent({
  name: 'BizTable',
  components: {
    'table-item': TableItem
  },
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
      default: () => {
      }
    }
  },
  emits: ['pageInfo:update'],
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
