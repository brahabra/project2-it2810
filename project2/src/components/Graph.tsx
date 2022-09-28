import React, { useState } from "react";
import { Container, Paper, Typography, Box } from "@mui/material";
import "../styles/Commit.css";
import { Commit } from "../types"
import { PieChart } from 'react-minimal-pie-chart';

function getColor(memberNr: number) {
  const startRange:number = 65280;
  const endRange:number = 16777216;
  const intervall:number = 5000;
  let color:string = "#" + ((startRange+intervall*memberNr)%endRange).toString(16);
  while (color.length < 7) {
    color = color + "0"
  }
  return color;
}

type Member = {
  name: string;
  commits: number;
  color: string;
};

function calcMemberDistribution(commits: Commit[]) {
  let members: Map<string, Member> = new Map();
  let member: string;
  let memberNr:number = 0;
  for (let i = 0; i < commits.length; i++) {
    member = commits[i].committer_name;
    if (typeof members.get(member) === "undefined") {
      members.set(member, {name: member, commits: 0, color: getColor(memberNr)})
      memberNr++; 
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
  console.log("hei")
  const membersDistribution = calcMemberDistribution(props.commits);
  const chartData: {title: string, value:number, color: string}[] = [];
  let member: Member;

  for (let i = 0; i < membersDistribution.length; i++) {
    member = membersDistribution[i];
    chartData.push( { title: member.name, value: member.commits, color: member.color } );
  }
  return (
    <Container>
      <Paper sx={{
            padding: '20px',
            borderRadius: '20px',
            width: 'auto',
            margin: '20px',
            textAlign: 'left'
          }}
      >
        <>
        <PieChart
            data={chartData}
        />
          {membersDistribution.map(((member: Member)=>(
            <Box key={member.name} sx={{
                                          display: 'flex',
                                          flexDirection: 'row',
            }}>
              <div>
                <svg width="15" height="15">
                  <rect width="10" height="10" rx="2" fill={member.color}/>
                </svg>
              </div>
               <div>{member.name}</div>
               </Box>
          )))}
        </>
      </Paper>
    </Container>
  );
};