<template>
  <el-container class="w-screen h-screen overflow-hidden">
    <el-aside width="200px">
      <el-menu :default-openeds="['1', '3']">
        <el-submenu index="1">
          <template #title>
            <i class="el-icon-message" />导航一
          </template>
          <el-menu-item-group>
            <template #title>
              分组一
            </template>
            <el-menu-item index="1-1">
              选项1
            </el-menu-item>
            <el-menu-item index="1-2">
              选项2
            </el-menu-item>
          </el-menu-item-group>
          <el-menu-item-group title="分组2">
            <el-menu-item index="1-3">
              选项3
            </el-menu-item>
          </el-menu-item-group>
          <el-submenu index="1-4">
            <template #title>
              选项4
            </template>
            <el-menu-item index="1-4-1">
              选项4-1
            </el-menu-item>
          </el-submenu>
        </el-submenu>
        <el-submenu index="2">
          <template #title>
            <i class="el-icon-menu" />导航二
          </template>
          <el-menu-item-group>
            <template #title>
              分组一
            </template>
            <el-menu-item index="2-1">
              选项1
            </el-menu-item>
            <el-menu-item index="2-2">
              选项2
            </el-menu-item>
          </el-menu-item-group>
          <el-menu-item-group title="分组2">
            <el-menu-item index="2-3">
              选项3
            </el-menu-item>
          </el-menu-item-group>
          <el-submenu index="2-4">
            <template #title>
              选项4
            </template>
            <el-menu-item index="2-4-1">
              选项4-1
            </el-menu-item>
          </el-submenu>
        </el-submenu>
        <el-submenu index="3">
          <template #title>
            <i class="el-icon-setting" />导航三
          </template>
          <el-menu-item-group>
            <template #title>
              分组一
            </template>
            <el-menu-item index="3-1">
              选项1
            </el-menu-item>
            <el-menu-item index="3-2">
              选项2
            </el-menu-item>
          </el-menu-item-group>
          <el-menu-item-group title="分组2">
            <el-menu-item index="3-3">
              选项3
            </el-menu-item>
          </el-menu-item-group>
          <el-submenu index="3-4">
            <template #title>
              选项4
            </template>
            <el-menu-item index="3-4-1">
              选项4-1
            </el-menu-item>
          </el-submenu>
        </el-submenu>
      </el-menu>
    </el-aside>

    <el-container>
      <el-header class="flex justify-end items-center">
        <el-color-picker
          v-model="primaryColor"
          show-alpha
          :predefine="predefineColors"
          @change="handleChangePrimaryColor"
        />
        <el-dropdown>
          <i
            class="el-icon-setting"
            style="margin-right: 15px"
          />
          <template #dropdown>
            <el-dropdown-menu>
              <el-dropdown-item>查看</el-dropdown-item>
              <el-dropdown-item>新增</el-dropdown-item>
              <el-dropdown-item>删除</el-dropdown-item>
            </el-dropdown-menu>
          </template>
        </el-dropdown>
        <span>王小虎</span>
      </el-header>

      <el-main>
        <transition name="el-fade-in">
          <el-scrollbar>
            <router-view />
          </el-scrollbar>
        </transition>
      </el-main>
    </el-container>
  </el-container>
</template>

<script>
import { defineComponent, onMounted, ref } from 'vue'
import { setTheme, setDefaultTheme, getDefaultTheme, getTheme } from '../../utils/theme'
export default defineComponent({
  name: 'main.layout',
  setup () {
    const primaryColor = ref('')
    const predefineColors = ref(['#98B4D4', '#C3447A', '#BC243C', '#7FCDCD', '#E15D44', '#55B4B0', '#DFCFBE', '#9B2335', '#5B5EA6', '#EFC050', '#45B8AC', '#D65076', '#DD4124', '#009B77', '#B565A7', '#955251', '#92A8D1', '#F7CAC9'])
    const handleChangePrimaryColor = (color) => {
      setTheme(color)
      setDefaultTheme(color)
    }
    onMounted(() => {
      const defaultTheme = getTheme() || getDefaultTheme()
      if (defaultTheme) {
        setTheme(defaultTheme)
        setDefaultTheme(defaultTheme)
        primaryColor.value = defaultTheme
      }
    })
    return {
      primaryColor,
      predefineColors,
      handleChangePrimaryColor
    }
  }
})
</script>

<style scoped>

</style>
