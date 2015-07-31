// Copyright 1996-2000 Stephen Pugh.
// Steal this code and you'll earn bad karma.
// if anyone takes issue with said copyright, this is all Jeremy's fault and he takes full responsibility for our bad karma

function CreateArray(n) {
	this.length = n;
	for (var i = 1; i <= n; i++) {
		this[i] = 0;
		}
	return this;
	}

function IsNumberString (InString) {
	if (InString.length == 0) return (false);
	var RefString = "1234567890.-";
	for (count = 0; count < InString.length; count++){
		TempChar = InString.substring (count, count+1);
		if (RefString.indexOf(TempChar, 0) == -1)
		return (false);
		}
	return (true);
	}

function leapYear (InYear) {
	if ((InYear % 4 == 0) && ((InYear % 100 != 0) || (InYear % 400 == 0))) 
		{return true;}
	}

function convertTo (form) {
	if (form.spock.value == "") {form.spock.value = "01"}
	if (form.mccoy.value == "") {form.mccoy.value = "01"}
	if (form.scott.value == "") {form.scott.value = "00"}
	if (form.sulu.value == "") {form.sulu.value = "00"}
	TestVar = IsNumberString (form.kirk.value);
	if (TestVar == 1) {var InYear = eval(form.kirk.value)}
	else {alert("You must enter a numeric value for the year."); return false}
	TestVar = IsNumberString (form.spock.value);
	if (TestVar == 1) {var InMonth = eval(form.spock.value)}
	else {alert("You must enter a numeric value for the month."); return false}
	TestVar = IsNumberString (form.mccoy.value);
	if (TestVar == 1) {var InDay = eval(form.mccoy.value)}
	else {alert("You must enter a numeric value for the day."); return false}
	TestVar = IsNumberString (form.scott.value);
	if (TestVar == 1) {var InHour = eval(form.scott.value)}
	else {alert("You must enter a numeric value for the hours."); return false}
	TestVar = IsNumberString (form.sulu.value);
	if (TestVar == 1) {var InMins = eval(form.sulu.value)}
	else {alert("You must enter a numeric value for the minutes."); return false}

	if ((InMonth < 1) || (InMonth > 12)) {alert("On this planet there are 12 months"); return false}
	var i = (leapYear (InYear) && InMonth == 2) ? 13 : InMonth;
	if (InDay > MonthLength_[i]) {alert(Moonz_[i] + ", " + InYear + " only has " + MonthLength_[i] + " days."); return false}
	if ((InHour < 0) || (InHour > 23)) {alert("Round these parts, hours run from 00 to 23"); return false}
	if ((InMins < 0) || (InMins > 59)) {alert("Round these parts, minutes run from 00 to 59"); return false}
	var InSecs = 0;
	InMonth--;
	var length = (leapYear (InYear)) ? 31622400 : 31536000;
	var InDate = Date.UTC(InYear, InMonth, InDay, InHour, InMins, InSecs);  
	var YearDate = Date.UTC(InYear, 0, 1, 0, 0, 0);
	var StarTime = ((InDate - YearDate) * 100  )/ length;
	StarTime = Math.floor(StarTime);
	StarTime = StarTime / 100;
	if (StarTime < 100) {
		if (StarTime < 10) {StarTime = "00" + StarTime}
		else {StarTime = "0" + StarTime}
		}
	var StarYear = InYear - 2323;
	if (StarYear >= 0) {var token = true}
		else {var token = false}
	StarYear = Math.abs(StarYear);
	if (StarYear < 10) {StarYear = "0" + StarYear} 
	if (token == false) {StarDate = "-" + StarYear + StarTime}
	else {StarDate = "" + StarYear + StarTime}
	form.chekov.value=StarDate;
	return true; 
	}

function convertFrom (form) {
	TestVar = IsNumberString (form.picard.value);
	if (TestVar == 0) {alert("You must enter a numeric value for the StarDate."); return false}
	var token = 0;
	if (form.picard.value.charAt(0) == "-") {token = 1}
                else {token = 0}
	var Sisko = eval(form.picard.value);
	Sisko = Math.abs(Sisko);
	var StarYear = Math.floor(Sisko / 1000);
	var StarTime = Sisko % 1000 ;
	if (token == 1) {var OutYear = 2323 - StarYear}
        else {var OutYear = 2323 + StarYear}
	var InYear = OutYear;
	var length = (leapYear (InYear)) ? 31622400 : 31536000;
	var OutTime = StarTime * length;
	FinalYear = Date.UTC(OutYear, 0, 1, 0, 0, 0);
	FinalTime = FinalYear + OutTime;
	OutDate = new Date();
	OutDate.setTime(FinalTime);
	OutDate = OutDate.toGMTString(); 
	form.riker.value=OutDate;
	return true;
	}

function clearform (form) {
		form.kirk.value="";
		form.spock.value="";
		form.mccoy.value="";
		form.scott.value="";
		form.sulu.value="";             
		form.chekov.value="";
		return true;
	}

function clearform2 (form) {
		form.picard.value="";
		form.riker.value="";
		return true;
	}

function clearform3 (form) {
		form.worf.value="";
		form.troi.value="";
		form.data.value="";
		form.laforge.value="";
		form.crusher.value="";             
		form.yar.value="";
		return true;
	}

