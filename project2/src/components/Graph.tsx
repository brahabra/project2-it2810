import React, { useState } from "react";
import { Container, Paper, Typography, IconButton } from "@mui/material";
import "../styles/Commit.css";
import { Commit } from "../types"
import { PieChart } from 'react-minimal-pie-chart';

function getRandColor() {
    return "#" + Math.floor(Math.random()*16777215).toString(16);
}

type Member = {
  name: string;
  commits: number;
  color: string;
};

function calcMemberDistrobution(commits: Commit[]) {
  let members: Map<string, Member> = new Map();
  let member: string;
  for (let i = 0; i < commits.length; i++) {
    member = commits[i].committer_name;
    if (typeof members.get(member) === "undefined") {
      members.set(member, {name: member, commits: 0, color: getRandColor()}) 
    } 
    members.get(member)!.commits++;  
  }
  let data: Member[] = [];
  members.forEach((value) => {
     data.push(value);
  })
  return data;
}

interface Props {
    commits: Commit[],
}

export const Graph = (props: Props) => {
    const membersDistrobution = calcMemberDistrobution(props.commits);
    const chartData: {title: string, value:number, color: string}[] = [];
    let member: Member;

    for (let i = 0; i < membersDistrobution.length; i++) {
      member = membersDistrobution[i];
      chartData.push( { title: member.name, value: member.commits, color: member.color } );
    }
    console.log(chartData);

  return (
    <Container>
      <Paper sx={{
            padding: '100px',
            borderRadius: '20px',
            width: 'auto',
            margin: '20px',
          }}
      >
        <>
        <PieChart
            data={chartData}
        />
        {props.commits.map((commit: Commit)=>{
            <Typography> Member: {commit.committer_name}</Typography>
        })}
        </>
      </Paper>
    </Container>
  );
};