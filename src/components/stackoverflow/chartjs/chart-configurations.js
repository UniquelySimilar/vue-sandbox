const sampleBarConfig = {
  type: 'bar',
  data: {
    labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
    datasets: [{
      label: '# of Votes',
      data: [],
      backgroundColor: [
        'rgba(255, 99, 132, 0.2)',
        'rgba(54, 162, 235, 0.2)',
        'rgba(255, 206, 86, 0.2)',
        'rgba(75, 192, 192, 0.2)',
        'rgba(153, 102, 255, 0.2)',
        'rgba(255, 159, 64, 0.2)'
      ],
      borderColor: [
        'rgba(255, 99, 132, 1)',
        'rgba(54, 162, 235, 1)',
        'rgba(255, 206, 86, 1)',
        'rgba(75, 192, 192, 1)',
        'rgba(153, 102, 255, 1)',
        'rgba(255, 159, 64, 1)'
      ],
      borderWidth: 1
    }]
  },
  options: {
    scales: {
      yAxes: [{
        ticks: {
          beginAtZero: true
        }
      }]
    },
    // See https://stackoverflow.com/questions/38512001/charts-js-graph-not-scaling-to-canvas-size
    responsive: false,
    //maintainAspectRatio: false
  }
}

const samplePieConfig = {
  type: 'pie',
  data: {
    datasets: [{
      data: [],
      backgroundColor: [
        'rgba(255, 0, 0, 0.8)',
        'rgba(0, 255, 0, 0.8)',
        'rgba(0, 0, 255, 0.8)',
      ]
    }],
    // These labels appear in the legend and in the tooltips when hovering different arcs
    labels: [
      'Red',
      'Green',
      'Blue'
    ]
  },
  options: {
    responsive: false
  }
}

const sampleLineConfig = {
  type: 'line',
  data: {
    labels: [
      'January',
      'February',
      'March',
      'April',
      'May',
      'June',
      'July'
    ],
    datasets: [{
      label: 'Sample Dataset',
      data: [],
      fill: false,
      borderColor: 'rgb(75, 192, 192)',
      tension: 0.1
    }]
  },
  options: {
    responsive: false
  }
};

export {
  sampleBarConfig,
  samplePieConfig,
  sampleLineConfig
}