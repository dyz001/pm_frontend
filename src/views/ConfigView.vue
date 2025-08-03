<template>
  <el-page-header :content="$t('common.globalConfig')" />
  <el-form :model="config" label-width="120px">
    <el-form-item :label="$t('common.projectRoot')">
      <el-input v-model="config.projects_root" />
    </el-form-item>
    <el-form-item :label="$t('common.editorPath')">
      <el-input
        type="textarea"
        v-model="config.editor_paths"
        placeholder="请填写 JSON 格式"
        rows="6"
      />
    </el-form-item>
    <el-form-item :label="$t('common.rsyncGroup')">
      <el-input
        type="textarea"
        v-model="config.rsync_groups"
        placeholder="请填写 JSON 格式"
        rows="6"
      />
    </el-form-item>
    <el-form-item :label="$t('common.outputRoot')">
      <el-input v-model="config.output_root" />
    </el-form-item>
    <el-form-item :label="$t('common.logDirector')">
      <el-input v-model="config.log_directory" />
    </el-form-item>
    <el-form-item>
      <el-button type="primary" @click="save">{{$t("common.save")}}</el-button>
    </el-form-item>
  </el-form>
</template>

<script>
import axios from 'axios';
export default {
  data() {
    const initial = {
      editor_paths: {
        cocos_creator: { '3.3.0': '/opt/CocosCreator3.3.0/CocosCreator' },
        egret_wing: '/opt/EgretWing/EgretWing.exe'
      }
    }
    return { // 初始给一个“空”但符合结构的对象
      config: {
        editor_paths: JSON.stringify({"cocoscreator":[{version: "3.8.0", path:""}]}),
        projects_root: '',
        rsync_groups: JSON.stringify({"test":"A03"}),
        output_root: '',
        ssh_keys: [],
        log_directory: ''
      },
      jsonText: JSON.stringify(initial, null, 2),
      editorOptions: {
        automaticLayout: true,
        minimap: { enabled: false },
        readOnly: false
      }
    };
  },
  created() {
     axios.get('/config/')
      .then(res => {
        if (res.data.length > 0) {
          // 有数据时覆盖
          this.config = res.data[0]
        }
        // 无论是否有数据，都要把 rsync_groups 转成文本形式，方便编辑
        this.rsyncJson = JSON.stringify(this.config.rsync_groups, null, 2)
      })
      .catch(() => {
        // 请求失败也不报错，保持默认即可
      })
  },
  methods: {
    save() {
      axios.put(`/config/${this.config.id}/`, this.config)
        .then(() => this.$message.success(this.$t('common.saveSuccess')));
    }
  }
};
</script>