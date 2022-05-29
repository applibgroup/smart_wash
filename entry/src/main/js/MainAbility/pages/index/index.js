// @ts-ignore
import data from '../../i18n/timer.json';
export default {
    data: {
        null: "",
        fill: "Fill",
        spin: "Spin",
        wash: "Wash",
        rinse: "Rinse",
        mode: "",
        level: "",
        tlevel: "",
        delicates: "Delicates",
        mix: "Mix",
        cotton: "Cotton",
        wool: "Wool",
        quick: "Quick",
        ecowash: "Eco Wash",
        wlabel: "Water Level",
        wlevel7: "— 7",
        wlevel6: "— 6",
        wlevel5: "— 5",
        wlevel4: "— 4",
        wlevel3: "— 3",
        wlevel2: "— 2",
        wlevel1: "— 1",
        wlabel2: "Full",
        tlevelh: "— Hot",
        tlevelhw: "—",
        tlevelw: "— Warm",
        tlevelwc: "—",
        tlevelc: "— Cold",
        tlabel: "Temperature",
        power: "Power",
        pause: "Play",
        time: "",
        timer: "59",
        cbar: [],
        level_bg: '/common/images/level_bg.png',
        timmer_bg: '/common/images/Timer_bg.png',
        indication_point: '/common/images/indication_point.png',
        indication_point_rinse: '/common/images/indication_point.png',
        indication_point_spin: '/common/images/indication_point_spin.png',
        indication_point_fill: '/common/images/indication_point_fill.png',
        indication_point_wash: '/common/images/indication_point_wash.png',
        fill_img: '/common/images/fill.png',
        wash_img: '/common/images/wash.PNG',
        spin_img: '/common/images/spin.PNG',
        rinse_img: '/common/images/rinse.PNG',
        band_cotton: '/common/images/band.png',
        band_quick: '/common/images/band_quick.png',
        band_rinse1: '/common/images/band_rinse1.png',
        band_spin: '/common/images/band_spin.png',
        band_mix: '/common/images/band_mix.png',
        band_delicates: '/common/images/band_delicates.png',
        band_ecowash: '/common/images/band_ecowash.png',
        band_wool: '/common/images/band_wool.png',
        band_bg: '/common/images/band_bg.png',
        band_grey: '/common/images/band_grey.png',
        selected_bg: '/common/images/selected_bg.png',
        ecowash_img: '/common/images/eco wash.png',
        wool_img: '/common/images/wollen.png',
        cotton_img: '/common/images/cotton.png',
        quick_img: '/common/images/quick.png',
        rinse1_img: '/common/images/rinse.png',
        spin1_img: '/common/images/spin.png',
        mix_img: '/common/images/mix.png',
        delicates_img: '/common/images/delicates.png',
        water_level_bg: '/common/images/water_level_bg.png',
        water_level: '/common/images/water_level.png',
        water_level_1: '/common/images/waterlevel_1.png',
        water_level_2: '/common/images/waterlevel_2.png',
        water_level_3: '/common/images/waterlevel_3.png',
        water_level_4: '/common/images/waterlevel_4.png',
        water_level_5: '/common/images/waterlevel_5.png',
        water_level_6: '/common/images/waterlevel_6.png',
        water_level_7: '/common/images/waterlevel_7.png',
        temperature_bg: '/common/images/temperature_bg.png',
        temperature: '/common/images/temperature.png',
        time_bg: '/common/images/time_bg.png',
        wifi: '/common/images/wifi.png',
        settings: '/common/images/settings.png',
        poweri: '/common/images/power.png',
        play: '/common/images/play.png',
    },
    onInit() {
        this.title = this.$t('strings.world');
        setInterval(this.time_calc(), 1000);
        this.setProgressbarvalue();
    },
    time_calc() {
        var today = new Date();
        var hr = today.getHours() + 5;
        var min = today.getMinutes() + 30;
        var ampm = "PM";
        if (hr > 12) {
            hr = hr - 12;
        }
        else {
            ampm = "AM";
        }
        if (min >= 60) {
            hr = hr + 1;
            min = min - 60;
        }
        if (min < 10) {
            min = "0" + min;
        }
        this.time = hr + ":" + min + " " + ampm;
    },
    setProgressbarvalue() {
        let d = JSON.stringify(data);
        this.cbar = JSON.parse(d);
    },
    fill_imgclick() {
        this.indication_point_rinse = this.indication_point_fill;
        this.mode = "fill";
    },
    wash_imgclick() {
        this.indication_point_rinse = this.indication_point_wash;
        this.mode = "wash";
    },
    spin_imgclick() {
        this.indication_point_rinse = this.indication_point_spin;
        this.mode = "spin";
    },
    rinse_imgclick() {
        this.indication_point_rinse = this.indication_point_rinse;
        this.mode = "rinse";
    },
    rinse1_imgclick() {
        this.band_cotton = this.band_rinse1;
        this.mode = "rinse";
    },
    ecowash_imgclick() {
        this.band_cotton = this.band_ecowash;
        this.mode = "ecowash";
    },
    wool_imgclick() {
        this.band_cotton = this.band_wool;
        this.mode = "wool";
    },
    cotton_imgclick() {
        this.band_cotton = this.band_cotton;
        this.mode = "wool";
    },
    quick_imgclick() {
        this.band_cotton = this.band_quick;
        this.mode = "quick";
    },
    spin1_imgclick() {
        this.band_cotton = this.band_spin;
        this.mode = "spin";
    },
    mix_imgclick() {
        this.band_cotton = this.band_mix;
        this.mode = "mix";
    },
    delicates_imgclick() {
        this.band_cotton = this.band_delicates;
        this.mode = "delicates";
    },
    wlevel7click() {
        this.water_level = this.water_level_7;
        this.level = "7";
    },
    wlevel6click() {
        this.water_level = this.water_level_6;
        this.level = "6";
    },
    wlevel5click() {
        this.water_level = this.water_level_5;
        this.level = "5";
    },
    wlevel4click() {
        this.water_level = this.water_level_4;
        this.level = "4";
    },
    wlevel3click() {
        this.water_level = this.water_level_3;
        this.level = "3";
    },
    wlevel2click() {
        this.water_level = this.water_level_2;
        this.level = "2";
    },
    wlevel1click() {
        this.water_level = this.water_level_1;
        this.level = "1";
    },
    wlevelhclick() {
        console.log("hot");
        this.temperature = this.band_ecowash;
        this.mode = "hot";
    },
    tlevelhwclick() {
        this.temperature = this.band_ecowash;
        this.mode = "hotwarm";
    },
    tlevelwclick() {
        this.temperature = this.band_ecowash;
        this.mode = "warm";
    },
    tlevelwcclick() {
        this.temperature = this.band_ecowash;
        this.mode = "warmcold";
    },
    tlevelcclick() {
        this.temperature = this.band_ecowash;
        this.mode = "cold";
    },
    pauseplayclick() {
        if (this.play == "/common/images/play.png") {
            this.play = "/common/images/pause.png";
        }
        else {
            this.play = "/common/images/play.png"
        }

        if (this.pause == "Play") {
            this.pause = "Pause";
        }
        else {
            this.pause = "Play";
        }
    },
}
