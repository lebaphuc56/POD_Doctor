// Mock data object used for LineChart and BarChart

const datammHg = {
  labels: ['5', '6', '7', '8', '9', '10'],
  datasets: [{
    data: [
      50,
      20,
      2,
      86,
      71,
      100
    ],
    color: (opacity = 1) => `rgba(134, 120, 300, ${opacity})` // optional,

  }, {
    data: [
      20,
      10,
      4,
      56,
      87,
      90
    ],
    color: (opacity = 1) => `rgba(134, 150, 60, ${opacity})`
  }, {
    data: [
      30,
      90,
      67,
      54,
      10,
      2
    ],
    color: (opacity = 1) => `rgba(134, 20, 110, ${opacity})`
  }]
}

// Mock data object used for Contribution Graph

const barData = [
  { value: 32, label: '5', frontColor: '#6CB6DD', },
  { value: 48, label: '6', frontColor: '#6CB6DD' },
  { value: 58, label: '7', frontColor: '#6CB6DD' },
  { value: 45, label: '8', frontColor: '#6CB6DD' },
  { value: 82, label: '9', frontColor: '#FF6A88', dataPointText: '82' },
  { value: 30, label: '10', frontColor: '#6CB6DD' },
  { value: 55, label: '11', frontColor: '#6CB6DD' },
];

// Mock data object for Pie Chart

const lineData = [
  { value: 40, },
  { value: 60, },
  { value: 8, },
  { value: 58, },
  { value: 56, },
  { value: 78, },
  { value: 74, },
  { value: 98, },
];

const lineData2 = [
  { value: 40, },
  {
    value: 80,
  },
  { value: 18, },
  { value: 40, },
  { value: 36, },
  { value: 60, },
  { value: 54, },
  { value: 85, },
];
const lineData3 = [
  { value: 40, },
  {
    value: 50,
  },
  { value: 22, },
  { value: 33, },
  { value: 44, },
  { value: 55, },
  { value: 22, },
  { value: 12, },
];

// Mock data object for Progress

const progressChartData = [0.4, 0.6, 0.8]

export { datammHg, barData, lineData, progressChartData, lineData2,lineData3 }
