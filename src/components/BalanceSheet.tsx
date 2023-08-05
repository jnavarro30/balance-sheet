import Assets from "./Assets";
import Liabilities from "./Liabilities";

function BalanceSheet() {
    return (
        <div className="balance-sheet">
            <h1 className="bg-black text-white">Balance Sheet</h1>
            <Assets />
            <Liabilities />
        </div>
    )
}

export default BalanceSheet;