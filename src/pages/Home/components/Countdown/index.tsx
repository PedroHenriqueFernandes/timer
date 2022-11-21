import { differenceInSeconds } from "date-fns";
import { useEffect, useState } from "react";
import { CountdownContainer, Separator } from "./styles";

interface CountdownProps {
  activeCycle: any;
  setCycles: any;
  activeCycleId: any;
}

export function Countdown({
  activeCycle,
  setCycles,
  activeCycleId,
}: CountdownProps) {
  const [amountSecondsPassed, setAmountSecondsPassed] = useState(0);
  const totalSeconds = activeCycle ? activeCycle.minutesAmount * 60 : 0;

  useEffectt(() => {
    let interval: number;

    if (activeCycle) {
      interval = setInterval(() => {
        const secondsDifference = differenceInSecondsnds(
          new Date(),
          activeCycle.startDate
        );

        if (secondsDifference >= totalSeconds) {
          setCycles((state) => {
            return state.map((cycle) => {
              if (cycle.id === activeCycleId) {
                return {
                  ...cycle,
                  fineshedDate: new Date(),
                };
              } else {
                return cycle;
              }
            });
          });
          setAmountSecondsPassed(totalSeconds);

          clearInterval(interval);
        } else {
          setAmountSecondsPassed(secondsDifference);
        }
      }, 1000);
    }

    return () => {
      clearInterval(interval);
    };
  }, [activeCycle, totalSeconds, activeCycleId]);

  return (
    <CountdownContainer>
      <span>{minutes[0]}</span>
      <span>{minutes[1]}</span>

      <Separator>:</Separator>

      <span>{seconds[0]}</span>
      <span>{seconds[1]}</span>
    </CountdownContainer>
  );
}
