document.addEventListener("DOMContentLoaded", () => {
    // Data for the bar chart
    const labels = ["January", "February", "March", "April", "May", "June"];
    const data = {
        labels: labels,
        datasets: [{
            label: "Monthly Income",
            data: [500, 700, 800, 600, 900, 750], // Replace with your data
            backgroundColor: "rgba(75, 192, 192, 0.2)",
            borderColor: "rgba(75, 192, 192, 1)",
            borderWidth: 1
        }, {
            label: "Monthly Expenses",
            data: [400, 500, 600, 450, 700, 650], // Replace with your data
            backgroundColor: "rgba(255, 99, 132, 0.2)",
            borderColor: "rgba(255, 99, 132, 1)",
            borderWidth: 1
        }]
    };

    // Configuration for the bar chart
    const config = {
        type: "bar",
        data: data,
        options: {
            responsive: true,
            plugins: {
                legend: {
                    position: "top",
                },
                title: {
                    display: true,
                    text: "Monthly Income vs Expenses"
                }
            },
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        }
    };

    // Render the chart in the canvas element
    const ctx = document.getElementById("barChart").getContext("2d");
    new Chart(ctx, config);
});