<script lang="ts">
import { ref, defineComponent } from 'vue';
import TheHeader from '@/components/TheHeader.vue'
import BarChart from '@/components/BarChart.vue'
import AppInput from '@/components/AppInput.vue'

export default defineComponent({
    components: {TheHeader, BarChart, AppInput},
    setup(props) {
      let noAlgSelected = ref(true);
      let inputError = ref(false);
      let selectedAlgorithm = ref('');
      let numbersToSort = ref([]);

      const changeAlgorithmView = (algorithm) => {
        selectedAlgorithm.value = algorithm;
        noAlgSelected.value = false;
      }

      const fillArray = (numbers: Array<string> ) => {
        numbers = numbers.filter(function(str: string) {
            return /\S/.test(str);
        });

        for (let num of numbers) {
          //numbersToSort.push(num);
          console.log(num);
        }
      }

      const saveArray = () => {
        console.log('hi');
      }

      return {props, noAlgSelected, selectedAlgorithm, changeAlgorithmView, inputError, fillArray, saveArray  }
    }
})

</script>

<template>
  <main>
    <TheHeader 
      :algorithms="['bubble', 'merge', 'selection', 'quick']"
      @algorithm-select="changeAlgorithmView"
      @need-input="inputError = true"
    />
    <div class="content" v-if="noAlgSelected">
      <AppInput @numbers="fillArray"/>
      <div class="confirm" @click="saveArray">
        Save
      </div>
      <div 
        class="content__error"
        v-show="inputError"
      >
        Save your numbers before you choose an algorithm!
      </div>
    </div>
    <div class="content" v-else="">
      {{selectedAlgorithm}}
      <BarChart 
        :algorithm="selectedAlgorithm"
      />
    </div>
  </main>
</template>

<style scoped>
.content {
  width: 100%;
  height: 75vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  font-size: 1.8rem;
  margin-top: 4rem;
}

.confirm {
  height: 4rem;
  width: 5rem;
  border-radius: .3rem;
  background: #800080;
  color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
}
</style>