function convertTo2 (form) {
	if (form.troi.value == "") {form.troi.value = "01"}
	if (form.data.value == "") {form.data.value = "01"}
	if (form.laforge.value == "") {form.laforge.value = "00"}
	if (form.crusher.value == "") {form.crusher.value = "00"}
	TestVar = IsNumberString (form.worf.value);
	if (TestVar == 1) {var InYear = eval(form.worf.value)}
	else {alert("You must enter a numeric value for the year."); return false}
	TestVar = IsNumberString (form.troi.value);
	if (TestVar == 1) {var InMonth = eval(form.troi.value)}
	else {alert("You must enter a numeric value for the month."); return false}
	TestVar = IsNumberString (form.data.value);
	if (TestVar == 1) {var InDay = eval(form.data.value)}
	else {alert("You must enter a numeric value for the day."); return false}
	TestVar = IsNumberString (form.laforge.value);
	if (TestVar == 1) {var InHour = eval(form.laforge.value)}
	else {alert("You must enter a numeric value for the hours."); return false}
	TestVar = IsNumberString (form.crusher.value);
	if (TestVar == 1) {var InMins = eval(form.crusher.value)}
	else {alert("You must enter a numeric value for the minutes."); return false}

	if ((InYear < 2323) || (InYear > 2423)) {alert("This method only works properly for years between 2323 and 2423"); return false;}
	if ((InMonth < 1) || (InMonth > 12)) {alert("On this planet there are 12 months"); return false}
	var i = (leapYear (InYear) && InMonth == 2) ? 13 : InMonth;
	if (InDay > MonthLength_[i]) {alert(Moonz_[i] + ", " + InYear + " only has " + MonthLength_[i] + " days."); return false}
	if ((InHour < 0) || (InHour > 23)) {alert("Round these parts, hours run from 00 to 23"); return false}
	if ((InMins < 0) || (InMins > 59)) {alert("Round these parts, minutes run from 00 to 59"); return false}
	var InSecs = 0;
	InMonth--;

	var length = 31556952;
	var InDate = Date.UTC(InYear, InMonth, InDay, InHour, InMins, InSecs);  
	var YearDate = Date.UTC(2323, 0, 1, 0, 0, 0);
	var StarTime = ((InDate - YearDate) * 100  )/ length;
	StarTime = Math.floor(StarTime);
	StarTime = StarTime / 100;
	if (StarTime < 10000) {
		if (StarTime < 1000) {
			if (StarTime < 100) {
				if (StarTime < 10) {StarTime = "0000" + StarTime}
				else {StarTime = "000" + StarTime}
				}
			else {StarTime = "00" + StarTime}
			}
		StarTime = "0" + StarTime}
	form.yar.value=StarTime;
	return true; 
	}

MonthLength_ = new CreateArray (13);
MonthLength_[1] = "31";
MonthLength_[2] = "28";
MonthLength_[3] = "31";
MonthLength_[4] = "30";
MonthLength_[5] = "31";
MonthLength_[6] = "30";
MonthLength_[7] = "31";
MonthLength_[8] = "31";
MonthLength_[9] = "30";
MonthLength_[10] = "31";
MonthLength_[11] = "30";
MonthLength_[12] = "31";
MonthLength_[13] = "29";

Moonz_ = new CreateArray (13);
Moonz_[1] = "January";
Moonz_[2] = "February";  
Moonz_[3] = "March";  
Moonz_[4] = "April";  
Moonz_[5] = "May";  
Moonz_[6] = "June";  
Moonz_[7] = "July";  
Moonz_[8] = "August";  
Moonz_[9] = "September";  
Moonz_[10] = "October";  
Moonz_[11] = "November";  
Moonz_[12] = "December";  
Moonz_[13] = "February";  


function todayIs (todayDate) {
var InYear = todayDate.getYear();
if (InYear < 1000) {InYear += 1900};
var InMonth = todayDate.getMonth();
var InDay = todayDate.getDate();
var InHour = todayDate.getHours();
var InMins = todayDate.getMinutes();
var i = (leapYear (InYear) && InMonth == 1) ? 13 : InMonth;
var InSecs = 0;
	var length = (leapYear (InYear)) ? 31622400 : 31536000;
	var InDate = Date.UTC(InYear, InMonth, InDay, InHour, InMins, InSecs);  
	var YearDate = Date.UTC(InYear, 0, 1, 0, 0, 0);
	var StarTime = ((InDate - YearDate) * 100  )/ length;
	StarTime = Math.floor(StarTime);
	StarTime = StarTime / 100;
	if (StarTime < 100) {
		if (StarTime < 10) {StarTime = "00" + StarTime}
		else {StarTime = "0" + StarTime}
		}
	var StarYear = InYear - 2323;
	if (StarYear >= 0) {var token = true}
		else {var token = false}
	StarYear = Math.abs(StarYear);
	StarYear2 = StarYear - 377;
	StarYear2 = Math.abs(StarYear2);
	if (StarYear < 10) {StarYear = "0" + StarYear} 
	if (token == false) {StarDate = "-" + StarYear + StarTime}
	else {StarDate = "" + StarYear + StarTime}
	StarDate2 = "" + StarYear2 + StarTime;

	// change "console.log" to whatever the method of display will be
	console.log("The current Stardate is " + StarDate + ". In the 24th Century it is 'currently' Stardate " + StarDate2 +".");
	}