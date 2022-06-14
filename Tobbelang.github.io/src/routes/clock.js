export class Clock {
    constructor(day = 0, hour = 0, minute = 0, second = 0) {
			this.day = day;
			this.hour = hour;
			this.minute = minute;
			this.second = second;
		}
    activateAlarm(){
        this.alarmIsActive = true;
    }
    deactivateAlarm(){
        this.alarmIsActive = false;
    } 
    setAlarm(day, hour, minute, second){
      	this.Alarmday = day;  
				this.Alarmhour = hour; 
        this.Alarmminute = minute;
			  this.alarmsecond = second;
        this.alarmIsActive = true;
    }

    setTime(day, hour, minute, second) {
        return (
            this.day = day,
            this.hour = hour,
            this.minute = minute,
            this.second = second
        );
}
    tick() {
        let second = this.timeSecond
        if (this.second <= 60 && this.second >= 0){
        this.second++;
        if (this.second == 60) {
            this.second = 0;
            this.minute += 1;
        }
					 if (this.minute == 60) {
            this.minute = 0;
            this.hour += 1;
        }
					 if (this.hour == 24) {
            this.hour = 0;
            this.day += 1;
        }
        if (this.hour == 24) {
            this.hour = 0;
        }
        if (this.minute <= 9 || this.hour <= 9) {
           // console.log(this.hour.toString().padStart(2, '0') + ':' +this.minute.toString().padStart(2, '0'))
        }
        if (this.minute > 9 && this.hour > 9) {
           // console.log(this.hour + ':' + this.minute);
        }    
    }
        if(this.alarm = true){
            if(this.hour == this.Alarmhour && this.minute == this.Alarmminute && this.alarmIsActive == true){
        
            console.log("Alarm!!!");
            }
        }
    }
	   get timeDay() {
        return this.day.toString().padStart(2, '0')
    }
    get timeHour() {
        return this.hour.toString().padStart(2, '0')
    }
    get timeMinute() {
        return this.minute.toString().padStart(2, '0')
    }
	   get timeSecond() {
        return this.second.toString().padStart(2, '0')
    }
    get timeDayreset() {
        return this.day = 10;
    }
    get timeHourreset() {
        return this.hour = 0;
    }
    get timeMinutereset() {
        return this.minute = 0;
    }
	   get timeSecondreset() {
        return this.second = 0;
    }
}