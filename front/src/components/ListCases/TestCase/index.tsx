import { useState } from "react";
import DoneIcon from '@mui/icons-material/Done';
import DoNotDisturbAltIcon from '@mui/icons-material/DoNotDisturbAlt';
import { CircularProgress } from "@mui/material";
import AccessAlarmIcon from '@mui/icons-material/AccessAlarm';

export const TestCase = ({ test }: any) => {
    const [open, setOpen] = useState(false)
    if (!test) return <CircularProgress />
    if (!test.pass) {

        console.log({ test })
    }
    return (
        <div className="test-container" >
            <h4 onClick={() => { setOpen(!open) }} className={`test-title ${test.pass ? 'success' : 'error'}`}> {test.pass ? <DoneIcon /> : <DoNotDisturbAltIcon />}{test?.title} <p className="time">{(test.duration / 1000).toFixed(1)}<AccessAlarmIcon /></p></h4>
            {open &&
                (<div className={`details ${test.pass ? 'success' : 'error'}`}>
                    {test.err && <p className="stack-trace">
                        {test.err.message}
                    </p>}
                    <p>
                        {test.code.split(';').map((line: string, i: number) => <p key={i}>{line}</p>)}
                    </p>

                </div>)
            }
        </div>
    )
}