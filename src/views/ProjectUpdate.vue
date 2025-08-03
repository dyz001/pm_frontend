<template>
  <div class="task-view">
    <el-page-header :content="$t('common.updateProject')" @back="$router.back()" />
    <div class="log-container">
      <pre>{{ logs }}</pre>
    </div>
  </div>
</template>
<script>
export default {
  name: 'ProjectUpdate',
  props: ['id'],
  data() {
    return { logs: '' };
  },
  mounted() {
    // TODO: 调用 update API 获取 taskId，订阅 WebSocket 日志
  }
};
</script>
<style scoped>
.task-view { padding: 20px; }
.log-container { background: #000; color: #0f0; padding: 10px; height: 400px; overflow: auto; }
</style>