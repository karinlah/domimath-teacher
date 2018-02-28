<template>
  <ul class="nav nav-mobile-menu">
    <li>
      <a href="javascript:void(0)" class="dropdown-toggle btn-magnify" data-toggle="dropdown">
        <i class="ti-panel"></i>
        <p>Stats</p>
      </a>
    </li>
    <drop-down tag="li" title="4" icon="ti-bell">
      <a slot="title" href="javascript:void(0)" class="dropdown-toggle btn-rotate" data-toggle="dropdown">
        <i class="ti-bell"></i>
        <span class="notification">4</span>
        <p class="hidden-md hidden-lg">
          <!--Notifications-->
          התראות
          <b class="caret"></b>
        </p>
      </a>
      <li><a href="javascript:void(0)">רוני קיבלה את התשובה שלך!</a></li>
      <li><a href="javascript:void(0)">אהבו את התשובה שלך!</a></li>
      <li><a href="javascript:void(0)">אלמוג ביקשה את עזרתך</a></li>
      <li><a href="javascript:void(0)">מערכת שעות חדשה פורסמה</a></li>
    </drop-down>
    <li>
      <a href="javascript:void(0)" class="btn-rotate">
        <i class="ti-settings"></i>
        <p class="hidden-md hidden-lg">
          הגדרות
        </p>
      </a>
    </li>
  </ul>
</template>
<script>
  export default {}
</script>
<style>
</style>
