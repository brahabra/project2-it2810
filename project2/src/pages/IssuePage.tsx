import React, { useEffect, useState } from 'react';
import { getIssues } from '../api/fetch';
import { Issue } from '../types';
import { Container } from '@mui/system';
import { couldStartTrivia } from 'typescript';
import { Paper } from '@mui/material';

export default function IssuePage() {
    const [issues, setIssues] = useState<Issue[]>([])
    const [isLoading, setLoading] = useState(true);

    useEffect(() => {
        getIssues('17381', 'glpat-CRs4epaLyzKdvdpGzE_3').then((res) => {
        for (let i = 0; i < res.length; i++) {
            if (!issues.find((el) => el.id === res[i].id)) {
              issues.push(res[i]);
            }
        }
        console.log(issues)
        setLoading(false);
        });
      }, [issues]);

    return(
        <Container>
            <Paper>hello</Paper>
        </Container>
    )
}