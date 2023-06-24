<script lang="ts">
import { defineComponent } from 'vue';
import AlgoBox from '@/components/AlgoBox.vue'

defineProps({
    algorithms: Array<string>
})

export default defineComponent({
    props: {
        algorithms: {
            type: [String],
            required: true
        }
    },
    components: {AlgoBox},
    setup(props) {

        return {props}
    }
})
</script>

<template>
    <div class="header__wrapper">
        <AlgoBox v-for="algo in props.algorithms" :algo="algo" />
    </div>
</template>

<style scoped>
.header__Wrapper {
    display: flex;
    justify-content: space-between;
    flex-direction: row;
    align-items: center;
    width: 100vw;
    height: 40rem;
}
</style>