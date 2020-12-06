import Transaction from './Transaction';

export default class LocalStorage {
  total: number;

  transactions: Transaction[];

  constructor() {
    this.total = parseFloat(localStorage.getItem('total')) || 0;
    const transactions = JSON.parse(localStorage.getItem('transactions')) || [];

    const txns: Transaction[] = [];
    transactions.forEach((txn) => {
      const transaction = new Transaction(
        txn.name,
        txn.amount,
        txn.type,
        txn.id,
      );

      txns.push(transaction);
    });

    this.transactions = txns;
  }

  add(txn: Transaction): void {
    this.transactions.unshift(txn);

    this.total += txn.amount;

    localStorage.setItem('transactions', JSON.stringify(this.transactions));
    localStorage.setItem('total', this.total.toString());
  }
}
