<template>
  <div class="user">
    <div class="photo">
      <img src="static/img/faces/teacher.jpg"/>
    </div>
    <div class="info">
      <a data-toggle="collapse" @click="toggleMenu" href="javascript:void(0)">
           <span>
             ליאור
             <b class="caret"></b>
          </span>
      </a>
      <div class="clearfix"></div>
      <div>
        <el-collapse-transition>
          <ul class="nav" v-show="!isClosed">
            <li>
              <a href="javascript:void(0)">
                <span class="sidebar-mini">Mp</span>
                <span class="sidebar-normal">הפרופיל שלי</span>
              </a>
            </li>
            <li>
              <a href="javascript:void(0)">
                <span class="sidebar-mini">Ep</span>
                <span class="sidebar-normal">ערוך</span>
              </a>
            </li>
            <li>
              <a href="javascript:void(0)">
                <span class="sidebar-mini">S</span>
                <span class="sidebar-normal">הגדרות</span>
              </a>
            </li>
          </ul>
        </el-collapse-transition>
      </div>
    </div>
  </div>
</template>
<script>
  import CollapseTransition from 'element-ui/lib/transitions/collapse-transition'
  export default {
    components: {
      [CollapseTransition.name]: CollapseTransition
    },
    data () {
      return {
        isClosed: true
      }
    },
    methods: {
      toggleMenu () {
        this.isClosed = !this.isClosed
      }
    }
  }
</script>
<style>
  .collapsed {
    transition: opacity 1s;
  }
</style>
