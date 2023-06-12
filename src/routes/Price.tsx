import { fetchCoinHistory } from "../api";
import { useQuery } from "react-query";

import styled from "styled-components";

interface PriceProps {
  coinId: string;
}
function getFullYmdStr(d: Date) {
  //년월일시분초 문자열 생성

  return (
    d.getFullYear() +
    "-" +
    (d.getMonth() + 1) +
    "-" +
    d.getDate() +
    " " +
    d.getHours() +
    ":" +
    d.getMinutes() +
    ":" +
    d.getSeconds() +
    ""
  );
}
interface IHistorical {
  time_open: number;
  time_close: number;
  open: string;
  high: string;
  low: string;
  close: string;
  volume: string;
  market_cap: number;
}

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: 1rem;
`;

function Price({ coinId }: PriceProps) {
  const { isLoading, data } = useQuery<IHistorical[]>(["ohlcv", coinId], () =>
    fetchCoinHistory(coinId)
  );

  return (
    <div>
      {isLoading ? (
        "Loading..."
      ) : (
        <Grid>
          <p>Time Open</p>
          <p>Time Close</p>
          <p>Open</p>
          <p>High</p>
          <p>Low</p>
          {data?.map((ele) => (
            <>
              <p>{getFullYmdStr(new Date(ele.time_open))}</p>
              <p>{getFullYmdStr(new Date(ele.time_close))}</p>
              <p>{ele.open}$</p>
              <p>{ele.high}$</p>
              <p>{ele.low}$</p>
            </>
          ))}
        </Grid>
      )}
    </div>
  );
}
export default Price;
