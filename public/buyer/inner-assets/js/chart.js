$(function () {
  /* ChartJS
   * -------
   * Data and config for chartjs
   */
  
  
  'use strict';
  $.ajax({
    url: "/meter-graph-data",
    data: { },
    type: "get",
    success: function (datas) {
      // alert(datas);
      var data_labels=[], data_datasets=[];
      for(var i = 0; i<datas.length; i++){
        data_labels.push(datas[i]._id.meter_id);
        data_datasets.push(datas[i].rego_balance);
      }
      var data = {
        
        labels: data_labels,//["2354", "2456", "3456", "4968", "5869", "6859"],
        datasets: [{
          backgroundColor: 'transparent',
          label: 'No of REGO',
          data: data_datasets,//[50, 100, 200, 150, 300,400],
          backgroundColor: [
            '#33691e',
            '#558b2f',
            '#689f38',
            '#7cb342',
            '#8bc34a',
            '#9ccc65'
          ],
          borderColor: [
            '#33691e',
            '#558b2f',
            '#689f38',
            '#7cb342',
            '#8bc34a',
            '#9ccc65'
          ],
          borderWidth: 1,
          fill: false
        }]
      };
      var options = {
        title: {
            display: true,
            text: 'Meter ID',
            position: 'bottom'
        },  
        scales: {
          yAxes: [{
            ticks: {
              beginAtZero: true
            },
            gridLines: {
              color: 'transparent',
              zeroLineColor: '#ddd'
            }
          }],
          xAxes: [{
            ticks: {
              beginAtZero: true
            },
            gridLines: {
              color: 'transparent',
            }
          }],
        },
    
        legend: {
          display: false
        },
        elements: {
          point: {
            radius: 0
          }
        }
      };
       // Get context with jQuery - using jQuery's .get() method.
      if ($("#barChart").length) {
        var barChartCanvas = $("#barChart").get(0).getContext("2d");
        // This will get the first returned node in the jQuery collection.
        var barChart = new Chart(barChartCanvas, {
          type: 'bar',
          data: data,
          options: options
        });
      }
      
    }

  }); 
  
// alert('Chart file 1234');

  $.ajax({
    url: "/monthly-rego-graph-data",
    data: { },
    type: "get",
    success: function (datas1) {
      // alert(datas1);
      console.log(datas1);
      var data_datasets1=[];
      var data_datasets2=[];
      for(var i = 0; i<datas1.length; i++){
          data_datasets1[datas1[i].month -1] = datas1[i].rego;
          data_datasets2[datas1[i].month -1] = datas1[i].carbon;
      }
      data_datasets1[0] = 0;
      data_datasets2[0] = 0;
      console.log("monthly ",data_datasets1);
      var dataDark = {
        labels: ["","1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12", "13", "14", "15", "16", "17", "18", "19", "20", "21", "22", "23","24","25","26","27","28","29","30","31"],
        datasets: [{
          label: 'kWh Produced',
          data: data_datasets1,//[50, 100, 200, 150, 300,400,300,400,200,150],
          backgroundColor: [
            '#33691e',            
            '#33691e',            
            '#33691e',            
            '#33691e',            
            '#33691e',            
            '#33691e',            
            '#33691e',            
            '#33691e',            
            '#33691e',            
            '#33691e',            
            '#33691e',            
            '#33691e',            
            '#33691e',            
            '#33691e',            
            '#33691e',            
            '#33691e',            
            '#33691e',            
            '#33691e',            
            '#33691e',            
            '#33691e',            
            '#33691e',            
            '#33691e',            
            '#33691e',            
            '#33691e',            
            '#33691e',            
            '#33691e',            
            '#33691e',            
            '#33691e',            
            '#33691e',            
            '#33691e',            
            '#33691e',            
            '#33691e'            
          ],
          borderColor: [
            '#33691e',
            // '#558b2f',
            // '#689f38',
            // '#7cb342',
            // '#8bc34a',
            // '#9ccc65'
          ],
          borderWidth: 1,
          fill: false
        },
        {
          label: 'Carbon saved',
          data: data_datasets2,//[50, 100, 200, 150, 300,400,300,400,200,150],
          backgroundColor: [
            '#9ccc65',
            '#9ccc65',
            '#9ccc65',
            '#9ccc65',
            '#9ccc65',
            '#9ccc65',
            '#9ccc65',
            '#9ccc65',
            '#9ccc65',
            '#9ccc65',
            '#9ccc65',
            '#9ccc65',
            '#9ccc65',
            '#9ccc65',
            '#9ccc65',
            '#9ccc65',
            '#9ccc65',
            '#9ccc65',
            '#9ccc65',
            '#9ccc65',
            '#9ccc65',
            '#9ccc65',
            '#9ccc65',
            '#9ccc65',
            '#9ccc65',
            '#9ccc65',
            '#9ccc65',
            '#9ccc65',
            '#9ccc65',
            '#9ccc65',
            '#9ccc65',
            '#9ccc65'
          ],
          borderColor: [
            '#33691e',
            // '#558b2f',
            // '#689f38',
            // '#7cb342',
            // '#8bc34a',
            // '#9ccc65'
          ],
          borderWidth: 1,
          fill: false
        }
      ]
      };
      var optionsDark = {
        scales: {
          yAxes: [{
            scaleLabel: {
              display: true,
              labelString: 'kWh'
            },
            ticks: {
              beginAtZero: true
            },
            gridLines: {
              color: 'transparent',
              zeroLineColor: '#ddd'
            }
          }],
          xAxes: [{
            scaleLabel: {
              display: true,
              labelString: 'Days'
            },
            ticks: {
              beginAtZero: true
            },
            gridLines: {
              color: 'transparent',
            }
          }],
        },
        legend: {
          display: true
        },
        elements: {
          point: {
            radius: 0
          }
        }
      };
      if ($("#barChartDark").length) {
        var barChartCanvasDark = $("#barChartDark").get(0).getContext("2d");
        // This will get the first returned node in the jQuery collection.
        var barChartDark = new Chart(barChartCanvasDark, {
          type: 'bar',
          data: dataDark,
          options: optionsDark
        });
      }
    }

  });
  

  $.ajax({
    url: "/pound_value",
    data: { },
    type: "get",
    success: function (datas1) {
      // alert('one rwn '+datas1.onerwn);
      // alert('rowan val '+datas1.rowan_bal);
      
      var multiAreaData_fr = {
        labels: ["", "Value", ""], // ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12", "13", "14", "15", "16", "17", "18", "19", "20", "21", "22", "23","24","25","26","27","28","29","30","31"],
        datasets: [{
          label: 'Rowan Value',
          data: [0,datas1.rowan_bal,0],
          borderColor: ['#689f38'],
          backgroundColor: ['#7cb342'],
          borderWidth: 1,
          fill: true
        },
        {
          label: 'Pound Equivalent',
          data: [0,datas1.onerwn,0],
          borderColor: ['#33691e'],
          backgroundColor: ['#558b2f'],
          borderWidth: 1,
          fill: true
        }
        ]
      };

      var multiAreaOptions_fr = {
        plugins: {
          filler: {
            propagate: true
          }
        },
        elements: {
          point: {
            radius: 0
          }
        },
        scales: {
          xAxes: [{
            gridLines: {
              display: false
            }
          }],
          yAxes: [{
            scaleLabel: {
              display: true,
              labelString: 'Amount'
            },
            gridLines: {
              display: false
            }
          }]
        }
      }
      
      if ($("#areachart-multi1").length) {
        var multiAreaCanvas = $("#areachart-multi1").get(0).getContext("2d");
        var multiAreaChart1 = new Chart(multiAreaCanvas, {
          type: 'line',
          data: multiAreaData_fr,
          options: multiAreaOptions_fr
        });
      }
    }

  });
  

 


  var data1 = {
    labels: ["2354", "2456", "3456", "4968", "5869", "6859"],
    datasets: [{
      backgroundColor: 'transparent',
      label: 'No of ROC',
      data: [50, 100, 200, 150, 300,400],
      backgroundColor: [
       '#33691e',
        '#558b2f',
        '#689f38',
        '#7cb342',
        '#8bc34a',
        '#9ccc65'
      ],
      borderColor: [
        '#33691e',
        '#558b2f',
        '#689f38',
        '#7cb342',
        '#8bc34a',
        '#9ccc65'
      ],
      borderWidth: 1,
      fill: false
    }]
  };
  var options1 = {
    title: {
        display: true,
        text: 'Meter ID',
        position: 'bottom'
    },  
     scales: {
      yAxes: [{
        ticks: {
          beginAtZero: true
        },
        gridLines: {
          color: 'transparent',
          zeroLineColor: '#ddd'
        }
      }],
      xAxes: [{
        ticks: {
          beginAtZero: true
        },
        gridLines: {
          color: 'transparent',
        }
      }],
    },

    legend: {
      display: false
    },
    elements: {
      point: {
        radius: 0
      }
    }
  };


  var dataDark1 = {
    labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
    datasets: [{
      label: '# No of ROC',
      data: [50, 100, 200, 150, 300,400,300,400,200,150],
      backgroundColor: [
        '#33691e',
        '#558b2f',
        '#689f38',
        '#7cb342',
        '#8bc34a',
        '#9ccc65',
        '#33691e',
        '#558b2f',
        '#689f38',
        '#7cb342',
        '#8bc34a',
        '#9ccc65'
      ],
      borderColor: [
        '#33691e',
        '#558b2f',
        '#689f38',
        '#7cb342',
        '#8bc34a',
        '#9ccc65'
      ],
      borderWidth: 1,
      fill: false
    }]
  };
  var optionsDark1 = {
    scales: {
      yAxes: [{
        ticks: {
          beginAtZero: true
        },
        gridLines: {
          color: 'transparent',
          zeroLineColor: '#ddd'
        }
      }],
      xAxes: [{
        ticks: {
          beginAtZero: true
        },
        gridLines: {
          color: 'transparent',
        }
      }],
    },
    legend: {
      display: true
    },
    elements: {
      point: {
        radius: 0
      }
    }
  };


 var data2 = {
    labels: ["2354", "2456", "3456", "4968", "5869", "6859"],
    datasets: [{
      backgroundColor: 'transparent',
      label: 'No of ROC',
      data: [50, 100, 200, 150, 300,400],
      backgroundColor: [
       '#33691e',
        '#558b2f',
        '#689f38',
        '#7cb342',
        '#8bc34a',
        '#9ccc65'
      ],
      borderColor: [
        '#33691e',
        '#558b2f',
        '#689f38',
        '#7cb342',
        '#8bc34a',
        '#9ccc65'
      ],
      borderWidth: 1,
      fill: false
    }]
  };
  var options2 = {
    title: {
        display: true,
        text: 'Meter ID',
        position: 'bottom'
    },  
     scales: {
      yAxes: [{
        ticks: {
          beginAtZero: true
        },
        gridLines: {
          color: 'transparent',
          zeroLineColor: '#ddd'
        }
      }],
      xAxes: [{
        ticks: {
          beginAtZero: true
        },
        gridLines: {
          color: 'transparent',
        }
      }],
    },

    legend: {
      display: false
    },
    elements: {
      point: {
        radius: 0
      }
    }
  };


  var dataDark2 = {
    labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
    datasets: [{
      label: '# No of ROC',
      data: [50, 100, 200, 150, 300,400,300,400,200,150],
      backgroundColor: [
        '#33691e',
        '#558b2f',
        '#689f38',
        '#7cb342',
        '#8bc34a',
        '#9ccc65',
        '#33691e',
        '#558b2f',
        '#689f38',
        '#7cb342',
        '#8bc34a',
        '#9ccc65'
      ],
      borderColor: [
        '#33691e',
        '#558b2f',
        '#689f38',
        '#7cb342',
        '#8bc34a',
        '#9ccc65'
      ],
      borderWidth: 1,
      fill: false
    }]
  };
  var optionsDark2 = {
    scales: {
      yAxes: [{
        ticks: {
          beginAtZero: true
        },
        gridLines: {
          color: 'transparent',
          zeroLineColor: '#ddd'
        }
      }],
      xAxes: [{
        ticks: {
          beginAtZero: true
        },
        gridLines: {
          color: 'transparent',
        }
      }],
    },
    legend: {
      display: false
    },
    elements: {
      point: {
        radius: 0
      }
    }
  };


  
 
  
  var doughnutPieData = {
    datasets: [{
      data: [30, 20, 30, 20],
      backgroundColor: [
        '#33691e',
        '#558b2f',
        '#689f38',
        '#7cb342',
        '#8bc34a',
        '#9ccc65'
      ],
      borderColor: [
        '#33691e',
        '#558b2f',
        '#689f38',
        '#7cb342',
        '#8bc34a',
        '#9ccc65'
      ],
    }],

    // These labels appear in the legend and in the tooltips when hovering different arcs
    labels: [
      'England',
      'Northern Ireland',
      'Scotland',
      'Wales',
    ]
  };
  var doughnutPieOptions = {
    responsive: true,
    animation: {
      animateScale: true,
      animateRotate: true
    },
    pieceLabel: {
        fontColor: '#000'
    },
    legend: {
      position: 'bottom'
    }
  };

  var doughnutPieData1 = {
    datasets: [{
      data: [40, 20, 10, 30],
      backgroundColor: [
        '#33691e',
        '#558b2f',
        '#689f38',
        '#7cb342',
        '#8bc34a',
        '#9ccc65'
      ],
      borderColor: [
        '#33691e',
        '#558b2f',
        '#689f38',
        '#7cb342',
        '#8bc34a',
        '#9ccc65'
      ],
    }],

    // These labels appear in the legend and in the tooltips when hovering different arcs
    labels: [
      'England',
      'Northern Ireland',
      'Scotland',
      'Wales',
    ]
  };

  var doughnutPieOptions1 = {
    responsive: true,
    animation: {
      animateScale: true,
      animateRotate: true
    },
    pieceLabel: {
        fontColor: '#000'
    },
    legend: {
      position: 'bottom'
    }
  };


  var doughnutPieData2 = {
    datasets: [{
      data: [40, 20, 10, 30],
      backgroundColor: [
        '#33691e',
        '#558b2f',
        '#689f38',
        '#7cb342',
        '#8bc34a',
        '#9ccc65'
      ],
      borderColor: [
        '#33691e',
        '#558b2f',
        '#689f38',
        '#7cb342',
        '#8bc34a',
        '#9ccc65'
      ],
    }],

    // These labels appear in the legend and in the tooltips when hovering different arcs
    labels: [
      'England',
      'Northern Ireland',
      'Scotland',
      'Wales',
    ]
  };

  var doughnutPieOptions2 = {
    responsive: true,
    animation: {
      animateScale: true,
      animateRotate: true
    },
    pieceLabel: {
        fontColor: '#000'
    },
    legend: {
      position: 'bottom'
    }
  };
  // $.ajax({
  //   url: "/daily-rec-graph-data",
  //   data: { },
  //   type: "get",
  //   success: function (datas1) {
      // alert(datas1);
      // console.log(rec_datas);
      // var data_datasets1=[];
      // for(var i = 0; i<datas1.length; i++){
      //     data_datasets1[datas1[i].month -1] = datas1[i].rego;
      // }
      // console.log("monthly ",data_datasets1);
      var multiAreaData = {
        labels: ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12", "13", "14", "15", "16", "17", "18", "19", "20", "21", "22", "23","24","25","26","27","28","29","30","31"],
        datasets: [{
          label: 'Rowan Redeemed',
          data: [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,50,0,100,0,150,0,0,0,0,0,0,0],
          borderColor: ['#689f38'],
          backgroundColor: ['#7cb342'],
          borderWidth: 1,
          fill: true
        },
        {
          label: 'Pound Equivalent',
          data: [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0.509,0,1.175,0,1.762,0,0,0,0,0,0,0],
          borderColor: ['#33691e'],
          backgroundColor: ['#558b2f'],
          borderWidth: 1,
          fill: true
        }
        ]
      };
  //   }
  // })

  var multiAreaOptions = {
    plugins: {
      filler: {
        propagate: true
      }
    },
    elements: {
      point: {
        radius: 0
      }
    },
    scales: {
      xAxes: [{
        gridLines: {
          display: false
        }
      }],
      yAxes: [{
        gridLines: {
          display: false
        }
      }]
    }
  }


  var multiAreaData1 = {
    labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
    datasets: [{
      label: 'REGO Utlilized',
      data: [8, 11, 13, 15, 12, 13, 16, 15, 13, 19, 11, 14],
      borderColor: ['#33691e'],
      backgroundColor: ['#558b2f'],
      borderWidth: 1,
      fill: true
    },
    {
      label: 'Commission Paid',
      data: [7, 17, 12, 16, 14, 18, 16, 12, 15, 11, 13, 9],
      borderColor: ['#689f38'],
      backgroundColor: ['#7cb342'],
      borderWidth: 1,
      fill: true
    }
    ]
  };

  var multiAreaOptions1 = {
    plugins: {
      filler: {
        propagate: true
      }
    },
    elements: {
      point: {
        radius: 0
      }
    },
    scales: {
      xAxes: [{
        gridLines: {
          display: false
        }
      }],
      yAxes: [{
        gridLines: {
          display: false
        }
      }]
    }
  }


  var multiAreaData2 = {
    labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
    datasets: [{
      label: 'REGO Utlilized',
      data: [8, 11, 13, 15, 12, 13, 16, 15, 13, 19, 11, 14],
      borderColor: ['#33691e'],
      backgroundColor: ['#558b2f'],
      borderWidth: 1,
      fill: true
    },
    {
      label: 'Commission Paid',
      data: [7, 17, 12, 16, 14, 18, 16, 12, 15, 11, 13, 9],
      borderColor: ['#689f38'],
      backgroundColor: ['#7cb342'],
      borderWidth: 1,
      fill: true
    }
    ]
  };

  var multiAreaOptions2 = {
    plugins: {
      filler: {
        propagate: true
      }
    },
    elements: {
      point: {
        radius: 0
      }
    },
    scales: {
      xAxes: [{
        gridLines: {
          display: false
        }
      }],
      yAxes: [{
        gridLines: {
          display: false
        }
      }]
    }
  }

  
 

  

  if ($("#barChart1").length) {
    var barChartCanvas = $("#barChart1").get(0).getContext("2d");
    // This will get the first returned node in the jQuery collection.
    var barChart1 = new Chart(barChartCanvas, {
      type: 'bar',
      data: data1,
      options: options1
    });
  }

  if ($("#barChartDark1").length) {
    var barChartCanvasDark = $("#barChartDark1").get(0).getContext("2d");
    // This will get the first returned node in the jQuery collection.
    var barChartDark1 = new Chart(barChartCanvasDark, {
      type: 'bar',
      data: dataDark1,
      options: optionsDark1
    });
  }

   if ($("#barChart2").length) {
    var barChartCanvas = $("#barChart2").get(0).getContext("2d");
    // This will get the first returned node in the jQuery collection.
    var barChart2 = new Chart(barChartCanvas, {
      type: 'bar',
      data: data2,
      options: options2
    });
  }
  
  if ($("#barChartDark2").length) {
    var barChartCanvasDark = $("#barChartDark2").get(0).getContext("2d");
    // This will get the first returned node in the jQuery collection.
    var barChartDark2 = new Chart(barChartCanvasDark, {
      type: 'bar',
      data: dataDark2,
      options: optionsDark2
    });
  }

  if ($("#areachart-multi").length) {
    var multiAreaCanvas = $("#areachart-multi").get(0).getContext("2d");
    var multiAreaChart = new Chart(multiAreaCanvas, {
      type: 'line',
      data: multiAreaData,
      options: multiAreaOptions
    });
  }

  // if ($("#areachart-multi1").length) {
  //   var multiAreaCanvas = $("#areachart-multi1").get(0).getContext("2d");
  //   var multiAreaChart1 = new Chart(multiAreaCanvas, {
  //     type: 'line',
  //     data: multiAreaData1,
  //     options: multiAreaOptions1
  //   });
  // }

  if ($("#areachart-multi2").length) {
    var multiAreaCanvas = $("#areachart-multi2").get(0).getContext("2d");
    var multiAreaChart2 = new Chart(multiAreaCanvas, {
      type: 'line',
      data: multiAreaData2,
      options: multiAreaOptions2
    });
  }

  if ($("#doughnutChart").length) {
    var doughnutChartCanvas = $("#doughnutChart").get(0).getContext("2d");
    var doughnutChart = new Chart(doughnutChartCanvas, {
      type: 'doughnut',
      data: doughnutPieData,
      options: doughnutPieOptions
    });
  }

  if ($("#doughnutChart1").length) {
    var doughnutChartCanvas = $("#doughnutChart1").get(0).getContext("2d");
    var doughnutChart1 = new Chart(doughnutChartCanvas, {
      type: 'doughnut',
      data: doughnutPieData1,
      options: doughnutPieOptions1
    });
  }

   if ($("#doughnutChart2").length) {
    var doughnutChartCanvas = $("#doughnutChart2").get(0).getContext("2d");
    var doughnutChart2 = new Chart(doughnutChartCanvas, {
      type: 'doughnut',
      data: doughnutPieData2,
      options: doughnutPieOptions2
    });
  }

  
});