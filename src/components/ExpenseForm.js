import React, { Component } from 'react'
import 'react-dates/initialize';
import moment from 'moment'


export class ExpenseForm extends Component {

    constructor(props) {
        super(props);

        this.state = {
            description: props.expense ? props.expense.description :'',
            kind: props.expense ? props.expense.kind :'',
            img: props.expense ? props.expense.img :'',
            cpu: props.expense ? props.expense.cpu :'',
            note: props.expense ? props.expense.note :'',
            amount: props.expense ? (props.expense.amount / 100).toString() :'',
            createdAt: props.expense ? moment(props.expense.createdAt) : moment(),
            calendarFocused: true,
            error: '',
        }
    }


    onDescriptionChange = (e) => {
        const description = e.target.value;
        this.setState(() => ({description}));
    }
    onKindChange = (e) => {
        const kind = e.target.value.toLowerCase();
        this.setState(() => ({kind}));
    }

    onImgChange = (e) => {
        const img = e.target.value;
        this.setState(() => ({img}));
    }

    onCpuChange = (e) => {
        const cpu = e.target.value;
        this.setState(() => ({cpu}));
    }
    onNoteChange = (e) => {
        const note = e.target.value;
        this.setState(() => ({note}));
    }

    onAmountChange = (e) => {
        const amount = e.target.value;
        if(!amount || amount.match(/^\d{1,}(\.\d{0,2})?$/)) {
         this.setState(() => ({amount})); 
        }
    }

    onDateChange = (createdAt) => {
        if(createdAt) {
            this.setState(() => ({createdAt}));
        }
    }

    onFocusChange = ({focused}) => {
        this.setState(() => ({calanderFocused: focused}));
    }

    onSubmit = (e) => {
        e.preventDefault();
        if(!this.state.description || !this.state.amount) {
            this.setState(() => ({error: 'Please provide Name and Price'}));
        }else {
            this.setState(() => ({error: ''}));
            this.props.onSubmit({
                description: this.state.description,
                kind: this.state.kind,
                img: this.state.img,
                cpu: this.state.cpu,
                amount: parseFloat(this.state.amount, 10) * 100,
                createdAt: this.state.createdAt.valueOf(),
                note: this.state.note
            })
        }
    }
  render() {
    return (
          
          <form className="form" onSubmit={this.onSubmit}>
          {this.state.error && <p className="form__error">{this.state.error}</p>}
              <input
              type="text"
              placeholder="Name"
              className="text-input"
              autoFocus
              value= {this.state.description}
              onChange={this.onDescriptionChange}
              />
              <input
              type="text"
              placeholder="Type, Laptop, Desktop, Mobile ..."
              className="text-input"
              autoFocus
              value= {this.state.kind}
              onChange={this.onKindChange}
              />

              <input
              type="text"
              placeholder="Brand Img URL"
              className="text-input"
              autoFocus
              value= {this.state.img}
              onChange={this.onImgChange}
              />

              <input
              type="text"
              placeholder="CPU"
              className="text-input"
              autoFocus
              value= {this.state.cpu}
              onChange={this.onCpuChange}
              />

              <input 
              type="text"
              className="text-input"
              placeholder="Price"
              value={this.state.amount}
              onChange={this.onAmountChange}
              />

    
              

              <textarea
              className="textarea"
              placeholder="Add specifecations to the product (Optional)"
              value={this.state.note}
              onChange={this.onNoteChange}
              >    
              </textarea>

           <div className="extra-changes">
             <button className="button btn">Save Product</button>
             </div>
          </form>
    )
  }
}

export default ExpenseForm