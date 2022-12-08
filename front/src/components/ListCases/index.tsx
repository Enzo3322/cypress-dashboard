import { CircularProgress } from "@mui/material";
import { Results } from "../../cypress";
import { TestSuites } from "./ListCase";

interface ListTestCaseProps {
    results: Results[]
}

export const ListTestCases = ({ results }: ListTestCaseProps) => {
    if (!results) return <CircularProgress />

    return (
        <div>
            <h1>Registro de execução</h1>
            <div className="test-list-container">
                {results.map((result) => <TestSuites testcase={result?.suites} />)}
            </div>
        </div>
    )
}