<template>
  <div class="home-container">
    <div class="header-row">
      <el-page-header :content="$t('common.projectList')" />
      <el-button type="primary" @click="$router.push({ name: 'ProjectCreate' })">
        {{ $t('common.newProject') }}
      </el-button>
    </div>
    <div class="table-container">
      <el-table :data="projects" stripe style="width: 100%; max-width: 960px;">
        <el-table-column prop="title" :label="$t('common.title')" />
        <el-table-column prop="code" :label="$t('common.code')" />
        <el-table-column prop="status" :label="$t('common.status')" :formatter="formatStatus" />
        <el-table-column prop="created_at" :label="$t('common.createdAt')" />
        <el-table-column :label="$t('common.actions')">
          <template v-slot="{ row }">
            <el-button text size="small" @click="open(row)">{{ $t('common.open') }}</el-button>
            <el-button text size="small" @click="build(row)">{{ $t('common.build') }}</el-button>
            <el-button text size="small" @click="deploy(row)">{{ $t('common.deploy') }}</el-button>
            <el-button text size="small" @click="update(row)">{{ $t('common.update') }}</el-button>
            <el-button text size="small" @click="clone(row)">{{ $t('common.clone') }}</el-button>
            <el-button text type="danger" size="small" @click="remove(row)">{{ $t('common.delete') }}</el-button>
          </template>
        </el-table-column>
      </el-table>
    </div>
    <div class="pagination-container">
      <el-pagination
        :current-page="page"
        :page-size="pageSize"
        :total="total"
        @current-change="fetch"
        layout="prev, pager, next"
      />
    </div>
  </div>
</template>

<script>
import axios from 'axios';
export default {
  name: 'HomeView',
  data() {
    return {
      projects: [],
      total: 0,
      page: 1,
      pageSize: 20
    };
  },
  created() {
    this.fetch(this.page);
  },
  methods: {
    fetch(page) {
      axios.get('/projects/', { params: { page, page_size: this.pageSize } })
        .then(res => {
          console.log(res.data);
          this.projects = res.data.results;
          this.total = res.data.count;
          this.page = page;
        });
    },
    formatStatus(row, col, value) {
      const map = {
        NotCloned: this.$t('common.notCloned'),
        Modified: this.$t('common.modified'),
        Behind: this.$t('common.behind'),
        UpToDate: this.$t('common.upToDate')
      };
      return map[value] || value;
    },
    open(row) {
      // TODO: 实现打开项目逻辑
      console.log(row);
    },
    build(row) {
      // TODO: 实现编译项目逻辑
      console.log(row);
    },
    deploy(row) {
      // TODO: 实现发布项目逻辑
      console.log(row);
    },
    update(row) {
      // TODO: 实现更新项目逻辑
      console.log(row);
    },
    clone(row) {
      // TODO: 实现克隆项目逻辑
      console.log(row);
    },
    remove(row) {
      // TODO: 实现删除项目逻辑
      console.log(row);
    }
  }
};
</script>

<style scoped>
.home-container { padding: 20px; }
.header-row { display: flex; justify-content: space-between; align-items: center; margin-bottom: 20px; }
.table-container { display: flex; justify-content: center; }
.pagination-container { margin-top: 20px; display: flex; justify-content: center; }
</style>