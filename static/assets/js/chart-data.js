





    //var randomScalingFactor = function(){ return Math.round(Math.random()*5)};
	//$(document).ready(function(){

    var count = 10;
    var j=0;
    var flagOne=0;
    var data = {
        labels: ["January", "February", "March", "April", "May", "June", "July"],
        datasets: [
            {
                label: "My First dataset",
                fillColor: "rgba(220,220,220,0.2)",
                strokeColor: "rgba(220,220,220,1)",
                pointColor: "rgba(220,220,220,1)",
                pointStrokeColor: "#fff",
                pointHighlightFill: "#fff",
                pointHighlightStroke: "rgba(220,220,220,1)",
                data: [25, 30, 35, 40, 45, 50, 55]
            },

        ]

    }
    //editted code

		var temp=new Array();
    	setInterval(function(){
    	if(j==flagOne){

    	$.ajax({
        type: "GET",dataType:"json",
		url: "http://127.0.0.1:8000/reading/",
        success: function (result) {
            console.log(result);

            for (var i in result) {

                temp[i] = result[i].temp;
                console.log(temp[i]);

            }

        }
    });




    	updateData = function(data) {
    		labels = data["labels"];
        	dataSetA = data["datasets"][0]["data"];

			labels.shift();
			count++;
			labels.push(count.toString());
			newDataA = temp[j];
			dataSetA.push(newDataA);
			dataSetA.shift();
    };}
    }, 2000
  );
	$.ajax({
        type: "GET",dataType:"json",
		url: "http://127.0.0.1:8000/reading/",
        success: function (result) {
            console.log(result);
			flagOne=(result.length)-1;
            for (var i in result) {

                temp[i] = result[i].temp;
                console.log(temp[i]);

            }
        }
    });





	var updateData = function(data) {
        var labels = data["labels"];
        var dataSetA = data["datasets"][0]["data"];

        labels.shift();
        count++;
        labels.push(count.toString());
        var newDataA = temp[j];
        dataSetA.push(newDataA);
        dataSetA.shift();
    };

    var optionsAnimation = {
    //Boolean - If we want to override with a hard coded scale
    scaleOverride : true,
    //** Required if scaleOverride is true **
    //Number - The number of steps in a hard coded scale
    scaleSteps : 10,
    //Number - The value jump in the hard coded scale
    scaleStepWidth : 10,
    //Number - The scale starting value
    scaleStartValue : 0
  }

  // Not sure why the scaleOverride isn't working...
  var optionsNoAnimation = {

    animation : false,
    //Boolean - If we want to override with a hard coded scale
    scaleOverride : true,
    //** Required if scaleOverride is true **
    //Number - The number of steps in a hard coded scale
    scaleSteps : 10,
    //Number - The value jump in the hard coded scale
    scaleStepWidth : 5,
    //Number - The scale starting value
    scaleStartValue : 0
  }
    //*********************PLANT TEMPERATURE GRAPH****************




    var count1 = 10;
    var k=0;
    var flagtwo=0;
    var ptdata = {
        labels: ["January", "February", "March", "April", "May", "June", "July"],
        datasets: [
            {
                label: "My First dataset",
                fillColor: "rgba(220,220,220,0.2)",
                strokeColor: "rgba(220,220,220,1)",
                pointColor: "rgba(220,220,220,1)",
                pointStrokeColor: "#fff",
                pointHighlightFill: "#fff",
                pointHighlightStroke: "rgba(220,220,220,1)",
                data: [25, 30, 35, 40, 45, 50, 55]
            },

        ]
    }
        var plant_temp=new Array();
    	setInterval(function(){
    	if(k==flagtwo){

    	$.ajax({
        type: "GET",dataType:"json",
		url: "http://127.0.0.1:8000/reading/",
        success: function (resultpt) {
            console.log(resultpt);

            for (var m in resultpt) {

                plant_temp[m] = resultpt[m].plant_temp;
                console.log(plant_temp[m]);

            }


        }
    });


    	    updateptData = function(ptdata) {
    		labels = ptdata["labels"];
        	dataSet1 = ptdata["datasets"][0]["data"];

			labels.shift();
			count1++;
			labels.push(count1.toString());
			newDataA = plant_temp[k];
			dataSet1.push(newDataA);
			dataSet1.shift();
    };}
    }, 2000
  );
	$.ajax({
        type: "GET",dataType:"json",
		url: "http://127.0.0.1:8000/reading/",
        success: function (resultpt) {
            console.log(resultpt);
			flagtwo=(resultpt.length)-1;
            for (var m in resultpt) {

                plant_temp[m] = resultpt[m].plant_temp;
                console.log(plant_temp[m]);

            }
        }
    });

	updateptData = function(ptdata) {
    		labels = ptdata["labels"];
        	dataSet1 = ptdata["datasets"][0]["data"];

			labels.shift();
			count1++;
			labels.push(count1.toString());
			newData1 = plant_temp[k];
			dataSet1.push(newData1);
			dataSet1.shift();
    };

