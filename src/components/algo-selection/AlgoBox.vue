<script setup lang="ts">
const props = defineProps<{
    algo: string;
}>();
</script>

<template>
    <div class="card algo-box p-1 m-5">
        <div class="card-body d-flex align-items-center justify-content-center">
            <h4 class="text-center">
                {{ props.algo }}
            </h4>
        </div>
    </div>
</template>
