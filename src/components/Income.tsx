import { useState } from "react";

function Income() {
    const [monthly, setMonthly] = useState(true);
    const [salary, setSalary] = useState(55000);
    const [interest, setInterest] = useState(0);
    const [dividends, setDividends] = useState(124.66);
    const [realEstate, setRealEstate] = useState(0);
    const [businesses, setBusinesses] = useState(0);
    return (
        <div className="income grid grid-cols-2 border-2">
                <div className="label border-2">
                    <h1 className="bg-black text-white align-left">Income</h1>
                    <p className="salary">Salary:</p>
                    <p className="interest">Interest:</p>
                    <p className="dividends">Dividends:</p>
                    <p className="real-estate">Real Estate:</p>
                    <p className="business">Businesses:</p>
                </div>
                <div className="inflow border-2">
                    <h1 className="bg-black text-white">Inflow</h1>
                    <p className="inflow-salary">{monthly ? (salary/12).toFixed(2) : salary}</p>
                    <p className="inflow-interest">{interest}</p>
                    <p className="inflow-dividends">{monthly ? (dividends/12).toFixed(2) : dividends}</p>
                    <p className="inflow-real-estate">{realEstate}</p>
                    <p className="inflow-business">{businesses}</p>
                </div>
            </div>
    )
}

export default Income;