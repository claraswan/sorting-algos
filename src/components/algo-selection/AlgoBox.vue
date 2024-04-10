<script setup lang="ts">
const props = defineProps<{
    algo: string;
}>();
</script>

<template>
    <div class="card text-center algo-box">
        <h5 class="card-title">
            {{ props.algo }}
        </h5>
    </div>
</template>
