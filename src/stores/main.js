import {defineStore} from 'pinia'

export const useMainStore = defineStore('Main', {
    state: () => ({
        clients: [
            {img: 'Neil', name: 'Neil Sims', mail: 'email@example.com', sum: 367},
            {img: 'Bonnie', name: 'Bonnie Green', mail: 'email@example.com', sum: 67},
            {img: 'Micheal', name: 'Micheal Gough', mail: 'email@example.com', sum: 3467},
            {img: 'Thomas', name: 'Thomas Lean', mail: 'email@example.com', sum: 2367},
            {img: 'Lana', name: 'Lana Byrd', mail: 'email@example.com', sum: 367},
            {img: 'Karen', name: 'Karen Nelson', mail: 'email@example.com', sum: 1367}
        ],
        products: [
            {title: 'Restaurant Booking App', description: 'React & Bootstrap Framework', sales: 70},
            {title: 'UI Kit', description: 'React & Bootstrap Framework', sales: 54},
            {title: 'Design System Pro', description: 'Bootstrap Framework', sales: 47},
            {title: 'Dashboard', description: 'Tailwind, React', sales: 43},
            {title: 'Glassmorphism UI', description: 'Vue Js, Tailwind ', sales: 38},
            {title: 'Multipurpose Template', description: 'React & Bootstrap Framework', sales: 22},
        ],
        transactions: [
            {
                paymentType: 'from',
                payment: 'Bonnie Green',
                dateTime: 'Apr 23 ,2021',
                amount: 2300,
                status: 'Completed'
            },
            {
                paymentType: 'refund to',
                payment: '#00910',
                dateTime: 'Apr 23, 2021',
                amount: 670,
                status: 'Completed'
            },
            {
                paymentType: 'failed from',
                payment: '#087651',
                dateTime: 'Apr 18, 2021',
                amount: 234,
                status: 'Cancelled'
            },
            {
                paymentType: 'from',
                payment: 'Bonnie Green',
                dateTime: 'Apr 15, 2021',
                amount: 5000,
                status: 'In progress'
            },
            {
                paymentType: 'from',
                payment: 'Jese Leos',
                dateTime: 'Apr 15, 2021',
                amount: 2300,
                status: 'In progress'
            },
            {
                paymentType: 'from',
                payment: 'THEMSBERG LLC',
                dateTime: 'Apr 11, 2021',
                amount: 280,
                status: 'Completed'

            },
        ],
        salesData: {
            labels: ['01 Apr', '02 Apr', '03 Apr', '04 Apr', '05 Apr', '06 Apr', '07 Apr'],
            datasets: [{
                data: [120000, 180000, 150000, 200000, 160000, 220000, 190000],
                fill: false,
                backgroundColor: 'rgba(255, 255, 255,)',
                borderColor: 'rgb(14, 159, 110)',
                tension: 0.1
            }]
        },
        optionsChart: {
            scales: {
                y: {
                    border: {
                        display: false,
                    },
                    min: 0,
                    grid: {
                        color: '#F3F4F6',
                    },
                    ticks: {
                        stepSize: 40000,
                        callback: function (value, index, ticks) {
                            const lookup = [
                                {value: 1e3, symbol: "K"}
                            ];
                            const regexp = /\.0+$|(?<=\.[0-9]*[1-9])0+$/;
                            const item = lookup.findLast(item => value >= item.value);
                            return item ? (value / item.value).toFixed(0).replace(regexp, "").concat(item.symbol) : "0";
                        }
                    }
                },
                x: {
                    border: {
                        display: false,
                    },
                    grid: {
                        display: false,
                    },
                }
            },
            plugins: {
                legend: {
                    display: false,
                },
            },
            responsive: true,
            maintainAspectRatio: false
        },
        mobileOptionsChart: {
            scales: {
                y: {
                    display: false,
                    min: 0,
                    ticks: {
                        stepSize: 40000,
                    }
                },
                x: {
                    border: {
                        display: false,
                    },
                    grid: {
                        display: false,
                    },
                }
            },
            plugins: {
                legend: {
                    display: false,
                },
            },
            responsive: true,
            maintainAspectRatio: false
        },
    }),

})

