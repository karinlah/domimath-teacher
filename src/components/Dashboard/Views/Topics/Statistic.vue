<template>
  <div>
    <!--Accordion-->


    <div class="row">
      <div class="col-lg-12 col-sm-12">
      <div class="card card-plain" style="text-align:right">
        <div class="card-content">
          <el-collapse>
            <el-collapse-item title="סטטוס שלבים נוכחי" name="1" @click.native="initPieChart()">
              <div class="row">
              <div class="col-lg-4 col-sm-6" v-for="stats in statsCards">
                <stats-card>
                  <div class="icon-big text-center" :class="`icon-${stats.type}`" slot="header">
                    <i :class="stats.icon"></i>
                  </div>
                  <div class="numbers"  style="padding-right:25px;" slot="content">
                    <p>{{stats.title}}</p>
                    {{stats.value}}
                  </div>
                  <div class="stats" slot="footer">
                    <i :class="stats.footerIcon"></i> {{stats.footerText}}
                  </div>
                </stats-card>
              </div>
              </div>
              <div class="row margin-top">
               <div class="col-md-10 col-md-offset-1">
                  <h4>פילוג תלמידים לפי שלב נוכחי </h4>
                  <div id="chartPreferences" class="ct-chart"></div>
               </div>
              </div>
              <div class="row">
               <div class="col-md-10 col-md-offset-1">
                  <i class="fa fa-circle text-danger"></i> Level 1
                  <i class="fa fa-circle text-warning"></i> Level 2
                  <i class="fa fa-circle text-info"></i> Level 3
                  <i class="fa fa-circle text-primary"></i> Level 4
                  <i class="fa fa-circle text-success"></i> Level 5
               </div>
              </div>
            </el-collapse-item>
            <el-collapse-item title="סטטוס לפי תלמיד" name="2" @click.native="initViewsChart()">

              <div id="chartViews" class="ct-chart"></div>
              <h5 class="text-muted"> לפי חישוב משוכלל של רמה נוכחית וממוצע התקדמות לפי שלב* </h5>
              <span class="label label-danger">חריגים: עומרי ירון אפק וקטיה</span>
              <span class="label label-success">מצטיינים: מוריה שאול</span>
            </el-collapse-item>
            <el-collapse-item title="שנתי - התקדמות כיתית" name="3" @click.native="initStockChart()">
              <div id="chartStock" class="ct-chart">
                <h5>ממוצע שלבים כיתתי בחלוקה חודשית</h5>
              </div>
            </el-collapse-item>
          </el-collapse>
        </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>

  import StatsCard from 'src/components/UIComponents/Cards/StatsCard.vue'
  import ChartCard from 'src/components/UIComponents/Cards/ChartCard.vue'
  import {Collapse, CollapseItem} from 'element-ui'
  import Chartist from 'chartist'

  export default {
    components: {
      StatsCard,
      ChartCard
    },
    async mounted () {
      console.log('mounted');
      const Chartist = await import('chartist')
      this.$Chartist = Chartist
      // this.initCharts()
    },
    created() {
      //do something after creating vue instance
      console.log('updated');
    },
    methods: {
      initViewsChart () {
         const dataViews = {
           labels: ['קטיה', 'עומרי' ,'ירון' , 'אפק' , 'מאי' , 'מור' , 'רעות','הילה', 'מורן', 'גל','שאול','מוריה'],
           series: [
             [1, 1, 1, 1, 2, 2, 2, 3,3, 3, 5, 5]
           ]
         };
         const optionsViews = {
           seriesBarDistance: 10,
           classNames: {
             bar: 'ct-bar'
           },
           axisX: {
             showGrid: false,
           },
           height: "200px",
           lineSmooth: Chartist.Interpolation.cardinal({
              tension: 0.2
            })
         };
         const responsiveOptionsViews = [
           ['screen and (max-width: 640px)', {
             seriesBarDistance: 5,
             axisX: {
               labelInterpolationFnc: function (value) {
                 return value[0];
               }
             }
           }]
         ];
         Chartist.Bar('#chartViews', dataViews, optionsViews, responsiveOptionsViews);
      },
      initPieChart () {
        Chartist.Pie('#chartPreferences', {
          labels: ['40%','20%','10%', '17%', '13%'],
          series: [40, 20, 10, 17, 13]
        },
        {
          height: "250px",donut: true, chartPadding: 30,
          labelOffset: 50,
          labelDirection: 'explode'}
        );
      },
      initStockChart () {
        const dataStock = {
          labels: ['Jan', 'Feb', 'Mar', 'Apr', 'Mai', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
          series: [
            [1, 1, 1, 2, 2, 2, 2, 2, 3, 3, 4, 4]
          ]
        }
        const optionsStock = {
          lineSmooth: false,
          axisY: {
            offset: 40,
            labelInterpolationFnc: function (value) {
              return `$${value}`
            }

          },
          low: 1,
          height: '200px',
          high: 5,
          classNames: {
            point: 'ct-point ct-green',
            line: 'ct-line ct-green'
          }
        }
        Chartist.Line('#chartStock', dataStock, optionsStock)
      }
    },
    /**
     * Chart data used to render stats, charts. Should be replaced with server data
     */
    data () {
      return {
        $Chartist: null,
        statsCards: [
          {
            type: 'warning',
            icon: 'ti-pie-chart',
            title: 'רמה 1',
            value: 'שלושה ימים',
            footerText: '3% חריגים',
            footerIcon: 'ti-flag'
          },
          {
            type: 'success',
            icon: 'ti-pie-chart',
            title: 'רמה 2',
            value: 'שבועיים',
            footerText: 'אין חריגים',
            footerIcon: 'ti-flag'
          },
          {
            type: 'danger',
            icon: 'ti-pie-chart',
            title: 'רמה 3',
            value: '10 ימים ',
            footerText: '12% חריגים',
            footerIcon: 'ti-flag'
          },
          {
            type: 'success',
            icon: 'ti-pie-chart',
            title: 'רמה 4',
            value: 'שלושה שבועות',
            footerText: '1% חריגים',
            footerIcon: 'ti-flag'
          },
          {
            type: 'danger',
            icon: 'ti-pie-chart',
            title: 'רמה 5',
            value: 'חודש',
            footerText: '20% חריגים',
            footerIcon: 'ti-flag'
          },
        ],
        earningsChart: {
          data: {
            labels: ['Jan', 'Feb', 'Mar', 'April', 'May', 'June'],
            series: [
              [230, 340, 400, 300, 570, 500, 800]
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
              line: 'ct-line ct-green'
            }
          }
        }
      }
    }
  }

</script>
<style>

</style>
