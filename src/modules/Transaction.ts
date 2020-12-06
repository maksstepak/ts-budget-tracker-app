import { v4 as uuidv4 } from 'uuid';

import TransactionType from '../types/TransactionType';

export default class Transaction {
  id: string;

  name: string;

  amount: number;

  type: TransactionType;

  constructor(
    name: string,
    amount: number,
    type: TransactionType,
    id?: string,
  ) {
    this.name = name;
    this.type = type;

    if (type === TransactionType.Substract) {
      this.amount = -Math.abs(amount);
    } else {
      this.amount = amount;
    }

    if (id === undefined) {
      this.id = this.generateId();
    } else {
      this.id = id;
    }
  }

  render() {
    let classes = 'transactions__tr';
    if (this.type === TransactionType.Add) {
      classes += ' transactions__tr--add';
    } else if (this.type === TransactionType.Substract) {
      classes += ' transactions__tr--subtract';
    }

    return `
        <tr class="${classes}" data-id="${this.id}">
            <td class="transactions__td">${this.name}</td>
            <td class="transactions__td">${this.amount}</td>
        </tr>
    `;
  }

  private generateId() {
    return uuidv4();
  }
}
