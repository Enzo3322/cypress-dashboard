import { Suites } from "../../../cypress";
import { TestCase } from "../TestCase";


export const TestSuites = ({ testcase }: any) => {
    const testSuite = testcase[0]
    return (
        <div className={testcase ? 'success' : 'error'}>
            <h2 >{testSuite.title}</h2>
            {testSuite.tests.map((test: any) => <TestCase test={test} />)}
        </div>
    );
};
