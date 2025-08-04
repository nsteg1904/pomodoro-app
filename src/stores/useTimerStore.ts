import type { TimerMode } from '@/utils/types';
import { defineStore } from 'pinia';
import { computed, reactive } from 'vue';

type TimerConfig = {
  focus: number;
  shortBreak: number;
  longBreak: number;
  longBreakInterval: number;
};

type TimerRuntimeState = {
  isRunning: boolean;
  secondsLeft: number;
  mode: TimerMode;
  cycleCount: number;
  intervalId: number | null;
};

//reactive?
export const useTimerStore = defineStore('TimerStore', () => {
  const config = reactive<TimerConfig>({
    focus: 25 * 60,
    shortBreak: 5 * 60,
    longBreak: 15 * 60,
    longBreakInterval: 4,
  });

  const state = reactive<TimerRuntimeState>({
    isRunning: false,
    secondsLeft: config.focus,
    mode: 'focus',
    cycleCount: 0,
    intervalId: null,
  });

  const formattedTime = computed(() => {
    const m = Math.floor(state.secondsLeft / 60)
      .toString()
      .padStart(2, '0');
    const s = (state.secondsLeft % 60).toString().padStart(2, '0');
    return `${m}:${s}`;
  });

  const isBreak = computed(() => state.mode !== 'focus');

  const nextCycle = () => {
    if (state.mode === 'focus') {
      state.cycleCount++;
      state.mode =
        state.cycleCount % config.longBreakInterval === 0
          ? 'longBreak'
          : 'shortBreak';
    } else {
      state.mode = 'focus';
    }

    state.secondsLeft = config[state.mode];
    start(); // auto-start next session
  };

  const setMode = (mode: 'focus' | 'shortBreak' | 'longBreak') => {
    pause();
    state.mode = mode;
    state.secondsLeft = config[mode];
  };

  const reset = () => {
    pause();
    state.secondsLeft = config[state.mode];
    state.cycleCount = 0;
  };

  const pause = () => {
    state.isRunning = false;
    if (state.intervalId) {
      clearInterval(state.intervalId);
      state.intervalId = null;
    }
  };
  const tick = () => {
    if (state.secondsLeft > 0) {
      state.secondsLeft--;
    } else {
      pause();
      nextCycle();
    }
  };

  const start = () => {
    if (state.isRunning || state.intervalId) return;

    state.isRunning = true;
    state.intervalId = window.setInterval(() => {
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
    timerState: state,
    timerCofig: config,
    formattedTime,
    isBreak,
  };
});
