<script lang="ts">
import { ref, defineComponent } from 'vue';

export default defineComponent({
    directives: {
        focus: {
            mounted: (el) => el.focus()
        }
    },
    setup(props, {emit}) {
        let num = ref('');

        return {num}
    }
})
</script>

<template>
    <div class="input">
        <input 
            name="numbers"
            v-model="num"
            @change="$emit('num', num)"
            v-focus
        />
        <label for="numbers">
            Type some numbers, each separated by a space. Then click Go.
        </label>
    </div>
</template>

<style scoped>
input {
    height: 3rem;
    padding: 1rem;
    border: none;
    background-color: rgb(245, 229, 255);
    width: 25%;
    border-radius: .3rem;
    font-size: 1.6rem;
}

input:focus {
    outline: none;
}

label {
    font-size: 1.8rem;
    margin-top: 2rem;
}

.input {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin: 5rem 0;
}
</style>