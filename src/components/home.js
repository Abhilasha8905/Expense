import React from "react";
import { Component } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import "../Styles/home.css";
import TextField from "@material-ui/core/TextField";

import DeleteIcon from "@material-ui/icons/Delete";

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      expenses: [],
      category: "",
      item: "",
      expense: ""
    };
  }

  handleExpenseTable() {
    const { expense, category, item, expenses } = this.state;
    var id = (+new Date() + Math.floor(Math.random() * 999999)).toString(36);
    var exp = {
      id: id,
      category: category,
      item: item,
      expense: expense,
      date: new Date().toLocaleString()
    };
    const newExpenses = [...expenses, exp];
    this.setState({
      expenses: newExpenses,
      category: "",
      item: "",
      expense: ""
    });
  }

  addNewExpense(e) {
    debugger;
    this.setState({ [e.target.name]: e.target.value });
  }

  handleRemoveRow(id) {
    var newExp = this.state.expenses.filter(exp => exp.id !== id);
    this.setState({
      expenses: newExp
    });
  }

  render() {
    const { expense, category, item, expenses } = this.state;

    return (
      <div className="Home">
        <div className="floatcontainer">
          <div className="inner">
            <form>
              <table>
                <thead>
                  <tr>
                    <th>Category</th>
                    <th>Item</th>
                    <th>Expense</th>
                    <th>Date</th>
                  </tr>
                </thead>
                <tbody>
                  {expenses.map(exp => (
                    <tr>
                      <td>{exp.category}</td>
                      <td>{exp.item}</td>
                      <td>{exp.expense}</td>
                      <td>{exp.date}</td>
                      <td>
                        <DeleteIcon
                          className="delete"
                          onClick={this.handleRemoveRow.bind(this, exp.id)}
                        />
                      </td>
                    </tr>
                  ))}
                  <tr>
                    <td>
                      <TextField
                        onChange={this.addNewExpense.bind(this)}
                        value={category}
                        name="category"
                      />
                    </td>
                    <td>
                      <TextField
                        onChange={this.addNewExpense.bind(this)}
                        value={item}
                        name="item"
                      />
                    </td>
                    <td>
                      <TextField
                        onChange={this.addNewExpense.bind(this)}
                        value={expense}
                        name="expense"
                      />
                    </td>
                  </tr>

                  <tr>
                    <Button onClick={this.handleExpenseTable.bind(this)}>
                      Add Expense
                    </Button>
                  </tr>
                </tbody>
              </table>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
