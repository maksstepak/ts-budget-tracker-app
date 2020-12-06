import './scss/main.scss';

import TransactionList from './modules/TransactionList';
import Transaction from './modules/Transaction';
import TransactionType from './types/TransactionType';

const txnContainer = document.querySelector('#transactions') as HTMLElement;
const totalContainer = document.querySelector('#total-balance') as HTMLElement;
const txnAddBtn = document.querySelector('#add-btn') as HTMLButtonElement;
const txnSubBtn = document.querySelector('#sub-btn') as HTMLButtonElement;

const newTxnName = document.querySelector('#name') as HTMLInputElement;
const newTxnAmount = document.querySelector('#amount') as HTMLInputElement;

const transactionList = new TransactionList(txnContainer, totalContainer);

function addTxn(type: TransactionType): void {
  if (newTxnName.value === '' || newTxnAmount.value === '') {
    console.error('misssing information');
  } else {
    const name = newTxnName.value;
    const amount = parseFloat(newTxnAmount.value);

    const newTxn = new Transaction(name, amount, type);

    transactionList.addElement(newTxn);

    newTxnName.value = '';
    newTxnAmount.value = '';
  }
}

txnAddBtn.addEventListener('click', () => {
  addTxn(TransactionType.Add);
});

txnSubBtn.addEventListener('click', () => {
  addTxn(TransactionType.Substract);
});

transactionList.render();
