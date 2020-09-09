const ADD_DEAL = 'ADD-DEAL';

let initialState = {
    deals: [
        {
            id: 1,
            date: '09.09.2020',
            client: 'ПМК Дорема',
            responsibility: {
                managerId: '1',
                managerName: 'Артём Соловьёв',
                head: 'Егор Сумкин'
            },
            dealStatus: {
                approved: false,
                providerPaid: false,
                delivered: false,
                clientPaid: false,
                docSigned: false,
                docCollected: false,
            },
            docsFiles: {
                clientInvoices: [
                    {id: 'ci_1', company: 'Demir', fileUrl: '', sum: 100000},
                    {id: 'ci_2', company: 'Demir', fileUrl: '', sum: 150000}
                ],
                sumClientInvoices: 250000,
                providerInvoices: [
                    {id: 'pi_1', company: 'MC', fileUrl: '', sum: 90000},
                    {id: 'pi_2', company: 'Dipos', fileUrl: '', sum: 120000},
                    {id: 'pi_3', company: 'Akti', fileUrl: '', sum: 5000}
                ],
                sumProviderInvoices: 215000,
                allDocs: [
                    {id: 'ad_1', company: 'MC', fileUrl: '', sum: 90000},
                    {id: 'ad_2', company: 'Dipos', fileUrl: '', sum: 118000},
                    {id: 'ad_3', company: 'Akti', fileUrl: '', sum: 5000}
                ],
                delta: 20000
            },
            deliver: {
                drivers: [
                    {driverName: 'Рома МАЗ', sum: 10000},
                    {driverName: 'Юсуп Рабаданов', sum: 5700},
                    {driverName: 'Никита Борейко', sum: 9000}
                ],
                forwarders: [
                    {forwarderName: 'Рома МАЗ', sum: 1000},
                    {forwarderName: 'Ярослав Бойченко', sum: 2700},
                    {forwarderName: 'Марк Борисов (К)', sum: 1000}
                ]
            },
            commentManager: 'Доставка через 2 дня. Клиент хочет вернуть трубу 50х50 и заказать новую, но доплатит позже',
            commentHead: 'Везем в понедельник'
        },
        {
            id: 2,
            date: '12.09.2020',
            client: 'АЭС',
            responsibility: {
                managerId: '2',
                managerName: 'Тёма Рыбаков',
                head: 'Егор Сумкин'
            },
            dealStatus: {
                approved: false,
                providerPaid: false,
                delivered: false,
                clientPaid: false,
                docSigned: false,
                docCollected: false,
            },
            docsFiles: {
                clientInvoices: [
                    {id: 'ci_1', company: 'AST', fileUrl: '', sum: 35000},
                    {id: 'ci_2', company: 'Demir', fileUrl: '', sum: 30000}
                ],
                sumClientInvoices: 250000,
                providerInvoices: [
                    {id: 'pi_1', company: 'MC', fileUrl: '', sum: 32000},
                    {id: 'pi_2', company: 'Brok', fileUrl: '', sum: 10000}
                ],
                sumProviderInvoices: 215000,
                allDocs: [
                    {id: 'ad_1', company: 'MC', fileUrl: '', sum: 31000},
                    {id: 'ad_2', company: 'Brok', fileUrl: '', sum: 9500}
                ],
                delta: 20000
            },
            deliver: {
                drivers: [
                    {driverName: 'Юсуп Рабаданов', sum: 5700}
                ],
                forwarders: [
                    {forwarderName: 'Юсуп Рабаданов', sum: 1000},
                    {forwarderName: 'Ярослав Бойченко', sum: 1300}
                ]
            },
            commentManager: '',
            commentHead: ''
        },
    ],
    newDeal: {
        id: '',
        date: '',
        client: '',
        responsibility: {
            managerId: '',
            managerName: '',
            head: ''
        },
        dealStatus: {
            approved: false,
            providerPaid: false,
            delivered: false,
            clientPaid: false,
            docSigned: false,
            docCollected: false,
        },
        docsFiles: {
            clientInvoices: {id: 'ci_1', company: 'AST', fileUrl: '', sum: 35000},
            sumClientInvoices: 250000,
            providerInvoices: {id: 'pi_1', company: 'MC', fileUrl: '', sum: 32000},
            sumProviderInvoices: 215000,
            allDocs: {id: 'ad_1', company: 'MC', fileUrl: '', sum: 31000},
            delta: 20000
        },
        deliver: {
            drivers: {driverName: 'Юсуп Рабаданов', sum: 5700},
            forwarders: {forwarderName: 'Юсуп Рабаданов', sum: 1000}
        },
        commentManager: '',
        commentHead: ''
    }
}

const dealsReducer = (state = initialState, action) => {
    switch (action.type) {
        default:
            return state;
    }
};

export const addDealActionCreator = () => ({type: ADD_DEAL});

export default dealsReducer;