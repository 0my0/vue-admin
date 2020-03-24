<template>
  <div class="app-container">
    <el-row>
      <el-button type="primary" icon="el-icon-plus" @click="dialogFormVisible = true">添加人员</el-button>
      <el-dialog title="添加/修改人员" :visible.sync="dialogFormVisible">
        <el-form :model="form">
          <el-form-item label="所属部门" :label-width="formLabelWidth">
            <el-select v-model="form.role_id" placeholder="请选择部门">
              <el-option v-for="(val, key) in departmentName" :key="key" :label="val.role_name" :value="val.role_id"></el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="登录名" :label-width="formLabelWidth">
            <el-input v-model="form.admin_name" autocomplete="off"></el-input>
          </el-form-item>
          <el-form-item label="登录密码" :label-width="formLabelWidth">
            <el-input v-model="form.password" autocomplete="off"></el-input>
          </el-form-item>
          <el-form-item label="姓名" :label-width="formLabelWidth">
            <el-input v-model="form.name" autocomplete="off"></el-input>
          </el-form-item>
        </el-form>
        <div slot="footer" class="dialog-footer">
          <el-button @click="dialogFormVisible = false">取 消</el-button>
          <el-button type="primary" @click="createPerson">确 定</el-button>
        </div>
      </el-dialog>
    </el-row>
    <div>
      <el-form :inline="true" :model="formInline" class="demo-form-inline">
        <el-form-item label="帐号">
          <el-input v-model="formInline.admin_name" placeholder="账号"></el-input>
        </el-form-item>
        <el-form-item label="姓名">
          <el-input v-model="formInline.name" placeholder="姓名"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="onSubmit">查询</el-button>
        </el-form-item>
      </el-form>
    </div>
    <div>
      <el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal" @select="handleSelect">
        <el-menu-item index="1" @contextmenu.prevent.native="openAddMenu(1,$event)">盛驰网络科技有限公司</el-menu-item>
        <el-menu-item v-for="(val, key) in departmentName" :index="(key+2).toString()" @contextmenu.prevent.native="openOptionMenu((key+2),val.role_id,$event)">{{val.role_name}}</el-menu-item>
      </el-menu>
      <div class="line"></div>
      <div class="admin-table">
        <el-table
          border
          :data="tableData"
          @row-contextmenu="rightClick"
          style="width: 100%">
          <el-table-column
            prop="role_name"
            label="角色">
          </el-table-column>
          <el-table-column
            prop="admin_name"
            label="登录帐号">
          </el-table-column>
          <el-table-column
            prop="name"
            label="姓名">
          </el-table-column>
          <el-table-column
            prop="last_login"
            label="最后登录"
            width="180">
          </el-table-column>
          <el-table-column
            prop="cishu"
            label="登录次数">
          </el-table-column>
          <el-table-column
            prop="dateline"
            label="创建时间"
            width="180">
          </el-table-column>
          <el-table-column
            prop="create_name"
            label="创建人">
          </el-table-column>
        </el-table>
      </div>

      <ul v-show="visible" :style="{left:left+'px',top:top+'px'}" class="contextmenu">
        <li @click="dialogAddFormVisible = true">添加部门</li>
      </ul>
      <ul v-show="optionVisible" :style="{left:left+'px',top:top+'px'}" class="contextmenu">
        <li  @click="deleteDepartment">删除选择部门</li>
        <li @click="getRoles" v-show="activeIndex !== '2'">权限设置</li>
      </ul>
      <ul v-show="adminVisible" :style="{left:left+'px',top:top+'px'}" class="contextmenu">
        <li @click="dialogPersonFormVisible = true">修改选择人员</li>
        <li @click="deletePerson">删除选择人员</li>
      </ul>

      <el-dialog title="添加/修改人员" :visible.sync="dialogPersonFormVisible">
        <el-form :model="personForm">
          <el-form-item label="所属部门" :label-width="formLabelWidth">
            <el-select v-model="personForm.role_id" placeholder="请选择部门">
              <el-option v-for="(val, key) in departmentName" :key="key" :label="val.role_name" :value="val.role_id"></el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="登录名" :label-width="formLabelWidth">
            <el-input v-model="personForm.admin_name" autocomplete="off"></el-input>
          </el-form-item>
          <el-form-item label="登录密码" :label-width="formLabelWidth">
            <el-input v-model="personForm.password" autocomplete="off"></el-input>
          </el-form-item>
          <el-form-item label="姓名" :label-width="formLabelWidth">
            <el-input v-model="personForm.name" autocomplete="off"></el-input>
          </el-form-item>
        </el-form>
        <div slot="footer" class="dialog-footer">
          <el-button @click="dialogPersonFormVisible = false">取 消</el-button>
          <el-button type="primary" @click="modifyPerson">确 定</el-button>
        </div>
      </el-dialog>

      <el-dialog title="添加部门" :visible.sync="dialogAddFormVisible">
        <el-form :model="addForm">
          <el-form-item label="部门或组的名称" :label-width="formLabelWidth">
            <el-input v-model="addForm.role_name" autocomplete="off"></el-input>
          </el-form-item>
        </el-form>
        <div slot="footer" class="dialog-footer">
          <el-button @click="dialogAddFormVisible = false">取 消</el-button>
          <el-button type="primary" @click="createRole()">添加</el-button>
        </div>
      </el-dialog>

      <el-dialog title="部门权限设置" :visible.sync="dialogPermissionVisible" >
        <el-form :model="roleForm" label-width="80px" label-position="left">
          <el-form-item label="Menus">
            <el-tree
              ref="tree"
              :check-strictly="checkStrictly"
              :data="routesData"
              :props="defaultProps"
              show-checkbox
              node-key="path"
              class="permission-tree"
            />
          </el-form-item>
        </el-form>
        <div style="text-align:right;">
          <el-button type="danger" @click="dialogPermissionVisible=false">取消</el-button>
          <el-button type="primary" @click="confirmRole">保存</el-button>
        </div>
      </el-dialog>

    </div>

  </div>
