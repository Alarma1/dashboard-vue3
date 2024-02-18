import {defineStore} from 'pinia'

export const useMainStore = defineStore('Main', {
    state: () => ({
        darkMode: false,
        mainMenu: [
            {id: 1, icon: 'pie', name: 'Overview', rowType: 'none', view: false},
            {id: 2, icon: 'doc', name: 'Pages', subMenu: [], rowType: 'default', view: true},
            {
                id: 3,
                icon: 'bag',
                name: 'Sales',
                subMenu: ['Product List', 'Billing', 'Invoice'],
                rowType: 'default',
                view: true
            },

            {id: 4, icon: 'inbox', name: 'Messages', subMenu: [], rowType: 'mess', view: false},
            {id: 5, icon: 'lock', name: 'Authentication', subMenu: [], rowType: 'default', view: true},
            {id: 6, icon: '', name: '', rowType: 'separator', subMenu: [], view: null},
            {id: 7, icon: 'clList', name: 'Docs', subMenu: [], rowType: 'default', view: true},
            {id: 8, icon: 'collection', name: 'Components', subMenu: [], rowType: 'default', view: true},
            {id: 9, icon: 'support', name: 'Help', subMenu: [], rowType: 'default', view: true},
        ],
        clients: [
            {img: 'Neil', title: 'Neil Sims', subTitle: 'email@example.com', Quantity: 367},
            {img: 'Bonnie', title: 'Bonnie Green', subTitle: 'email@example.com', Quantity: 67},
            {img: 'Micheal', title: 'Micheal Gough', subTitle: 'email@example.com', Quantity: 3467},
            {img: 'Thomas', title: 'Thomas Lean', subTitle: 'email@example.com', Quantity: 2367},
            {img: 'Lana', title: 'Lana Byrd', subTitle: 'email@example.com', Quantity: 367},
            {img: 'Karen', title: 'Karen Nelson', subTitle: 'email@example.com', Quantity: 1367}
        ],
        products: [
            {title: 'Restaurant Booking App', subTitle: 'React & Bootstrap Framework', Quantity: 70},
            {title: 'UI Kit', subTitle: 'React & Bootstrap Framework', Quantity: 54},
            {title: 'Design System Pro', subTitle: 'Bootstrap Framework', Quantity: 47},
            {title: 'Dashboard', subTitle: 'Tailwind, React', Quantity: 43},
            {title: 'Glassmorphism UI', subTitle: 'Vue Js, Tailwind ', Quantity: 38},
            {title: 'Multipurpose Template', subTitle: 'React & Bootstrap Framework', Quantity: 22},
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
    actions: {
        isDarkModeAction() {
            this.darkMode = !this.darkMode
        },
    },
})

