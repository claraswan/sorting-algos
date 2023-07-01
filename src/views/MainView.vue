<script setup lang="ts">
import { ref, defineComponent } from 'vue';
import TheHeader from '@/components/TheHeader.vue'
import BarChart from '@/components/BarChart.vue'
import AppInput from '@/components/AppInput.vue'

let noAlgSelected = ref(true);
let inputError = ref(false);
let selectedAlgorithm = ref('');
let numbersToSort = ref([]);

const startSort = (algorithm) => {
  selectedAlgorithm.value = algorithm;
  noAlgSelected.value = false;
  console.log(`starting ${selectedAlgorithm.value} sort!`);
}

const fillArray = (numbers) => {
  for (let num of numbers) {
    if (typeof num === 'string' && num !== " ") {
      num = parseInt(num);
      if (Array.isArray(numbersToSort.value)) numbersToSort.value.push(num);
    }
  }
}

const saveArray = () => {
  noAlgSelected.value = false;
}

</script>

<template>
  <main>
    <TheHeader 
      :algorithms="['bubble', 'merge', 'selection', 'quick']"
      @algorithm-select="startSort"
      @need-input="inputError = true"
    />
    <div 
      class="content" 
      v-if="noAlgSelected"
      >
      <AppInput @num="fillArray"/>
      <div 
        class="confirm" 
        @click="saveArray"
      >
        Go
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
        :data="numbersToSort"
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