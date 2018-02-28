<template>
      <div class="card">
          <div class="card-content">
            <vue-tabs class="row" direction="vertical" value="Description">
              <v-tab title="גרפים ופילוחים">
<stat></stat>
              </v-tab>
              <v-tab title=" עריכת תרגילים ופתרונות">
                <p class="text-primary">   כאן המורה יוכל לערוך תרגילים
             </p>
              </v-tab>
              <v-tab title="קהילה"><p class="text-primary">
             כאן המורה יוכל לצפות ולהשתתף בתכני הקהילה בנושא  </p>
              </v-tab>
            </vue-tabs>
          </div>
      </div>
</template>
<script>

  import StatsCard from 'src/components/UIComponents/Cards/StatsCard.vue'
  import ChartCard from 'src/components/UIComponents/Cards/ChartCard.vue'
  import Stat from 'src/components/Dashboard/Views/Topics/Statistic.vue'
  import {Collapse, CollapseItem} from 'element-ui'
  import Chartist from 'chartist'
  import VueTabs from 'vue-nav-tabs'

  export default {
    components: {
      StatsCard,
      ChartCard,
      Stat
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
