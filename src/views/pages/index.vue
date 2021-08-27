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
import { onMounted, reactive, defineComponent, toRefs } from 'vue'
import BizTable from '../../components/biz/table.vue'
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
        prop: 'name'
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
      console.log(params)
      setTimeout(() => {
        state.loading = false
        state.pageInfo.total = Math.floor(Math.random() * 100)
      }, 3000)
    }
    onMounted(() => {
      getPageList()
    })
    return { ...toRefs(state), getPageList }
  }
})
</script>

<style>
</style>
