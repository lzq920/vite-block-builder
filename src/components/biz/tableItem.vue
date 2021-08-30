<script>
import { h, defineComponent } from 'vue'

export default defineComponent({
  name: 'TableItem',
  props: {
    slotFunc: {
      required: true,
      type: Object
    }
  },
  setup (props) {
    return () => h(props.slotFunc)
  }
})
</script>

<style scoped>

</style>
