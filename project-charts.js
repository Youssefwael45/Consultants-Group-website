// Global variables to store chart instances so we can destroy and recreate them
let sectorDoughnutChartInstance = null;
let yearlyBarChartInstance = null;

// Function now accepts translated labels and tooltip text
function createDoughnutChart(labels, tooltipUnit) {
    const doughnutCtx = document.getElementById('sectorDoughnutChart');
    if (!doughnutCtx) return;

    if (sectorDoughnutChartInstance) {
        sectorDoughnutChartInstance.destroy();
    }

    sectorDoughnutChartInstance = new Chart(doughnutCtx, {
        type: 'doughnut',
        data: {
            labels: labels,
            datasets: [{
                label: 'Total Reports over 10 Years',
                // This data remains the same as it's a breakdown by type
                data: [250, 140, 105, 50, 44, 40, 33, 22, 17, 6], 
                backgroundColor: [
                    'rgba(0, 0, 128, 0.8)',      // Navy Blue
                    'rgba(0, 80, 150, 0.8)',     // Darker Blue
                    'rgba(70, 130, 180, 0.8)',  // Steel Blue
                    'rgba(255, 165, 0, 0.8)',   // Orange
                    'rgba(200, 0, 0, 0.8)',     // Red
                    'rgba(128, 0, 128, 0.8)',   // Purple
                    'rgba(0, 128, 128, 0.8)',   // Teal
                    'rgba(255, 215, 0, 0.8)',   // Gold/Yellow
                    'rgba(100, 149, 237, 0.8)', // Cornflower Blue
                    'rgba(169, 169, 169, 0.8)'  // Dark Gray
                ],
                borderColor: '#ffffff',
                borderWidth: 2
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            animation: { animateScale: true, animateRotate: true },
            plugins: {
                legend: {
                    position: 'top',
                    labels: { color: '#333' }
                },
                tooltip: {
                    callbacks: {
                        label: function(context) {
                            let label = context.label || '';
                            if (label) { label += ': '; }
                            if (context.parsed !== null) { label += context.parsed + ' ' + tooltipUnit; }
                            return label;
                        }
                    }
                }
            }
        }
    });
}

// Function now accepts translated dataset label and tooltip text
function createBarChart(datasetLabel, tooltipUnit) {
    const barCtx = document.getElementById('yearlyBarChart');
    if (!barCtx) return;

    if (yearlyBarChartInstance) {
        yearlyBarChartInstance.destroy();
    }

    yearlyBarChartInstance = new Chart(barCtx, {
        type: 'bar',
        data: {
            labels: ['2016', '2017', '2018', '2019', '2020', '2021', '2022', '2023', '2024', '2025'],
            datasets: [{
                label: datasetLabel,
                // --- THIS IS THE UPDATED DATA ARRAY ---
                data: [95, 110, 130, 155, 72, 85, 140, 160, 150, 175],
                // ------------------------------------
                backgroundColor: 'rgba(0, 0, 128, 0.7)',
                borderColor: 'rgba(0, 0, 128, 1)',
                borderWidth: 1,
                borderRadius: 5
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            scales: {
                y: { 
                    beginAtZero: true, 
                    ticks: { color: '#666' } 
                },
                x: { 
                    ticks: { color: '#666' } 
                }
            },
            plugins: {
                legend: { display: false },
                tooltip: {
                    callbacks: {
                        label: function(context) {
                            let label = context.dataset.label || '';
                            if (label) { label += ': '; }
                            label += context.parsed.y + ' ' + tooltipUnit;
                            return label;
                        }
                    }
                }
            }
        }
    });
}