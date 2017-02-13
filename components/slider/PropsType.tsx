export interface SliderProps {
  onChange?: (value?: number) => void;
  onAfterChange?: (value?: number) => void;
  defaultValue?: number;
  tipFormatter?: Function | null;
  value?: number;
  min?: number;
  max?: number;
  step?: number;
  disabled?: boolean;
  /* web only */
  prefixCls?: string;
  plugin?: any;
}

export interface RangeProps {
  /* web only */
  prefixCls?: string;
}
