import type { TimerMode } from '@/utils/types';
import { defineStore } from 'pinia';
import { computed, reactive } from 'vue';

type ConfigProps = {
  focus: number;
  shortBreak: number;
  longBreak: number;
  longBreakInterval: number;
};

type TimerStoreProps = {
  isRunning: boolean;
  secondsLeft: number;
  mode: TimerMode;
  cycleCount: number;
  config: ConfigProps;
  intervalId: number | null;
};

//reactive?
export const useTimerStore = defineStore('TimerStore', () => {
  const timerState = reactive<TimerStoreProps>({
    isRunning: false,
    secondsLeft: 1500, // default 25 min
    mode: 'focus',
    cycleCount: 0,
    config: {
      focus: 25 * 60,
      shortBreak: 5 * 60,
      longBreak: 15 * 60,
      longBreakInterval: 4,
    },
    intervalId: null,
  });

  const formattedTime = computed(() => {
    const m = Math.floor(timerState.secondsLeft / 60)
      .toString()
      .padStart(2, '0');
    const s = (timerState.secondsLeft % 60).toString().padStart(2, '0');
    return `${m}:${s}`;
  });

  const isBreak = computed(() => timerState.mode !== 'focus');

  const nextCycle = () => {
    if (timerState.mode === 'focus') {
      timerState.cycleCount++;
      timerState.mode =
        timerState.cycleCount % timerState.config.longBreakInterval === 0
          ? 'longBreak'
          : 'shortBreak';
    } else {
      timerState.mode = 'focus';
    }

    timerState.secondsLeft = timerState.config[timerState.mode];
    start(); // auto-start next session
  };

  const setMode = (mode: 'focus' | 'shortBreak' | 'longBreak') => {
    pause();
    timerState.mode = mode;
    timerState.secondsLeft = timerState.config[mode];
  };

  const reset = () => {
    pause();
    timerState.secondsLeft = timerState.config[timerState.mode];
    timerState.cycleCount = 0;
  };

  const pause = () => {
    timerState.isRunning = false;
    if (timerState.intervalId) {
      clearInterval(timerState.intervalId);
      timerState.intervalId = null;
    }
  };
  const tick = () => {
    if (timerState.secondsLeft > 0) {
      timerState.secondsLeft--;
    } else {
      pause();
      nextCycle();
    }
  };

  const start = () => {
    if (timerState.isRunning || timerState.intervalId) return;

    timerState.isRunning = true;
    timerState.intervalId = window.setInterval(() => {
      tick();
    }, 1000);
  };

  return {
    pause,
    reset,
    tick,
    nextCycle,
    setMode,
    start,
    timerState,
    formattedTime,
    isBreak,
  };
});
