<template>
  <biz-table
    :data="list"
    :loading="loading"
    :columns="columns"
    :table-config="tableConfig"
    :page-info="pageInfo"
    :has-page-info="true"
    :query-event="getPageList"
    :query-params="query"
  >
    <template #column>
      <el-table-column
        label="哈哈"
        prop="name"
      />
      <el-table-column
        label="日期"
        prop="date"
      />
    </template>
  </biz-table>
</template>

<script>
import { onMounted, reactive, defineComponent, toRefs, h, resolveComponent } from 'vue'
import BizTable from '../../components/biz/index.vue'

export default defineComponent({
  name: 'PagesIndex',
  components: {
    BizTable
  },
  setup () {
    const state = reactive({
      list: [{
        id: '12987122',
        name: '王小虎',
        amount1: '234',
        amount2: '3.2',
        amount3: 10
      }, {
        id: '12987123',
        name: '王小虎',
        amount1: '165',
        amount2: '4.43',
        amount3: 12
      }, {
        id: '12987124',
        name: '王小虎',
        amount1: '324',
        amount2: '1.9',
        amount3: 9
      }, {
        id: '12987125',
        name: '王小虎',
        amount1: '621',
        amount2: '2.2',
        amount3: 17
      }, {
        id: '12987126',
        name: '王小虎',
        amount1: '539',
        amount2: '4.1',
        amount3: 15
      }],
      query: {
        id: '',
        name: ''
      },
      loading: true,
      columns: [
        {
          prop: 'id',
          label: 'ID'
        },
        {
          label: '姓名',
          prop: 'name'
        },
        {
          label: '展开',
          type: 'expand'
        },
        {
          label: '多选',
          type: 'selection'
        },
        {
          label: '日期',
          prop: 'date',
          sortable: true,
          columnKey: 'date',
          filters: [{
            text: '2016-05-01',
            value: '2016-05-01'
          }, {
            text: '2016-05-02',
            value: '2016-05-02'
          }, {
            text: '2016-05-03',
            value: '2016-05-03'
          }, {
            text: '2016-05-04',
            value: '2016-05-04'
          }],
          filterMethod: (value, row, column) => {
            const property = column.property
            return row[property] === value
          }
        },
        {
          label: '地址',
          prop: 'address'
        }, {
          label: '金额',
          prop: 'amount3',
          formatter: (row) => `￥${row.amount3}`
        }, {
          label: 'tool',
          fixed: 'right',
          defaultSlot: (row) => {
            return h(resolveComponent('el-button'), {
              type: 'text',
              onClick: () => alert(row.name)
            }, () => '操作')
          },
          headerSlot: (row) => {
            return h(resolveComponent('el-button'), {
              type: 'text'
            }, () => '新增')
          }
        }],
      tableConfig: {
        attributes: {
          stripe: true,
          border: true,
          rowClassName: ({
            row,
            rowIndex
          }) => {
            if (rowIndex === 1) {
              return 'warning-row'
            } else if (rowIndex === 3) {
              return 'success-row'
            }
            return ''
          },
          height: 'auto',
          defaultSort: {
            prop: 'date',
            order: 'descending'
          },
          showSummary: true,
          spanMethod: ({
            row,
            column,
            rowIndex,
            columnIndex
          }) => {
            if (rowIndex % 2 === 0) {
              if (columnIndex === 0) {
                return [1, 2]
              } else if (columnIndex === 1) {
                return [0, 0]
              }
            }
          }
        },
        events: {
          select: (selection, row) => {
          },
          cellClick: (row, column, cell, event) => {
          }
        }
      },
      pageInfo: {
        total: 0,
        page: 1,
        pageSize: 10
      }
    })
    const getPageList = async (params) => {
      setTimeout(() => {
        state.loading = false
        state.pageInfo.total = Math.floor(Math.random() * 100)
      }, 1000)
    }
    onMounted(() => {
      getPageList()
    })
    return {
      ...toRefs(state),
      getPageList
    }
  }
})
</script>

<style>
</style>
