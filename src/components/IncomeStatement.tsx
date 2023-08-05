import { useState } from "react";
import Income from "./Income";
import Expenses from "./Expenses";

function IncomeStatement() {
    return (
        <div className="statement">
            <h1 className="bg-black text-white">Balance Sheet</h1>
            <Income />
            <Expenses />
        </div>
    )
}

export default IncomeStatement;