
// @ts-ignore
import data from '../../i18n/timer.json';
export default {
    data: {
        fill:"Fill",
        time:"",
        timer:"30",
        cbar:[]
    },
    onInit() {
        this.title = this.$t('strings.world');
        setInterval(this.time_calc(),1000);
        this.setProgressbarvalue();
    },
    time_calc(){
        //      Getting Local time in UTC and convert it into IST
        var today = new Date();
        var hr = today.getHours() + 5;
        var min = today.getMinutes() +30;
        var ampm="AM";
        if(hr>12){hr=hr-12;}
        else{ampm="PM";}
        if (min>=60){
            hr = hr+1;
            min = min-60;
        }
        if (min<10){min = "0" + min;}
        this.time = hr + ":" + min + " " + ampm;
    },
    setProgressbarvalue(){
        let d =JSON.stringify(data);
        this.cbar=JSON.parse(d);
    }
}
