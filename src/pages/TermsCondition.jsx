import * as React from 'react';
import Card from "@mui/material/Card";
import Accordion from '@mui/material/Accordion';
import AccordionActions from '@mui/material/AccordionActions';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Button from '@mui/material/Button';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import { Link } from 'react-router-dom';

function TermsCondition() {
    return (
        <>
            <div role="presentation" style={{ marginTop: "80px", padding: "0px", marginBottom: "0px", height: "0px" }}>
                <Breadcrumbs aria-label="breadcrumb">
                    <Link to="/" style={{ textDecoration: "none" }}>Home</Link>
                    <Typography sx={{ color: 'text.primary' }}>Terms & Condition</Typography>
                </Breadcrumbs>
            </div>
            <Card
                sx={{
                    display: "flex",
                    justifyContent: "center;",
                    marginTop: "30px",
                    backgroundColor: "lightblue",
                    borderRadius: "10px"
                }}
            >
                <h1 style={{ color: "white" }}>Terms & Condition</h1>
            </Card>
            <Card style={{ width: "80%", justifyContent: "center", margin: "20px auto" }}>
                <div>
                    <Accordion defaultExpanded style={{ marginBottom: "10px" }}>
                        <AccordionSummary
                            expandIcon={<ExpandMoreIcon />}
                            aria-controls="panel1-content"
                            id="panel1-header"
                        >
                            <Typography component="span">How to unlock your benefits?</Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                            malesuada lacus ex, sit amet blandit leo lobortis eget.
                        </AccordionDetails>
                    </Accordion>
                    <Accordion style={{ marginBottom: "10px" }}>
                        <AccordionSummary
                            expandIcon={<ExpandMoreIcon />}
                            aria-controls="panel2-content"
                            id="panel2-header"
                        >
                            <Typography component="span">How to sign up with us?</Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                            malesuada lacus ex, sit amet blandit leo lobortis eget.
                        </AccordionDetails>
                    </Accordion>
                    <Accordion style={{ marginBottom: "10px" }}>
                        <AccordionSummary
                            expandIcon={<ExpandMoreIcon />}
                            aria-controls="panel3-content"
                            id="panel3-header"
                        >
                            <Typography component="span">How to order the product from the list?</Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                            malesuada lacus ex, sit amet blandit leo lobortis eget.
                        </AccordionDetails>
                        <AccordionActions>
                            <Button>Cancel</Button>
                            <Button>Agree</Button>
                        </AccordionActions>
                    </Accordion>
                    <Accordion style={{ marginBottom: "10px" }}>
                        <AccordionSummary
                            expandIcon={<ExpandMoreIcon />}
                            aria-controls="panel3-content"
                            id="panel3-header"
                        >
                            <Typography component="span">Hot to get refund back of your account?</Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                            malesuada lacus ex, sit amet blandit leo lobortis eget.
                        </AccordionDetails>
                        <AccordionActions>
                            <Button>Cancel</Button>
                            <Button>Agree</Button>
                        </AccordionActions>
                    </Accordion>
                    <Accordion style={{ marginBottom: "10px" }}>
                        <AccordionSummary
                            expandIcon={<ExpandMoreIcon />}
                            aria-controls="panel3-content"
                            id="panel3-header"
                        >
                            <Typography component="span">How to change your password?</Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                            malesuada lacus ex, sit amet blandit leo lobortis eget.
                        </AccordionDetails>
                        <AccordionActions>
                            <Button>Cancel</Button>
                            <Button>Agree</Button>
                        </AccordionActions>
                    </Accordion>
                </div>
            </Card>
        </>
    );
}

export default TermsCondition;