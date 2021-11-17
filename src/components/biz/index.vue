<template>
  <el-table
      ref="bizTable"
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
        <table-item :slot-func="item.defaultSlot(row)"></table-item>
      </template>
      <template
          v-if="item.headerSlot"
          #header="{column}"
      >
        <table-item :slot-func="item.headerSlot(column)"></table-item>
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
import { defineComponent, reactive, toRefs } from 'vue'
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
    const state = reactive({
      bizTable: null
    })
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
    const clearSelection = () => {
      state.bizTable.clearSelection()
    }
    const toggleRowSelection = (row, selected) => {
      state.bizTable.toggleRowSelection(row, selected)
    }
    const toggleAllSelection = () => {
      state.bizTable.toggleAllSelection()
    }
    const toggleRowExpansion = (row, expanded) => {
      state.bizTable.toggleRowExpansion(row, expanded)
    }
    const setCurrentRow = (row) => {
      state.bizTable.setCurrentRow(row)
    }
    const clearSort = () => {
      state.bizTable.clearSort()
    }
    const clearFilter = (columnKey) => {
      state.bizTable.clearFilter(columnKey)
    }
    const doLayout = () => {
      state.bizTable.doLayout()
    }
    const sort = (prop, order) => {
      state.bizTable.sort(prop, order)
    }
    return {
      ...toRefs(state),
      handleSizeChange,
      handleCurrentChange,
      clearSelection,
      toggleRowSelection,
      toggleAllSelection,
      toggleRowExpansion,
      setCurrentRow,
      clearSort,
      clearFilter,
      doLayout,
      sort
    }
  }
})
</script>

<style>

</style>
