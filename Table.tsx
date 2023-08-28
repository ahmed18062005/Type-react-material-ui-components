import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';



type propsType = {
    row: any[],
    col: any[]
}
export default function BasicTable(props: propsType) {
    return (
        <TableContainer component={Paper}>
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
                <TableHead>
                    <TableRow>
                        {
                            props.col.map((x, i) =>
                                <TableCell key={i}>{x.heading}</TableCell>
                            )
                        }

                    </TableRow>
                </TableHead>
                <TableBody>
                    {
                        props.row.map((x, i) =>
                            <TableRow key={i}>
                                {
                                    props.col.map((j, k) =>
                                        <TableCell key={k}>{x[j.heading]}</TableCell>
                                    )
                                }
                            </TableRow>

                        )
                    }
                    
                </TableBody>
            </Table>
        </TableContainer>
    );
}