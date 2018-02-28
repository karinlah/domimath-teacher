<template>
  <div class="row">
    <div class="col-md-6">
      <!-- <task-list></task-list> -->

      <div class="card card-chat">
        <div class="card-header">
          <h4 class="card-title">ההודעות שלי</h4>
          <p class="category">המורה ליאור</p>
        </div>
        <div class="card-content">
          <ol class="chat">
            <li class="other">
              <div class="msg">
                <p>
היי אפק, ראיתי שהתקדמת יפה בתת הנושא משולשים בגיאומטריה וכבר הגעת לרמת תרגול 5. עם זאת, רציתי להסב את תשומת ליבך לכך שאתה בשלב 2 בתת הנושא נגזרות ושימושי משיק בחדו"א מזה מספר שבועות. המלצתי היא לשים דגש על תרגול תת נושא זה, ולהיעזר בחבריך לקבוצת התרגול ובפעילות בקהילה
                </p>
                <div class="card-footer">
                  <i class="ti-check"></i>
                  <h6>11:22</h6>
                </div>
              </div>
              <div class="avatar">
                <img src="static/img/faces/teacher.jpg" alt="crash"/>
              </div>
            </li>
            <li class="self">
              <div class="avatar">
                <img src="static/img/faces/face-05.jpg" alt="crash"/>
              </div>
              <div class="msg">
                <p>
                כן, אני באמת מתקשה בחדו"א. אנסה לתרגל יותר תת נושא זה
                </p>
                <div class="card-footer">
                  <i class="ti-check"></i>
                  <h6>11:24</h6>
                </div>
              </div>
            </li>
            <li class="other">
              <div class="avatar">
                <img src="static/img/faces/teacher.jpg" alt="crash"/>
              </div>
              <div class="msg">
                <p>
                  מצוין, בכל מקרה שים לב שמערכת השעות שלך התעדכנה ובשבוע הבא יתקיים שיעור תגבור בחדו"א
                </p>
                <div class="card-footer">
                  <i class="ti-check"></i>
                  <h6>11:25</h6>
                </div>
              </div>
              <div class="no-avatar"></div>
            </li>
            <li class="self">
              <div class="avatar">
                <img src="static/img/faces/face-05.jpg" alt="crash"/>
              </div>
              <div class="msg">
                <p>
                  תודה רבה!
                </p>
                <div class="card-footer">
                  <i class="ti-check"></i>
                  <h6>11:25</h6>
                </div>
              </div>
            </li>
          </ol>
          <hr>
          <div class="send-message">
            <div class="avatar">
              <img src="static/img/faces/teacher.jpg" alt="crash"/>
            </div>
            <input class="form-control textarea" type="text" placeholder="Type here!"/>
            <div class="send-button">
              <button class="btn btn-primary btn-fill">Send</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
  import TimeLine from './Stats/TimeLine.vue'
  import TimeLineItem from './Stats/TimeLineItem.vue'
  import TaskList from './Stats/TaskList'
  import ChartCard from 'src/components/UIComponents/Cards/ChartCard.vue'

  export default {
    components: {
      TimeLine,
      TimeLineItem,
      ChartCard,
      TaskList
    },
    data () {
      return {
        salesChart: {
          data: {
            labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
            series: [
              [542, 543, 520, 680, 653, 753, 326, 434, 568, 610, 756, 895],
              [230, 293, 380, 480, 503, 553, 600, 664, 698, 710, 736, 795]
            ]
          },
          options: {
            seriesBarDistance: 10,
            axisX: {
              showGrid: false
            },
            height: '245px'
          }
        },
        usersChart: {
          data: {
            labels: ['9AM', '12AM', '3PM', '6PM', '9PM', '12PM', '3AM', '6AM'],
            series: [
              [287, 385, 490, 562, 594, 626, 698, 895, 952],
              [67, 152, 193, 240, 387, 435, 535, 642, 744],
              [23, 113, 67, 108, 190, 239, 307, 410, 410]
            ]
          },
          options: {
            low: 0,
            high: 1000,
            showArea: true,
            height: '245px',
            axisX: {
              showGrid: false
            },
            showLine: true,
            showPoint: false
          }
        },
        subscriptionsChart: {
          data: {
            labels: ['M', 'T', 'W', 'T', 'F', 'S', 'S'],
            series: [
              [60, 50, 30, 50, 70, 60, 90, 100]
            ]
          },
          options: {
            showPoint: false,
            lineSmooth: true,
            height: '210px',
            axisX: {
              showGrid: false,
              showLabel: true
            },
            axisY: {
              offset: 40,
              showGrid: false
            },
            low: 0,
            high: 'auto',
            classNames: {
              line: 'ct-line ct-red'
            }
          }
        },
        downloadsChart: {
          data: {
            labels: ['2009', '2010', '2011', '2012', '2013', '2014'],
            series: [
              [1200, 1000, 3490, 8345, 3256, 2566]
            ]
          },
          options: {
            showPoint: false,
            lineSmooth: true,
            height: '210px',
            axisX: {
              showGrid: false,
              showLabel: true
            },
            axisY: {
              offset: 40,
              showGrid: false
            },
            low: 0,
            high: 'auto',
            classNames: {
              line: 'ct-line ct-orange'
            }
          }
        }
      }
    }
  }
</script>
<style>
</style>
