import Draggable from "react-draggable";
import React from "react";
import { Card, CardContent, TextField, TextareaAutosize } from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2/Grid2";

function Task() {
    return (
        <Draggable>
            <div className="task">
                <Card >
                    <CardContent>
                        <Grid container spacing={2}>
                            <Grid item xs="auto">
                                <TextField
                                    variant="outlined"
                                    label="Task Name"
                                    defaultValue=""
                                />
                            </Grid>
                        </Grid>
                        <Grid container spacing={2}>
                            <Grid item xs="auto">
                                <TextareaAutosize
                                    variant="standard"
                                    label="Task Description"
                                    defaultValue=""
                                />
                            </Grid>
                        </Grid>
                    </CardContent>
                </Card>
            </div>
        </Draggable>

    );
};

export default Task;