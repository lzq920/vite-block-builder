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
  />
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
        id: 1,
        name: '1'
      }, {
        id: 2,
        name: '2'
      }],
      query: {
        id: '',
        name: ''
      },
      loading: true,
      columns: [{
        label: 'id',
        prop: 'id'
      }, {
        label: 'name',
        prop: 'name',
        formatter: (row) => row.name + 'formatter'
      }, {
        label: 'tool',
        defaultSlot: (row) => {
          return h(resolveComponent('el-button'), {
            type: 'text',
            onClick: () => alert(row.name)
          }, '操作')
        }
      }],
      tableConfig: {
        attributes: {},
        events: {}
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
