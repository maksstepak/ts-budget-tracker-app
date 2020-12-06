import LocalStorage from './LocalStorage';
import Transaction from './Transaction';

export default class TransactionList {
  listContainer: HTMLElement;

  totalContainer: HTMLElement;

  localStorage: LocalStorage;

  constructor(listContainer: HTMLElement, totalContainer: HTMLElement) {
    this.listContainer = listContainer;
    this.totalContainer = totalContainer;
    this.localStorage = new LocalStorage();
  }

  render() {
    const transaction = this.localStorage.transactions;

    let allTransactions = '';

    transaction.forEach((txn) => {
      allTransactions += txn.render();
    });

    this.listContainer.innerHTML = allTransactions;
    this.updateTotal();
  }

  addElement(txn: Transaction) {
    this.localStorage.add(txn);

    this.listContainer.insertAdjacentHTML('afterbegin', txn.render());
    this.updateTotal();
  }

  private updateTotal() {
    this.totalContainer.innerText = `${this.localStorage.total}$`;
  }
}
