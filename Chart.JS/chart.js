var contexto = document.getElementById("meuGrafico").getContext('2d')

Chart.defaults.global.defaultFontColor = '#443495';
Chart.defaults.global.defaultFontFamily = "'Helvetica'";
Chart.defaults.global.lineHeight = 100;
var tabela = new Chart(contexto, {    
    type: 'bar',
    data: {
        labels: ['Janeiro', 'Fevereiro', 'Marco', 'Abril', 'Maio' ,'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'],
        datasets: [{
            label: 'Media turma 2018',
            data: [10, 8, 2, 4, 6, 9, 1, 3, 9, 10, 3, 2],
            backgroundColor: [
                'rgba(106, 145, 209, 0.4)',
                'rgba(75,124,219, 0.4)',
                'rgba(114,2,152, 0.4)',
                'rgba(61,240,44, 0.4)',
                'rgba(106, 145, 209, 0.4)',
                'rgba(75,124,219, 0.4)',
                'rgba(114,2,152, 0.4)',
                'rgba(61,240,44, 0.4)',
                'rgba(106, 145, 209, 0.4)',
                'rgba(75,124,219, 0.4)',
                'rgba(114,2,152, 0.4)',
                'rgba(61,240,44, 0.4)'                
            ],
            borderWidth: 1,
            borderColor: '#000',
            hoverBorderWidth: 3,
            hoverBorderColor: '#c7c7'
            
        }, {
            label: 'Media turma 2019',
            data: [3,2,3,4,5,6,7,8,9,10,10,10],
            backgroundColor: [
                'rgba(61,240,44, 0.4)',
                'rgba(114,2,152, 0.4)',   
                'rgba(75,124,219, 0.4)',
                'rgba(106, 145, 209, 0.4)',
                'rgba(61,240,44, 0.4)',
                'rgba(114,2,152, 0.4)',   
                'rgba(75,124,219, 0.4)',
                'rgba(106, 145, 209, 0.4)',
                'rgba(61,240,44, 0.4)',
                'rgba(114,2,152, 0.4)',   
                'rgba(75,124,219, 0.4)',
                'rgba(106, 145, 209, 0.4)'
            ],
            borderWidth: 1,
            borderColor: '#000',
            hoverBorderWidth: 3,
            hoverBorderColor: '#c7c7'
        },{
            label: 'Grau de satisfação 2018',
            type: 'line',
            data:[9, 9, 9, 9, 9, 6 , 6, 5 , 9, 4, 8.5 , 9.5],
            backgroundColor: [
                'rgba(61,240,44, 0.4)'              
            ],
            borderWidth: 1,
            borderColor: '#443495',
            hoverBorderWidth: 3,
            hoverBorderColor: '#c7c7',
            tension: 0            
        },{
            label: 'Grau de satisfação 2019',
            type: 'line',
            data:[5, 4, 2, 4, 2, 5 , 10, 2 , 4, 5, 9.2 , 5.3],
            backgroundColor: [                
                'rgba(114,2,152, 0.4)'                
            ],
            borderWidth: 1,
            borderColor: '#443495',
            hoverBorderWidth: 3,
            hoverBorderColor: '#443495',
            tension: 0
        }]        
    },
    options: {
        layout: {
            padding: {
                right: 10,
                left: 10,
                top: 5,
                bottom: 5
            }
        },
        title: {
            display: true,
            text: 'Notas dos alunos em cada mês e o grau de satisfação'
        },
        legend: {
            position: 'right'
        },
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero: true
                }
            }]
        }
    }        
})

