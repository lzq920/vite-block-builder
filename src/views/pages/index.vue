<template>
  <div>
    <a-list item-layout="horizontal" :data-source="data">
      <template #renderItem="{ item, index }">
        <a-list-item>
          <a-list-item-meta :description="item.content">
            <template #title>
              <a href="https://www.antdv.com/">{{ item.title }}</a>
            </template>
            <template #avatar>
              <a-avatar
                src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"
              />
            </template>
          </a-list-item-meta>
        </a-list-item>
      </template>
    </a-list>
  </div>
</template>

<script>
import { onMounted, reactive } from "vue";
import { useCloudBase } from "../../hooks/cloudbase";
export default {
  setup() {
    let data = reactive([]);
    const app = useCloudBase();
    const db = app.database();
    const collection = db.collection("page");
    const getPageList = async () => {
      const response = await collection.get();
      data.push(...response.data);
    };
    onMounted(() => {
      getPageList();
    });
    return { data };
  },
};
</script>

<style>
</style>