var data, myChart, options;

options = {
  tooltipTemplate: "<%if (label){%><%=label%><%}%>:<%if (value){%><%=value%><%}%>",
  onAnimationComplete: function(){
    this.showTooltip(this.segments, true);
  },
  tooltipEvents: [],
  showTooltips: true,
  animateScale: true,
  responsive: true
};

data = [
  {
    value: 300,
    color:"#FF5A5E",
    label: "怒り",
  },
  {
    value: 50,
    color: "#5AD3D1",
    label: "楽しい",
  },
  {
    value: 100,
    color: "#FFC870",
    label: "嬉しい",
  }
];

myChart = new Chart(document.getElementById("myChart").getContext("2d")).Doughnut(data,options);
