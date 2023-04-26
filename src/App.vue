<script setup>
import CONSTANTS from '@/constants';
import { inject, onMounted } from 'vue';
import TestEventBus from '@/components/TestEventBus.vue';

const emitter = inject('emitter');

onMounted(() => {
  emitter.on(CONSTANTS.EMITTER.TEST_EMIT, (value) => {
    console.log(`GET EMIT | NAME: ${CONSTANTS.EMITTER.TEST_EMIT}`, value);
  });
});

</script>

<template>
  <h1>Base Vue 3</h1>
  <h2>Test i18n: {{ this.$t('Hello') }}</h2>
  <TestEventBus />
</template>