//**********************************HUMIDITY CHART**************************************************************
    //************************HUMIDITY CHART*************************************************


    var count2 = 10;
    var p=0;
    var flagthree=0;
    var hum = {
        labels: ["January", "February", "March", "April", "May", "June", "July"],
        datasets: [
            {
                label: "My First dataset",
                fillColor: "rgba(220,220,220,0.2)",
                strokeColor: "rgba(220,220,220,1)",
                pointColor: "rgba(220,220,220,1)",
                pointStrokeColor: "#fff",
                pointHighlightFill: "#fff",
                pointHighlightStroke: "rgba(220,220,220,1)",
                data: [25, 30, 35, 40, 45, 50, 55]
            },

        ]
    }
        var humidity=new Array();
    	setInterval(function(){
    	if(p==flagthree){

    	$.ajax({
        type: "GET",dataType:"json",
		url: "http://127.0.0.1:8000/reading/",
        success: function (resulthum) {
            console.log(resulthum);

            for (var q in resulthum) {

                humidity[q] = resulthum[q].humidity;
                console.log(humidity[q]);

            }


        }
    });


    	    updatehumData = function(hum) {
    		labels = hum["labels"];
        	dataSet1 = hum["datasets"][0]["data"];

			labels.shift();
			count2++;
			labels.push(count2.toString());
			newDataA = humidity[p];
			dataSet1.push(newDataA);
			dataSet1.shift();
    };}
    }, 2000
  );
	$.ajax({
        type: "GET",dataType:"json",
		url: "http://127.0.0.1:8000/reading/",
        success: function (resulthum) {
            console.log(resulthum);
			flagthree=(resulthum.length)-1;
            for (var q in resulthum) {

                humidity[q] = resulthum[q].humidity;
                console.log(humidity[q]);

            }
        }
    });





	updatehumData = function(hum) {
    		labels = hum["labels"];
        	dataSet1 = hum["datasets"][0]["data"];

			labels.shift();
			count2++;
			labels.push(count2.toString());
			newData1 = humidity[p];
			dataSet1.push(newData1);
			dataSet1.shift();
    };

    //***************************************PH CHART**********************//
    //******************************************PH CHART***********************************//

    var count3 = 10;
    var r=0;
    var flagfour=0;
    var ph = {
        labels: ["January", "February", "March", "April", "May", "June", "July"],
        datasets: [
            {
                label: "My First dataset",
                fillColor: "rgba(220,220,220,0.2)",
                strokeColor: "rgba(220,220,220,1)",
                pointColor: "rgba(220,220,220,1)",
                pointStrokeColor: "#fff",
                pointHighlightFill: "#fff",
                pointHighlightStroke: "rgba(220,220,220,1)",
                data: [25, 30, 35, 40, 45, 50, 55]
            },

        ]
    }
        var phvalue=new Array();
    	setInterval(function(){
    	if(r==flagfour){

    	$.ajax({
        type: "GET",dataType:"json",
		url: "http://127.0.0.1:8000/reading/",
        success: function (resultph) {
            console.log(resultph);

            for (var s in resultph) {

                phvalue[s] = resultph[s].ph;
                console.log(phvalue[s]);

            }


        }
    });


    	    updatephData = function(ph) {
    		labels = ph["labels"];
        	dataSet1 = ph["datasets"][0]["data"];

			labels.shift();
			count3++;
			labels.push(count3.toString());
			newDataA = phvalue[r];
			dataSet1.push(newDataA);
			dataSet1.shift();
    };}
    }, 2000
  );
	$.ajax({
        type: "GET",dataType:"json",
		url: "http://127.0.0.1:8000/reading/",
        success: function (resultph) {
            console.log(resultph);
			flagthree=(resultph.length)-1;
            for (var s in resultph) {

                phvalue[s] = resultph[s].ph;
                console.log(phvalue[s]);

            }
        }
    });





	updatephData = function(ph) {
    		labels = ph["labels"];
        	dataSet1 = ph["datasets"][0]["data"];

			labels.shift();
			count3++;
			labels.push(count3.toString());
			newData1 = phvalue[r];
			dataSet1.push(newData1);
			dataSet1.shift();
    };






    window.onload= function() {
        var ctx = document.getElementById("myChart").getContext("2d");
        var optionsNoAnimation = {animation: false};
        var myNewChart = new Chart(ctx);
        myNewChart.Line(data, optionsAnimation);


        var ctx1 = document.getElementById("myChart1").getContext("2d");
        var myNewChart1 = new Chart(ctx1);
        myNewChart1.Line(ptdata, optionsAnimation);

        var ctx2 = document.getElementById("myChart2").getContext("2d");
        var myNewChart2 = new Chart(ctx2);
        myNewChart2.Line(hum, optionsAnimation);

         var ctx3 = document.getElementById("myChart3").getContext("2d");
        var myNewChart3 = new Chart(ctx3);
        myNewChart3.Line(ph, optionsAnimation);


        setInterval(function(){
        updateData(data);
        myNewChart.Line(data, optionsNoAnimation);

        updateptData(ptdata);
        myNewChart1.Line(ptdata, optionsNoAnimation);

        updatehumData(hum);
        myNewChart2.Line(hum, optionsNoAnimation);

        updatephData(ph);
        myNewChart3.Line(ph, optionsNoAnimation);

        ;}, 5000);
    }



