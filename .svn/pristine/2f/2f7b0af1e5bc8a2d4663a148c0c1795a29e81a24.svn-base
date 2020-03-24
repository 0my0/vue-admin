<template>
  <div class="app-container">
    <el-row>
      <el-button type="primary" icon="el-icon-plus" @click="saveChange">保存更改</el-button>
    </el-row>
    <el-table
      :data="tableData"
      border
      style="width: 100%">
      <el-table-column
        prop="title"
        label="英文名称">
      </el-table-column>
      <el-table-column label="是否显示" :label-width="formLabelWidth">
        <template slot-scope="scope">
            <el-checkbox v-model="scope.row.is_have"></el-checkbox>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
  import SystemManager from  '@/api/system-manager'
  import { getToken} from  '@/utils/auth'
  import toJsonData from '@/api/jsonformdata'
  export default {
    name:'game-config',
    data(){
      return{
        tableData: [],
        formLabelWidth: '120px',
        token: getToken(),
        siteId:'',
        gameEditForm: {
          game_ids: []
        }
      }
    },
    methods: {
      gameConfig(){
        SystemManager.getGameConfigIndex(this.siteId,this.token).then(data => {
          this.tableData=data.data
        })
      },
      saveChange() {
        this.gameEditForm.game_ids = [];
        this.tableData.forEach(item => {
          if(item.is_have == true){
            this.gameEditForm.game_ids.push(item.game_id)
          }
        })
       const postData = toJsonData.JsonData(this.gameEditForm);
        SystemManager.saveGameConfigIndex(postData,this.siteId,this.token).then(data=> {
          this.$message({
            message: data.data.log,
            type: 'success'
          })
          this.gameConfig();
        }).catch(error => {
          console.log(error)
        })
      },
    },
    created(){
      this.gameConfig();
    },
    watch: {
      $route: {
        handler: function(route) {
          this.siteId = this.$route.query.id;
        },
        immediate: true
      }
    }
  }
</script>
<style scoped>
  .el-row{
    margin-bottom: 30px;
  }
  .game-config{
    cursor: pointer;
    color: blue;
  }
</style>
