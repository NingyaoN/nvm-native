import React from 'react';
import { TapGestureHandler, State } from 'react-native-gesture-handler';
import Animated, {
  useCode,
  eq,
  cond,
  call,
  neq,
  greaterThan,
  and,
  add,
  useValue,
  set,
  startClock,
  stopClock,
  not,
  clockRunning,
} from 'react-native-reanimated';
import {
  useTapGestureHandler,
  useClock,
} from 'react-native-redash/lib/module/v1';
interface BorderlessTapProps {
  onPress: () => void;
  children: React.ReactNode;
}

const BorderlessTap = ({ children, onPress }: BorderlessTapProps) => {
  const { gestureHandler, state } = useTapGestureHandler();
  const clock = useClock();
  const start = useValue(0);
  const opacity = useValue(0);
  useCode(
    () => [
      cond(and(not(clockRunning(clock)), eq(state, State.BEGAN)), [
        startClock(clock),
        set(start, clock),
      ]),

      cond(neq(state, State.BEGAN), stopClock(clock)),
      cond(eq(state, State.END), [call([], onPress)]),
      set(
        opacity,
        cond(
          and(greaterThan(clock, add(start, 300)), clockRunning(clock)),
          1,
          0.5
        )
      ),
    ],
    []
  );

  return (
    <TapGestureHandler {...gestureHandler}>
      <Animated.View style={{ opacity }}>{children}</Animated.View>
    </TapGestureHandler>
  );
};

export default BorderlessTap;
