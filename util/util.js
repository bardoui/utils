const moment = require('jalali-moment');
export const Util = function(){
	
	/**
	 * Get injected token value
	 * @param {String} key key to get value
	 * @param {Any} fallback default value if key or token not found
	 * @param {String} token token name
	 * @returns {Any}
	 */
	this.getInjectedToken = function(key, fallback = null, token = 'token'){
		let settings = window[token];
		if(settings != undefined){
			settings = atob(settings);
			settings = JSON.parse(settings);
			if(settings[key] != undefined){
				return settings[key];
			}	
		}
		return fallback;
	}

	/**
	 * Convert gregorian datetime to jalali
	 * @param {String} date Gregorian date to convert. pass {null} to return current datetime
	 * @param {String} outFormat Output date format
	 * @param {Boolean} date if true return moment instance
	 * @param {String|moment} parseFormat Input date format. set null to default
	 */
	this.getJalali = function(date = null, outFormat = "YYYY/MM/DD HH:mm:ss", parseFormat = null, dateObject = false){
		try{
			date = date ? date.toString():moment().locale('en').format('YYYY-MM-DD HH:mm:ss');
			let dt = moment.from(date, 'en', parseFormat);
			if(dt.isValid()){
				return dateObject ? dt.locale('fa'):dt.locale('fa').format(outFormat);
			}
		}catch(e){}
		return null;
	}

	/**
	 * Convert jalali datetime to gregorian
	 * @param {String} date jalali date to convert. pass {null} to return current datetime
	 * @param {String} outFormat Output date format
	 * @param {Boolean} date if true return moment instance
	 * @param {String|moment} parseFormat Input date format. set null to default. NOTE: default format not recognize time
	 */
	this.getGregorian = function(date = null, outFormat = "YYYY/MM/DD HH:mm:ss", parseFormat = null, dateObject = false){
		try{
			date = date ? date.toString() : moment().locale('fa').format('YYYY-MM-DD HH:mm:ss');
			let dt = moment.from(date, 'fa', parseFormat);
			if(dt.isValid()){
				return dateObject ? dt.locale('en'):dt.locale('en').format(outFormat);
			}
		}catch(e){}
		return null;
	}

	/**
	 * convert datetime to wordify time
	 * @param {String} date
	 */
	this.wordifyTime = function(date){
		date = moment.from(date, "fa", "YYYY-MM-DD HH:mm:ss");
		if(date.isValid()){
			let hours = date.format('H');
			let mins = date.format('m');
			let secs = date.format("s");
			let dateString = '';
			if (hours != 0) {
				dateString = `${hours} ساعت`;
			}
			if (mins != 0) {
				if (dateString != '') {
					dateString = `${dateString} و`;
				}
				dateString = `${dateString}${mins} دقیقه`;
			}
			if (secs != 0) {
				if (dateString != '') {
					dateString = `${dateString} و `;
				}
				dateString = `${dateString}${secs} ثانیه`;
			}
			return dateString;
		}
		return null;
	}

	/**
	 * Return time from string
	 * @param {String} date
	 * @param {Boolean} date if true return moment instance
	 * @returns {moment|String}
	 */
	this.dateFromSeconds = function(seconds, dateObject = false){
		let date = moment().locale('fa');
		date.set({hours: 0, minutes: 0, seconds: 0});
		date.add(isNaN(seconds) ? 0:Number(seconds), 'seconds');
		return dateObject ? date:date.format("YYYY-MM-DD HH:mm:ss");
	}
}