<template>
  <div class="task-view">
    <el-page-header :content="$t('common.deployProject')" @back="$router.back()" />
    <el-form :model="form" class="form-inline">
      <el-form-item label="{{ $t('common.environment') }}">
        <el-select v-model="form.env" placeholder="test | preprod">
          <el-option label="test" value="test" />
          <el-option label="preprod" value="preprod" />
        </el-select>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="startDeploy">{{ $t('common.deploy') }}</el-button>
      </el-form-item>
    </el-form>
    <div class="log-container" v-if="logs">
      <pre>{{ logs }}</pre>
    </div>
  </div>
</template>
<script>
export default {
  name: 'ProjectDeploy',
  props: ['id'],
  data() {
    return {
      form: { env: 'test' },
      logs: ''
    };
  },
  methods: {
    startDeploy() {
      // TODO: 调用 deploy API 获取 taskId，订阅 WebSocket 日志
    }
  }
};
</script>
<style scoped>
.task-view { padding: 20px; }
.form-inline { margin-bottom: 20px; display: flex; align-items: center; }
.log-container { background: #000; color: #0f0; padding: 10px; height: 400px; overflow: auto; }
</style>