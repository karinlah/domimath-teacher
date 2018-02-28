<template>
  <div class="community">
    <time-line type="simple">
      <time-line-item class="timeline-inverted" badge-type="success" badgeIcon="ti-check-box">
        <span slot="header" class="label label-danger">
          <i class="ti-cup"></i> עומרי</span>
        <p slot="body" style="text-align:right">

          הסתבכתי קצת בחלק הראשון של השאלה, אבל בסוף הסתכלתי על מה שהמורה הסבירה בכיתה וזה עזר לי לפתור את התרגיל
          <img src="static/img/solutions/2.png"></img>
        <h6 slot="footer">
          <i class="ti-time"></i>
          11 hours ago <br><br>
          <i class="ti-thumb-up"></i> 35 <i class="ti-thumb-down"></i>   
        </h6>

      </time-line-item>

      <time-line-item class="timeline-inverted" badge-type="warning" badgeIcon="ti-comment">
        <span slot="header" class="label label-info">מיכל</span>
        <p slot="body">
          התשובה הנכונה היא: <br>
          F'(X) = 8/3*(x+1)^3
          <br>
          <br>
        <h6 slot="footer">
          <i class="ti-time"></i>
          Yesterday at 5PM <br><br>
          <i class="ti-thumb-up"></i> 8 <i class="ti-thumb-down"></i> 
        </h6>
      </time-line-item>

      <time-line-item class="timeline-inverted" badge-type="danger" badgeIcon="ti-comment">
        <span slot="header" class="label label-info">רועי</span>
        <p slot="body">
          התשובה הנכונה היא: <br>
          F'(X) = (x+1)^3
          <br>
          <br>
        <h6 slot="footer">
          <i class="ti-time"></i>
          Yesterday at 5PM <br><br>
          <i class="ti-thumb-up"></i> -1 <i class="ti-thumb-down"></i> 
        </h6>
      </time-line-item>
    </time-line>
  </div>
</template>

<script>
import TimeLineItem from '../Dashboard/Stats/TimeLineItem.vue'
import TimeLine from '../Dashboard/Stats/TimeLine.vue'

export default {
  components: {
    TimeLineItem,
    TimeLine
  }
}
</script>
