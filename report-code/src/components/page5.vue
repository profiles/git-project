<style>
    .page5-container{ height: 100vh; background-color: #EFF7FD;}
    .page5-container .bg{ width: 100%; position: absolute; left: 0; bottom: 0; font-size: 0; overflow: hidden;}
    .page5-container .bg .moves{ width: 400vw; display: flex; align-items: flex-start; animation: road 14s linear infinite;}
    .page5-container .bg .moves img{ width: 200vw;}
    .page5-container .page-title{ width: 35.4%;}
    @keyframes road {
        0%{ transform: translate(0,0);}
        100%{ transform: translate(-200vw,0);}
    }

    .page5-container .context2{ font-size: 0.3rem; color: #333333; position: absolute; left: 10%; bottom: 7%;}
    .page5-container .context2 p{ margin-bottom: 6px;}
    .page5-container .context2 p span{ color: #2B5FD5;}

    .page5-container .c-car{ position: absolute; left: 75%; bottom: 40%;}

    .page5-container .cloud1{ width: 8%; position: absolute; top: 15%; left: 100%; animation: cloud 27s linear infinite ;}
    .page5-container .cloud2{ width: 9%; position: absolute; top: 45%; left: 100%; animation: cloud 25s linear infinite 4s;}
    .page5-container .cloud3{ width: 10%; position: absolute; top: 30%; left: 100%; animation: cloud 20s linear infinite 8s;}
    @keyframes cloud {
        0%{ transform: translate(0,0)}
        100%{ transform: translate(-110vw,0)}
    }
</style>

<template>
    <section class="page5-container">
        <div class="bg">
            <div class="moves">
                <img src="/static/images/bg5.jpg">
                <img src="/static/images/bg5.jpg">
            </div>
            <car :scale="0.8"></car>
        </div>
        <div class="next-arrow"><img src="@/assets/images/nextpage.png"> </div>

        <div class="page-title"><img src="@/assets/images/title5.png"> </div>

        <div class="page-context">
            <p>全年绿色出行</p>
            <p>减少CO2排放<span class="tag2">{{animCo2Per}}</span>{{co2Unit}}</p>
            <p>相当于种植<span class="tag2">{{animTree}}</span>棵冷杉树</p>
            <p v-if="this.pageData.tag == '环保达人'"><span class="tag1">{{pageData.tag}}</span>就是你了</p>
            <p v-if="this.pageData.tag == '积少成多'">为地球降温，<span class="tag1">{{pageData.tag}}~</span></p>
        </div>

        <div class="context2">
            <p>所有云服务用户，</p>
            <p>全年减少CO2排放<span>{{animCo2Total}}</span>万吨</p>
            <p>相当于绿化了<span>{{animTreeTotal}}</span>个澳门</p>
        </div>

        <div class="cloud1"><img src="../assets/images/cloud.png"> </div>
        <div class="cloud2"><img src="../assets/images/cloud.png"> </div>
        <div class="cloud3"><img src="../assets/images/cloud.png"> </div>

    </section>
</template>

<script type='es6'>
    import car from '@/components/car.vue'
    export default {
        name: 'app',
        components:{car},
        data(){
            return{
                co2Per:0,
                tree:0,
                co2Total:0,
                treeTotal:0,
                co2Unit:'kg'
            }
        },
        methods:{
            setValues(){
                let co2 = this.pageData.co2,unit = 'kg';
                if(co2 < 1){
                    co2 = co2*1000;
                    unit = 'g';
                }else if(co2 > 1000){
                    co2 = co2/1000;
                    unit = 't';
                }
                this.co2Unit = unit;
                TweenLite.to(this.$data,1,{co2Per:co2});
                TweenLite.to(this.$data,1,{tree:this.pageData.tree});
                TweenLite.to(this.$data,1,{co2Total:this.pageData.co2ALL});
                TweenLite.to(this.$data,1,{treeTotal:this.pageData.treeAll});
            },
            resetValues(){
                this.co2Per = 0;
                this.tree = 0;
                this.co2Total = 0;
                this.treeTotal = 0;
            }
        },
        computed:{
            animCo2Per(){
                let num = 1;
                let co2 = this.pageData.co2;
                if(co2 < 1){
                    num = 0;
                }
                return this.co2Per.toFixed(num);
            },
            animTree(){
                return this.tree.toFixed(2);
            },
            animCo2Total(){
                return this.co2Total.toFixed(0);
            },
            animTreeTotal(){
                return this.treeTotal.toFixed(1);
            },
            pageData(){
                return this.$store.state.pageData.P5
            }
        }
    }

</script>

