// Radialize the colors
Highcharts.setOptions({
    colors: Highcharts.map(Highcharts.getOptions().colors, function (color) {
        return {
            radialGradient: {
                cx: 0.5,
                cy: 0.3,
                r: 0.7
            },
            stops: [
                [0, color],
                [1, Highcharts.Color(color).brighten(-0.3).get('rgb')] // darken
            ]
        };
    })
});

//grafico discreta
function colunas(x, y) {
    Highcharts.chart('container', {
        chart: {
            type: 'column'
        },
        title: {
            //Titulo do grafico
            text: 'Gráfico Quantitativo'
        },
        subtitle: {
            text: "Variáveis discretas"
        },
        //Eixo X
        xAxis: {
            categories: x,
            crosshair: true
        },
        //Eixo Y
        yAxis: {
            min: 0,
            width: 1,
            title: {
                text: 'Porcentagem(%)'
            },
            alignTicks: true,

        },
        tooltip: {
            headerFormat: '<span style="font-size:10px">{point.key}</span><table>',

            shared: true,
            useHTML: true,
            enable: false,
            pointFormat: '<span style="color:{point.color}"></span>: <b>{point.y:.2f}%</b> do total<br/>',
        },
        plotOptions: {
            column: {
                pointPadding: 0,
                borderWidth: 0,
            },

        },
        //parametro do Y
        series: [{
            data: y,
            showInLegend: false,
            colorByPoint: true,
            name: '<b>' + 'Porcentagem' + '</b>',
            dataLabels: {
                enabled: true,
                format: '{point.y:.1f}%'
            }

        }],
        legends: [{
            enable: false,
        }],
    });
}
//-----------------------------------------------------------------------------------------

//grafico continuo
function graficoContinuo(vet, vet2) {
    // graficoContinuo(grafico, vetorLimpo)
    var chart = new Highcharts.Chart({
        chart: {
            renderTo: 'container',
            type: 'column',
        },
        title: {
            //Titulo do grafico
            text: 'Gráfico Quantitativo'
        },
        subtitle: {
            text: "Variáveis continuas"
        },

        xAxis: {
            categories: vet,
            labels: {
                x: -80,
                y: 18,
            },
            title: {
                text: 'Intervalo'
            },
        },
        yAxis: {
            min: 0,
            width: 1,
            title: {
                text: '<b>Porcentagem(%)'
            },
            gridLineColor: '#e9e9e9'
        },
        tooltip: {
            headerFormat: '<span style="font-size:10px"><b>{point.key}</span><table>',
            shared: true,
            useHTML: true,
            enable: false,
            pointFormat: '<span style="color:{point.color}"></span>: <b>{point.y:.2f}%</b> do total<br/>',
        },

        plotOptions: {
            column: {
                groupPadding: 0,
                pointPadding: 0,
                borderWidth: 0,
            }
        },

        series: [{
            data: vet2,
            showInLegend: false,
            colorByPoint: true,
            name: '<b>' + 'Porcentagem' + '</b>',
            dataLabels: {
                enabled: true,
                format: '{point.y:.1f}%'
            }
        }],
    });
};



//grafico pizza
function pizza(x, y) {
    // Radialize the colors
    Highcharts.setOptions({
        colors: Highcharts.map(Highcharts.getOptions().colors, function (color) {
            return {
                radialGradient: {
                    cx: 0.5,
                    cy: 0.3,
                    r: 0.7
                },
                stops: [
                    [0, color],
                    [1, Highcharts.Color(color).brighten(-0.3).get('rgb')] // darken
                ]
            };
        })
    });

    // Build the chart
    Highcharts.chart('container', {
        chart: {
            plotBackgroundColor: null,
            plotBorderWidth: null,
            plotShadow: false,
            type: 'pie'
        },
        title: {
            text: 'Browser market shares in January, 2018'
        },
        tooltip: {
            pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
        },
        plotOptions: {
            pie: {
                allowPointSelect: true,
                cursor: 'pointer',
                dataLabels: {
                    enabled: true,
                    format: '<b>{point.name}</b>: {point.percentage:.1f} %',
                    style: {
                        color: (Highcharts.theme && Highcharts.theme.contrastTextColor) || 'black'
                    },
                    connectorColor: 'silver'
                }
            }
        },
        series: [{
            name: 'Share',
            data: [{
                    name: 'Chrome',
                    y: 61.41
                },
                {
                    name: 'Internet Explorer',
                    y: 11.84
                },
                {
                    name: 'Firefox',
                    y: 10.85
                },
                {
                    name: 'Edge',
                    y: 4.67
                },
                {
                    name: 'Safari',
                    y: 4.18
                },
                {
                    name: 'Other',
                    y: 7.05
                }
            ]
        }]
    });
}