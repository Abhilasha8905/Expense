import React from "react";
import { Component } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import "../Styles/home.css";
import TextField from "@material-ui/core/TextField";

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.state.expenses = [
      {
        id: 1,
        category: "",
        item: "",
        exp: "",
        date: ""
      }
    ];
  }

  handleExpenseTable(evt) {
    var id = (+new Date() + Math.floor(Math.random() * 999999)).toString(36);
    var expense = {
      id: id,
      category: "",
      item: "",
      exp: "",
      date: new Date().toLocaleString()
    };

    this.state.expenses.push(expense);
    this.setState(this.state.expenses);
  }

  addNewExpense(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  render() {
    const { exp, category, item } = this.state;

    return (
      <div className="Home">
        <div className="floatcontainer">
          <div className="inner">
            <form onChange={this.addNewExpense}>
              <table>
                <tbody>
                  <tr>
                    <td>
                      Category
                      <TextField value={category} name="Category" />
                    </td>
                    <td>
                      Item Name
                      <TextField value={item} name="Item" />
                    </td>
                    <td>
                      Expense
                      <TextField value={exp} name="expense" />
                    </td>
                    <td>Date</td>
                  </tr>
                  <tr>
                    <Button onClick={this.handleExpenseTable}>
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
