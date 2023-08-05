import { useState } from "react";

function IncomeStatement() {
    const [salary, setSalary] = useState(55000);
    const [interest, setInterest] = useState(0);
    const [dividends, setDividends] = useState(115);
    const [realEstate, setRealEstate] = useState(0);
    const [businesses, setBusinesses] = useState(0);
    return (
        <div className="statement">
            <div className="income grid grid-cols-2 border-2">
                <div className="label border-2">
                    <h1 className="bg-black text-white align-left">Income</h1>
                    <p className="salary">Salary:</p>
                    <p className="interest">Interest:</p>
                    <p className="dividends">Dividends:</p>
                    <p className="real-estate">Real Estate:</p>
                    <p className="business">Businesses:</p>
                </div>
                <div className="flow border-2">
                <h1 className="bg-black text-white">Flow</h1>
                    <p className="flow-salary">{salary}</p>
                    <p className="flow-interest">{interest}</p>
                    <p className="flow-dividends">{dividends}</p>
                    <p className="flow-real-estate">{realEstate}</p>
                    <p className="flow-business">{businesses}</p>
                </div>
            </div>
        </div>
    )
}

export default IncomeStatement;