import React from 'react';
import { connect } from 'react-redux';
import ExpenseListItem from './ExpenseListItem';
import selectExpenses from '../selectors/expenses';


export const ExpenseList = (props) => (
    <div className="content-container">
        <div className="list-header">
            <div className="show-for-mobile">Products</div>
            <div className="show-for-desktop">Product</div>
            <div className="show-for-desktop">Price</div>
        </div>

        <div className="list-body">
            {
                props.expenses.length === 0 ? (
                    <div className="list-item list-item--message">
                        <span>No product</span>
                    </div>
                ) : (
                    props.expenses.map((expense) => {
                        return <ExpenseListItem key={expense.id} {...expense} />
                    })
                )
            }
        </div>
    </div>
)
const mapStateToPraps = (state) => {
    return {
        expenses: selectExpenses(state.expenses, state.filters)
    }
};
export default connect(mapStateToPraps)(ExpenseList);

