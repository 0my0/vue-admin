<template>
  <div class="app-container">
    <el-row>
      <el-button type="primary" icon="el-icon-plus" @click="handleAddSite">添加游戏</el-button>
      <el-dialog title="添加/修改游戏" :visible.sync="dialogEditFormVisible" :title="dialogType==='add'?'添加游戏':'修改游戏'">
        <el-form :model="editGameForm">
          <el-form-item label="英文名称" :label-width="formLabelWidth">
            <el-input v-model="editGameForm.title" autocomplete="off"></el-input>
          </el-form-item>
          <el-form-item label="sku" :label-width="formLabelWidth">
            <el-input v-model="editGameForm.sku_game" autocomplete="off"></el-input>
          </el-form-item>
          <el-form-item label="" :label-width="formLabelWidth">
            <el-checkbox-group v-model="editGameForm.is_hidden">
              <el-checkbox v-for="(val, key) in isHidden" :label="val.is_hidden" :value="1"></el-checkbox>
            </el-checkbox-group>
          </el-form-item>
        </el-form>
        <div slot="footer" class="dialog-footer">
          <el-button @click="dialogEditFormVisible = false">取 消</el-button>
          <el-button type="primary" @click="createGame">确 定</el-button>
        </div>
      </el-dialog>
    </el-row>
    <el-table
      :data="tableData"
      border
      @row-contextmenu="rightClick"
      :row-class-name="tableRowClassName"
      style="width: 100%">
      <el-table-column
        prop="game_id"
        label="编码">
      </el-table-column>
      <el-table-column
        prop="title"
        label="英文名称">
      </el-table-column>
      <el-table-column
        prop="sku_game"
        label="sku">
      </el-table-column>
      <el-table-column
        prop="dateline"
        label="添加时间"
        width="180">
      </el-table-column>
      <el-table-column
        prop="admin_name"
        label="操作人"
        width="180">
      </el-table-column>
    </el-table>
    <ul v-show="optionVisible" :style="{left:left+'px',top:top+'px'}" class="contextmenu">
      <li @click="handleEditGame">修改游戏</li>
    </ul>
  </div>
</template>
<style scoped>
  .el-row{
    margin-bottom: 30px;
  }
</style>
<script>
  import SystemManager from  '@/api/system-manager'
  import { getToken} from  '@/utils/auth'
  import toJsonData from '@/api/jsonformdata'
  export default {
    name: 'game-server',
    data() {
      return {
        dialogType: 'add',
        tableData: [],
        token: getToken(),
        dialogEditFormVisible:false,
        formLabelWidth: '120px',
        optionVisible: false,
        editGameForm: {
          title: '',
          sku_game: '',
          is_hidden: false
        },
        gameId: '',
        left: '0px',
        top: '0px',
        isHidden: [{'is_hidden': '禁用此游戏'}]
      }
    },
    methods: {
      handleAddSite() {
        this.editGameForm= {
          title: '',
            sku_game: '',
            is_hidden: false
        }
        this.dialogType = 'add';
        this.dialogEditFormVisible = true;
      },
      handleEditGame() {
        this.dialogType = 'edit';
        this.dialogEditFormVisible = true;
      },
      rightClick(row, column, e){
        e.preventDefault();
        this.publicMenu(e);
        var isHiddenValue = false;
        if(row.is_hidden === '0') {
          isHiddenValue = true
        }else{
          isHiddenValue = false
        }
        this.gameId = row.game_id;
        this.editGameForm = {
          title: row.title,
          sku_game: row.sku_game,
          is_hidden: isHiddenValue
        }
        this.optionVisible = true
      },
      publicMenu(e){
      const menuMinWidth = 105
      const offsetLeft = this.$el.getBoundingClientRect().left // container margin left
      const offsetWidth = this.$el.offsetWidth // container width
      const maxLeft = offsetWidth - menuMinWidth // left boundary
      const left = e.clientX - offsetLeft + 15 // 15: margin right
      if (left > maxLeft) {
        this.left = maxLeft
      } else {
        this.left = left
      }
      this.top = e.pageY - 80
    },
      tableRowClassName({row, rowIndex}) {
        if(row.is_hidden === '0') {
           return 'hidden_row'
         }else{
           return ''
         }
      },
      createGame() {
       const postData = toJsonData.JsonData(this.editGameForm)
        const isAdd = this.dialogType === 'add'
        if(isAdd) {
          SystemManager.createGame(postData,this.token).then(data => {
            this.$message({
              message: data.data.log,
              type: 'success'
            })
            this.getGameIndex();
            this.closeDialog();
          })
        }else{
          SystemManager.editGame(postData, this.gameId, this.token).then(data => {
            this.$message({
              message: data.data.log,
              type: 'success'
            })
            this.getGameIndex();
            this.closeDialog();
          })
        }
        this.editGameForm = {
          title: '',
          sku_game:'',
          is_hidden: false
        }
      },
      getGameIndex() {
        SystemManager.getGameIndex(this.token).then(data => {
          this.tableData = data.data
        }).catch(error => {
          console.log(error)
        })
      },
      closeDialog() {
        this.dialogEditFormVisible = false;
      },
      closeMenu() {
        this.optionVisible = false
      }
    },
    created() {
      this.getGameIndex();
    },
    watch: {
      optionVisible(value) {
        if(value) {
          document.body.addEventListener('click', this.closeMenu)
        }else{
          document.body.removeEventListener('click', this.closeMenu)
        }
      }
    }
  }
</script>

