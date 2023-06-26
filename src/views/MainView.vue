<script lang="ts">
import { ref, defineComponent } from 'vue';
import TheHeader from '@/components/TheHeader.vue'

export default defineComponent({
    components: {TheHeader},
    setup(props) {
      let noAlgSelected = ref(true);
      let selectedAlgorithm = ref('');

      const changeAlgorithmView = (algorithm) => {
        selectedAlgorithm.value = algorithm;
        noAlgSelected.value = false;    
      }

      return {props, noAlgSelected, selectedAlgorithm, changeAlgorithmView}
    }
})

</script>

<template>
  <main>
    <TheHeader 
      :algorithms="['bubble', 'merge', 'selection', 'quick']"
      @algorithm-select="changeAlgorithmView"
    />
    <div class="content" v-if="noAlgSelected">
      choose an alogrithm!
    </div>
    <div class="content" v-else="">
      {{selectedAlgorithm}}
    </div>
  </main>
</template>

<style scoped>
.content {
  width: 100%;
  height: 50rem;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.8rem;
}
</style>