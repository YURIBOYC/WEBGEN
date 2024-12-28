
fetch('/api/breeds')
  .then(response => response.json())
  .then(data => {
    const breeds = data.map(item => item.breed);
    const counts = data.map(item => item.count);

    const barData = [{
      x: breeds,
      y: counts,
      type: 'bar'
    }];

    Plotly.newPlot('bar-chart', barData);

    const pieData = [{
      labels: breeds,
      values: counts,
      type: 'pie'
    }];

    Plotly.newPlot('pie-chart', pieData);
  });
