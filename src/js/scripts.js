document.addEventListener("DOMContentLoaded", () => {
    // Data for the bar chart
    const labels = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    const data = {
        labels: labels,
        datasets: [
            {
                label: "Monthly Income",
                data: [], // Will be set dynamically
                backgroundColor: "rgba(75, 192, 192, 0.2)",
                borderColor: "rgba(75, 192, 192, 1)",
                borderWidth: 1
            },
            {
                label: "Monthly Expenses",
                data: [], // Will be set dynamically
                backgroundColor: "rgba(255, 99, 132, 0.2)",
                borderColor: "rgba(255, 99, 132, 1)",
                borderWidth: 1
            }
        ]
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
    const myChart = new Chart(ctx, config);

    // Function to retrieve income and expense values for each month
    function getMonthlyData() {
        const months = [
            "january", "february", "march", "april", "may", "june",
            "july", "august", "september", "october", "november", "december"
        ];

        const monthlyData = {};

        months.forEach(month => {
            const incomeInput = document.getElementById(`${month}-income`);
            const expenseInput = document.getElementById(`${month}-expenses`);

            // Retrieve values and parse them as numbers
            const income = parseFloat(incomeInput.value) || 0; // Default to 0 if empty or invalid
            const expenses = parseFloat(expenseInput.value) || 0;

            // Store the data in the object
            monthlyData[month] = {
                income: income,
                expenses: expenses
            };
        });

        return monthlyData;
    }

    // Function to update the chart with new data
    function updateChart() {
        const monthlyData = getMonthlyData();

        // Extract income and expenses data for each month
        const incomeData = [];
        const expensesData = [];

        Object.keys(monthlyData).forEach(month => {
            incomeData.push(monthlyData[month].income);
            expensesData.push(monthlyData[month].expenses);
        });

        // Update the chart's datasets
        myChart.data.datasets[0].data = incomeData;
        myChart.data.datasets[1].data = expensesData;

        // Refresh the chart
        myChart.update();
    }

    // Add a button to update the chart
    const updateButton = document.createElement("button");
    updateButton.textContent = "Update Chart";
    updateButton.className = "btn btn-success mt-3";
    updateButton.addEventListener("click", updateChart);

    // Append the button to the Data tab
    const dataTab = document.getElementById("data");
    dataTab.appendChild(updateButton);
});