</template>

<script>
  import SystemManager from  '@/api/system-manager'
  import { getToken} from '@/utils/auth'
  import toJsonData from '@/api/jsonformdata'
  import {constantRoutes,asyncRoutes} from '@/router'
  import { deepClone } from '@/utils/index.js'
  import path from 'path'
  import {getRoles ,updateRole} from '@/api/role'
  const defaultRole = {
    routes: {}
  }
  export default {
    name: 'department',
    data(){
      return {
        formInline: {
          admin_name: '',
          name: ''
        },
        activeIndex: '1',
        token: getToken(),
        adminId: '',
        departmentName: [],
        dialogFormVisible: false,
        dialogAddFormVisible:false,
        dialogPersonFormVisible: false,
        dialogPermissionVisible:false,
        checkStrictly: false,
        formLabelWidth: '120px',
        visible: false,
        optionVisible:false,
        adminVisible:false,
        tableData: [{}],
        top: 0,
        left: 0,
        selectedTag: {},
        affixTags: [],
        routes: [],
        defaultProps: {
          children: 'children',
          label: 'title'
        },
        form: {
          role_id: '',
          admin_name: '',
          password: '',
          name: ''
        },
        personForm: {
          role_id: '',
          admin_name: '',
          password: '',
          name: ''
        },
        addForm: {
          role_name: ''
        },
        roleForm:  Object.assign({}, defaultRole),
        departmentId: ''
      }
    },
    methods: {
      onSubmit() {
        const postData = toJsonData.JsonData(this.formInline)
        SystemManager.searchPeople(postData, this.token).then(data => {
          this.tableData = data.data;
        })
      },
      async getRoutes() {
        const routes = deepClone([...constantRoutes, ...asyncRoutes])
        this.serviceRoutes = routes
        this.routes = this.generateRoutes(routes)
      },
      async getRoles() {
        this.dialogPermissionVisible = true
        getRoles(this.departmentId ,this.token).then(data => {
          const dataChecked = data.data;
          this.$refs.tree.setCheckedKeys(dataChecked)
        })
      },
      generateRoutes(routes, basePath = '/') {
        const res = []
        for (let route of routes) {
          // skip some route
          if (route.hidden) { continue }
          const onlyOneShowingChild = this.onlyOneShowingChild(route.children, route)
          if (route.children && onlyOneShowingChild && !route.alwaysShow) {
            route = onlyOneShowingChild
          }
          const data = {
            path: path.resolve(basePath, route.path),
            title: route.meta && route.meta.title
          }
          // recursive child routes
          if (route.children) {
            data.children = this.generateRoutes(route.children, data.path)
          }
          res.push(data)
        }
        return res
      },
      onlyOneShowingChild(children = [], parent) {
        let onlyOneChild = null
        const showingChildren = children.filter(item => !item.hidden)
        // When there is only one child route, the child route is displayed by default
        if (showingChildren.length === 1) {
          onlyOneChild = showingChildren[0]
          onlyOneChild.path = path.resolve(parent.path, onlyOneChild.path)
          return onlyOneChild
        }
        // Show parent if there are no child route to display
        if (showingChildren.length === 0) {
          onlyOneChild = { ... parent, path: '', noShowingChildren: true }
          return onlyOneChild
        }

        return false
      },
      confirmRole() {
        const checkedKeys = this.$refs.tree.getCheckedKeys()
        const formData = new FormData()
        formData.append('data[priv]', (checkedKeys).join())
        updateRole(formData,this.departmentId, this.token).then(data => {
          this.$message({
            message:data.data.log,
            type: 'success'
          })
          this.closeDialog();
          // this.getRoleIndex();
        })
      },
      generateTree(routes, basePath = '/', checkedKeys) {
        const res = []

        for (const route of routes) {
          const routePath = path.resolve(basePath, route.path)

          // recursive child routes
          if (route.children) {
            route.children = this.generateTree(route.children, routePath, checkedKeys)
          }

          if (checkedKeys.includes(routePath) || (route.children && route.children.length >= 1)) {
            res.push(route)
          }
        }
        return res
      },
      handleSelect(key, keyPath) {
        if(key > 1){
        this.departmentId = this.departmentName[key-2].role_id;
      }else{
        this.departmentId = ''
      }
        // this.departmentId
        SystemManager.getAdminIndex(this.departmentId , this.token).then(data => {
            this.tableData = data.data;
            console.log(this.tableData)
        })
      },
      getRoleIndex() {
        this.departmentName =[];
            SystemManager.getRoleIndex(this.token).then(data => {
              const arrData = Object.entries(data.data)
              arrData.forEach(res => {
                this.departmentName.push({
                  'role_id': res[1].role_id,
                  'role_name':res[1].role_name
                })
              })
            }).catch(error => {
              console.log(error)
        })
      },
      createRole() {
        const postData = toJsonData.JsonData(this.addForm)
        SystemManager.createRole(postData, this.token).then(data => {
          this.$message({
            message:data.data.log,
            type: 'success'
          })
          this.closeDialog();
          this.getRoleIndex();
        }).catch(error => {
          console.log(error)
        })
      },
      createPerson() {
        const postData = toJsonData.JsonData(this.form)
        SystemManager.createPerson(postData, this.token).then(data=> {
          this.$message({
            message:data.data.log,
            type: 'success'
          })
          this.handleSelect();
          this.closeDialog();

        }).catch(error => {
          console.log(error)
        })
        this.form= {}
      },
      modifyPerson() {
        const postData = toJsonData.JsonData(this.personForm)
        SystemManager.modifyPerson(postData, this.token, this.adminId).then(data => {
          this.$message({
            message:data.data.log,
            type: 'success'
          })
          this.handleSelect(parseInt(this.departmentId) +1);
          this.closeDialog();
        }).catch(error => {
          console.log(error)
        })
      },
      deleteDepartment() {
        this.$confirm('此操作将永久删除该文件, 是否继续?', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(() => {
          SystemManager.deleteRole(this.departmentId, this.token).then(data => {
            this.getRoleIndex();
          })
          // this.$message({
          //   type: 'success',
          //   message: '删除成功!'
          // });
        }).catch(() => {
          this.$message({
            type: 'info',
            message: '已取消删除'
          });
        });
      },
      deletePerson(){
        this.$confirm('此操作将永久删除该文件, 是否继续?', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(() => {
          SystemManager.deletePerson(this.adminId, this.token).then(data => {
            this.$message({
              message:data.data.log,
              type: 'success'
            })
            this.handleSelect(parseInt(this.departmentId) +1);
            this.closeDialog();
          })
        }).catch(() => {
          this.$message({
            type: 'info',
            message: '已取消删除'
          });
        });
      },
      openAddMenu(tag,e) {
        this.activeIndex = tag.toString()
        // this.departmentId = departmentId
        this.handleSelect(parseInt(this.activeIndex));
        this.publicMenu(e);
        this.visible = true
        this.optionVisible = false
        // this.selectedTag = tag
      },
      openOptionMenu(tag,departmentId, e) {
        this.activeIndex = tag.toString()
        this.departmentId = departmentId
        // console.log(departmentId)
        this.publicMenu(e);
        this.handleSelect(parseInt(this.departmentId) +1);
        this.optionVisible = true
        this.visible = false
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
      rightClick(row, column, e) {
        e.preventDefault();
        this.personForm = {
          role_id: row.role_id,
          admin_name: row.admin_name,
          password: '',
          name: row.name
        }
      this.adminId = row.admin_id
        this.publicMenu(e);
        this.adminVisible = true
      },
      closeMenu() {
        this.visible = false
        this.optionVisible = false
        this.adminVisible = false
      },
      closeDialog() {
        this.dialogAddFormVisible = false;
        this.dialogFormVisible = false;
        this.dialogPersonFormVisible = false;
        this.dialogPermissionVisible = false;
      }
    },
    computed: {
      routesData() {
        return this.routes
      }
    },
    created(){
      this.getRoleIndex();
      this.handleSelect();
      this.getRoutes();
    },
    watch: {
      visible(value) {
        if (value) {
          document.body.addEventListener('click', this.closeMenu)
        } else {
          document.body.removeEventListener('click', this.closeMenu)
        }
      },
      optionVisible(value){
        if (value) {
          document.body.addEventListener('click', this.closeMenu)
        } else {
          document.body.removeEventListener('click', this.closeMenu)
        }
      },
      adminVisible(value){
        if (value) {
          document.body.addEventListener('click', this.closeMenu)
        } else {
          document.body.removeEventListener('click', this.closeMenu)
        }
      }
    }
  }
</script>

<style scoped lang="scss">
  .el-row{
    margin-bottom: 30px;
  }
  .contextmenu {
    margin: 0;
    background: #fff;
    z-index: 3000;
    position: absolute;
    list-style-type: none;
    padding: 5px 0;
    border-radius: 4px;
    font-size: 12px;
    font-weight: 400;
    color: #333;
    box-shadow: 2px 2px 3px 0 rgba(0, 0, 0, .3);
    li {
      margin: 0;
      padding: 7px 16px;
      cursor: pointer;
      &:hover {
        background: #eee;
      }
    }
  }
  .admin-table{
    margin-top: 30px;
  }
</style>
