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
        lang: {
            downloadJPEG: 'Baixar imagem JPEG',
            downloadPDF: 'Baixar arquivo PDF',
            downloadPNG: 'Baixar imagem PNG',
            downloadSVG: 'Baixar vetor SVG',
            printChart: 'Imprimir gráfico',
            downloadCSV: 'Baixar arquivo CSV',
            downloadXLS: 'Baixar arquivo XLS',
            viewData: 'Tabela de dados',
            openInCloud: 'Abrir na Nuvem'

        },
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
        lang: {
            downloadJPEG: 'Baixar imagem JPEG',
            downloadPDF: 'Baixar arquivo PDF',
            downloadPNG: 'Baixar imagem PNG',
            downloadSVG: 'Baixar vetor SVG',
            printChart: 'Imprimir gráfico',
            downloadCSV: 'Baixar arquivo CSV',
            downloadXLS: 'Baixar arquivo XLS',
            viewData: 'Tabela de dados',
            openInCloud: 'Abrir na Nuvem'

        },
        chart: {
            renderTo: 'container',
            type: 'column',
        },
        title: {
            //Titulo do grafico
            text: 'Gráfico Quantitativo'
        },
        subtitle: {
            text: "Variáveis Continuas"
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
function pizza(vet, vet2) {
    //Variavel para parametro do gráfico
    let variavelPesq = []
    for (let i = 0; i < vet.length; i++) {
        let variAux = []
        variAux.push(vet2[i])
        variAux.push(vet[i])

        variavelPesq.push(variAux)

    }
    // Build the chart
    Highcharts.chart('container', {
        lang: {
            downloadJPEG: 'Baixar imagem JPEG',
            downloadPDF: 'Baixar arquivo PDF',
            downloadPNG: 'Baixar imagem PNG',
            downloadSVG: 'Baixar vetor SVG',
            printChart: 'Imprimir gráfico',
            downloadCSV: 'Baixar arquivo CSV',
            downloadXLS: 'Baixar arquivo XLS',
            viewData: 'Tabela de dados',
            openInCloud: 'Abrir na Nuvem'
        },
        chart: {
            plotBackgroundColor: null,
            plotBorderWidth: null,
            plotShadow: false,
            type: 'pie'
        },
        title: {
            text: 'Gráfico Pizza'
        },
        subtitle: {
            text: 'Variáveis Qualitativas'
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
                },
                showInlegend: true
            }
        },
        series: [{
            name: 'Porcentagem',
            data: variavelPesq
        }]
    });
};