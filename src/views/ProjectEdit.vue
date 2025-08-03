<template>
  <div class="project-edit-container">
    <el-page-header :content="$t('common.editProject')" @back="$router.back()" />
    <el-form :model="form" ref="formRef" label-width="120px" class="form">
      <el-form-item :label="$t('common.title')">
        <el-input v-model="form.title" disabled />
      </el-form-item>
      <el-form-item :label="$t('common.gitUrl')">
        <el-input v-model="form.git_url" disabled />
      </el-form-item>
      <el-form-item :label="$t('common.code')">
        <el-input v-model="form.code" disabled />
      </el-form-item>
      <el-form-item :label="$t('common.defaultBranch')">
        <el-input v-model="form.default_branch" disabled />
      </el-form-item>
      <el-form-item :label="$t('common.currentBranch')" prop="current_branch">
        <el-select v-model="form.current_branch" placeholder="{{ $t('common.selectBranch') }}">
          <el-option
            v-for="branch in branches"
            :key="branch"
            :label="branch"
            :value="branch"
          />
        </el-select>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="switchBranch">{{ $t('common.switchBranch') }}</el-button>
        <el-button @click="$router.back()">{{ $t('common.cancel') }}</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
import axios from 'axios';
export default {
  name: 'ProjectEdit',
  props: ['id'],
  data() {
    return {
      form: {
        title: '',
        git_url: '',
        code: '',
        default_branch: '',
        current_branch: ''
      },
      branches: []
    };
  },
  created() {
    this.fetchProject();
    this.fetchBranches();
  },
  methods: {
    fetchProject() {
      axios.get(`/api/projects/${this.id}/`).then(res => {
        const data = res.data;
        this.form = {
          title: data.title,
          git_url: data.git_url,
          code: data.code,
          default_branch: data.default_branch,
          current_branch: data.current_branch
        };
      });
    },
    fetchBranches() {
      axios.get(`/api/projects/${this.id}/branches/`).then(res => {
        this.branches = res.data;
      });
    },
    switchBranch() {
      axios.patch(`/api/projects/${this.id}/switch-branch/`, {
        branch: this.form.current_branch
      }).then(() => {
        this.$message.success(this.$t('common.switchSuccess'));
        this.$router.back();
      }).catch(err => {
        this.$message.error(err.response.data.detail || this.$t('common.switchError'));
      });
    }
  }
};
</script>

<style scoped>
.project-edit-container {
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