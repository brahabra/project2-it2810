import { Container, Typography, Box } from "@mui/material";
import { Commit } from "../types"
import { PieChart } from 'react-minimal-pie-chart';
import { style } from "../styles/Styles";

function getColor(memberNr: number) {
  const startRange:number[] = [0, 150, 0];
  const endRange:number = 255;
  const intervall:number[] = [0, 20, 2];
  let rgb:string[] = [((startRange[0] + intervall[0]*memberNr)%endRange).toString(16), 
                      ((startRange[1] + intervall[1]*memberNr)%endRange).toString(16), 
                      ((startRange[2] + intervall[2]*memberNr)%endRange).toString(16)];
  let color:string = "#";
    for (let i = 0; i < rgb.length; i++) {
      while (rgb[i].length < 2) {
        rgb[i] = rgb[i] + "0";
      }
      color = color + rgb[i];
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
  const membersDistribution = calcMemberDistribution(props.commits);
  const chartData: {title: string, value:number, color: string}[] = [];
  let member: Member;

  for (let i = 0; i < membersDistribution.length; i++) {
    member = membersDistribution[i];
    chartData.push( { title: member.name, value: member.commits, color: member.color } );
  }
  return (
    <Container>
      <Box sx={style.graphContainer}>
        <>
        <Box sx={style.chart}>
          <PieChart animate={true}  data={chartData}/>
        </Box>
   
        {membersDistribution.map(((member: Member)=>(
          <Box key={member.name} sx={style.chartNames}>
            <svg width="10" height="10">
              <rect width="10" height="10" rx="2" fill={member.color}/>
            </svg>
            <Typography>{member.name}</Typography>
          </Box>
          )))}
 
        </>
      </Box>
    </Container>
  );
};
