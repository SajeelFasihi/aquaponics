

$(document).ready(function(){

    var count1 = 10;
    var k=0;
    var flagtwo=0;
    var ptdata = {
        labels1: ["January", "February", "March", "April", "May", "June", "July"],
        datasets: [
            {
                label: "My First dataset",
                fillColor: "rgba(220,220,220,0.2)",
                strokeColor: "rgba(220,220,220,1)",
                pointColor: "rgba(220,220,220,1)",
                pointStrokeColor: "#fff",
                pointHighlightFill: "#fff",
                pointHighlightStroke: "rgba(220,220,220,1)",
                data1: [25, 30, 35, 40, 45, 50, 55]
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

            for (var l in resultpt) {

                plant_temp[l] = resultpt[l].plant_temp;
                console.log(plant_temp[l]);

            }


        }
    });


    	    updateData = function(oldData) {
    		labels = oldData["labels"];
        	dataSetA = oldData["datasets"][0]["data"];

			labels.shift();
			count1++;
			labels.push(count1.toString());
			newDataA = plant_temp[k];
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
			flagtwo=(result.length)-1;
            for (var l in result) {

                plant_temp[l] = result[l].plant_temp;
                console.log(plant_temp[l]);

            }
        }
    });





	   updateData = function(oldData) {
    		labels = oldData["labels"];
        	dataSetA = oldData["datasets"][0]["data"];

			labels.shift();
			count1++;
			labels.push(count1.toString());
			newDataA = plant_temp[k];
			dataSetA.push(newDataA);
			dataSetA.shift();
    };




    var ctx1 = document.getElementById("myChart1").getContext("2d");
    var optionsNoAnimation = {animation : false}
    var myNewChart1 = new Chart(ctx1);
    myNewChart1.Line(ptdata, optionsAnimation);

    setInterval(function(){
        updateData(ptdata)
        myNewChart1.Line(ptdata, optionsNoAnimation)

        //updateData(data_pt);
        //myNewChart1.Line(data_pt, optionsNoAnimation1)
        ;}, 5000
  );
});