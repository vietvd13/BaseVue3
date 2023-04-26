<script setup>
import CONSTANTS from '@/constants';
import { inject } from 'vue';
const emitter = inject('emitter');

function emitEventBus() {
    const value = "Base Vue 3";
    console.log(`SET EMIT | NAME: ${CONSTANTS.EMITTER.TEST_EMIT} | VALUE: ${value}`);
    emitter.emit(CONSTANTS.EMITTER.TEST_EMIT, value);
}
</script>

<template>
    <button @click="emitEventBus()">
        Push Event
    </button>
</template>