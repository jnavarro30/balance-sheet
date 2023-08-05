import { useState } from "react";

function Expenses() {
    const [taxes, setTaxes] = useState(0);
    const [mortgagePayment, setMortgagePayment] = useState(750);
    const [schoolLoanPayment, setSchoolLoanPayment] = useState(0);
    const [carPayment, setCarPayment] = useState(0);
    const [creditCardPayment, setCreditCardPayment] = useState(0);
    const [retailPayment, setRetailPayment] = useState(0);
    const [otherExpenses, setOtherExpenses] = useState(0);
    const [childExpenses, setChildExpenses] = useState(0);
    const [bankLoanPayment, setBankLoanPayment] = useState(0);
    return (
        <div className="expenses grid grid-cols-2 border-2">
                <div className="label2 border-2">
                    <h1 className="bg-black text-white align-left">Expenses</h1>
                    <p className="outflow-taxes">Taxes:</p>
                    <p className="outflow-mortgage-payment">Home Mortgage:</p>
                    <p className="outflow-school-payment">School Loan Payment:</p>
                    <p className="outflow-car-payment">Car Payment:</p>
                    <p className="outflow-credit-card">Credit Card Payment:</p>
                    <p className="outflow-retail-payment">Retail Payment:</p>
                    <p className="outflow-other-expenses">Other Expenses:</p>
                    <p className="outflow-child-expenses">Child Expenses:</p>
                    <p className="outflow-bank-payment">Bank Loan Payment:</p>
                </div>
                <div className="outflow border-2">
                    <h1 className="bg-black text-white align-left">Outflow</h1>
                    <p className="taxes">{taxes}</p>
                    <p className="mortgage-payment">{mortgagePayment}</p>
                    <p className="school-payment">{schoolLoanPayment}</p>
                    <p className="car-payment">{carPayment}</p>
                    <p className="credit-card">{creditCardPayment}</p>
                    <p className="retail-payment">{retailPayment}</p>
                    <p className="other-expenses">{otherExpenses}</p>
                    <p className="child-expenses">{childExpenses}</p>
                    <p className="bank-payment">{bankLoanPayment}</p>
                </div>
            </div>
    )
}

export default Expenses;