import React from 'react';
import { shallow } from 'enzyme';
import { ExpensesSummary } from '../../components/ExpensesSummary';
import expenses from '../fixtures/expenses';

test('should correctly count and total one expense', () => {
    const wrapper = shallow(<ExpensesSummary expensesCount={1} expensesTotal={expenses[0].amount} />);
    expect(wrapper).toMatchSnapshot();
});

test('should correctly count and total two expenses', () => {
    const wrapper = shallow(<ExpensesSummary expensesCount={2} expensesTotal={expenses[0].amount + expenses[1].amount} />);
    expect(wrapper).toMatchSnapshot();
});