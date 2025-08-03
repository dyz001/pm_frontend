<template>
  <div class="project-create-container">
    <el-page-header :content="$t('common.newProject')" @back="$router.back()" />
    <el-form :model="form" :rules="rules" ref="formRef" label-width="120px" class="form">
      <el-form-item :label="$t('common.title')" prop="title">
        <el-input v-model="form.title" />
      </el-form-item>
      <el-form-item :label="$t('common.gitUrl')" prop="git_url">
        <el-input v-model="form.git_url" />
      </el-form-item>
      <el-form-item :label="$t('common.defaultBranch')" prop="default_branch">
        <el-input v-model="form.default_branch" placeholder="master" />
      </el-form-item>
      <el-form-item :label="$t('common.code')" prop="code">
        <el-input v-model="form.code" />
      </el-form-item>
      <el-form-item>
        <el-checkbox v-model="form.auto_clone">{{ $t('common.autoClone') }}</el-checkbox>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="onSubmit">{{ $t('common.confirm') }}</el-button>
        <el-button @click="$router.back()">{{ $t('common.cancel') }}</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
import axios from 'axios';
export default {
  name: 'ProjectCreate',
  data() {
    return {
      form: {
        title: '',
        git_url: '',
        default_branch: 'master',
        code: '',
        auto_clone: false
      },
      rules: {
        title: [{ required: true, message: this.$t('common.titleRequired'), trigger: 'blur' }],
        git_url: [{ required: true, message: this.$t('common.gitUrlRequired'), trigger: 'blur' }],
        code: [{ required: true, message: this.$t('common.codeRequired'), trigger: 'blur' }]
      }
    };
  },
  methods: {
    onSubmit() {
      this.$refs.formRef.validate(valid => {
        if (!valid) return;
        axios.post('/projects/', {
          title: this.form.title,
          git_url: this.form.git_url,
          default_branch: this.form.default_branch,
          code: this.form.code,
          auto_clone: this.form.auto_clone
        }).then(() => {
          this.$message.success(this.$t('common.createSuccess'));
          this.$router.replace({ name: 'Home' });
        }).catch(err => {
          this.$message.error(err.response.data.detail || this.$t('common.createError'));
        });
      });
    }
  }
};
</script>

<style scoped>
.project-create-container {
  max-width: 600px;
  margin: 20px auto;
  padding: 20px;
  background: #fff;
  border-radius: 4px;
}
.form {
  margin-top: 20px;
}
</style>